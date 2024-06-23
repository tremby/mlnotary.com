/**
 * BC property transfer tax calculator.
 *
 * By Bart Nagel <bart@tremby.net>, 2024.
 * No licence for reuse is implicit; contact me.
 */
const dollarFormatter = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", trailingZeroDisplay: "stripIfInteger" });
const dollarNoSymbolFormatter = new Intl.NumberFormat("en-CA", { trailingZeroDisplay: "stripIfInteger", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const percentFormatter = new Intl.NumberFormat("en-CA", { style: "percent" });

const FTHBP_FULL_EXEMPTION = 8e3;
const FTHBP_FULL_EXEMPTION_UNTIL = 835e3;
const FTHBP_NO_MORE_EXEMPTION_AT = 860e3;

const NBHE_FULL_EXEMPTION = 20e3;
const NBHE_FULL_EXEMPTION_UNTIL = 1.1e6;
const NBHE_NO_MORE_EXEMPTION_AT = 1.15e6;

export default class Calculator {
  errorState = false;

  constructor() {
  }

  initUi(element) {
    this.el = element;
    if (!this.el) throw new Error("Bad element");

    this.fairMarketValueInput = this.getChildElOrThrow("input[name='fair-market-value']");
    this.outputContainer = this.getChildElOrThrow(".output");
    this.totalTaxOutput = this.getChildElOrThrow(".total-tax-output");
    this.totalTaxBreakdownContainer = this.getChildElOrThrow(".total-tax-breakdown-container");
    this.totalTaxBreakdown = this.getChildElOrThrow(".total-tax-breakdown");
    this.fthbpContainer = this.getChildElOrThrow(".fthbp");
    this.nbheContainer = this.getChildElOrThrow(".nbhe");

    this.initEventListeners();
    this.updateCalculator();
  }

  getChildElOrThrow(selector) {
    const el = this.el.querySelector(selector);
    if (!el) throw new Error(`Couldn't find ${selector}`);
    return el;
  }

  setErrorState(value) {
    this.errorState = value;
    this.outputContainer.hidden = value;
  }

  initEventListeners() {
    this.el.addEventListener("submit", this.handleSubmit.bind(this));
    this.fairMarketValueInput.addEventListener("input", this.updateValueValidity.bind(this));
    this.fairMarketValueInput.addEventListener("input", this.updateCalculator.bind(this));
    this.fairMarketValueInput.addEventListener("input", this.formatValueInput.bind(this));
    this.fairMarketValueInput.addEventListener("keydown", this.handleValueKeydown.bind(this));
    this.fthbpContainer.addEventListener("input", this.updateCalculator.bind(this));
    this.nbheContainer.addEventListener("input", this.updateCalculator.bind(this));
    for (const spinner of this.el.querySelectorAll(".input-spinner button")) {
      spinner.addEventListener("click", this.handleSpinnerClick.bind(this));
    }
  }

  getFairMarketValue() {
    const validity = this.fairMarketValueInput.validity;
    if (validity.patternMismatch) return null;
    const value = parseFloat(this.fairMarketValueInput.value.replace(/,/g, ""));
    if (isNaN(value)) return null;
    if (value < 0) return null;
    return value;
  }

  getFthbpQualified() {
    const input = this.el.querySelector(`input[name="fthbp"]:checked`);
    if (input == null) return null;
    return input.value === "yes";
  }

  getNbheQualified() {
    const input = this.el.querySelector(`input[name="nbhe"]:checked`);
    if (input == null) return null;
    return input.value === "yes";
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  updateValueValidity() {
    if (this.getFairMarketValue() == null) {
      this.fairMarketValueInput.setCustomValidity("Invalid value");
    } else {
      this.fairMarketValueInput.setCustomValidity("");
    }
  }

  formatValueInput(event) {
    const input = this.fairMarketValueInput;
    if (input.selectionStart !== input.selectionEnd) return;
    const rawValue = input.value;
    const value = this.getFairMarketValue();
    if (value == null) return;
    const rawBeforeSelection = rawValue.substring(0, input.selectionStart);
    const pertinentCharsBeforeSelection = rawBeforeSelection.replace(/,/g, "").length;
    const formatted = dollarNoSymbolFormatter.format(value);
    let selectionStart = 0;
    if (pertinentCharsBeforeSelection > 0) {
      let pertinentCharsSeen = 0;
      for (const char of formatted.split("")) {
        selectionStart++;
        if (char !== ",") {
          pertinentCharsSeen++;
          if (pertinentCharsSeen >= pertinentCharsBeforeSelection) break;
        }
      }
    }
    input.value = formatted;
    input.selectionStart = input.selectionEnd = selectionStart;
  }

  handleValueKeydown(event) {
    const adjust = (delta) => {
      event.preventDefault();
      this.adjustValue(delta);
    };
    switch (event.key) {
      case "ArrowUp": adjust(10e3); break;
      case "ArrowDown": adjust(-10e3); break;
      case "PageUp": adjust(100e3); break;
      case "PageDown": adjust(-100e3); break;
    }
  }

  handleSpinnerClick(event) {
    const button = event.currentTarget;
    const spinner = button.closest(".input-spinner");
    const baseDelta = parseFloat(spinner.dataset.delta);
    const multiplier = button.dataset.sign === "-" ? -1 : 1;
    const delta = baseDelta * multiplier;
    this.adjustValue(delta);
    this.fairMarketValueInput.focus();
  }

  adjustValue(delta) {
    const value = this.getFairMarketValue();
    if (value == null) return;
    const newValue = Math.max(0, value + delta);
    this.fairMarketValueInput.value = dollarNoSymbolFormatter.format(newValue);
    this.updateCalculator();
  }

  updateCalculator() {
    const value = this.getFairMarketValue();
    if (value == null || value === 0) {
      this.setErrorState(true);
      return;
    } else {
      this.setErrorState(false);
    }
    const { totalTax, breakdown, modifiers, finalTotal } = this.calculateTax(value, this.getFthbpQualified(), this.getNbheQualified());
    if (breakdown.length === 0) {
      this.totalTaxOutput.innerHTML = "$…";
      this.totalTaxBreakdownContainer.hidden = true;
    } else {
      this.totalTaxOutput.innerHTML = dollarFormatter.format(finalTotal);
      this.totalTaxBreakdownContainer.hidden = false;
      this.totalTaxBreakdown.innerHTML = `
        <tr>
          <th scope="row">Total fair market value</th>
          <td>${dollarFormatter.format(value)}</td>
          <td></td>
          <td></td>
        </tr>
        ${breakdown.map(({ min, max, rate, taxableAmount, taxAmount }) => `
          <tr>
            <th scope="row">
              Amount ${
                max === Infinity
                  ? `over ${dollarFormatter.format(min)}`
                  : `between ${dollarFormatter.format(min)} and ${dollarFormatter.format(max)}`
                }
            </th>
            <td>
              ${dollarFormatter.format(taxableAmount)}
            </td>
            <td>
              ${percentFormatter.format(rate)}
            </td>
            <td>
              ${dollarFormatter.format(taxAmount)}
            </td>
          </tr>
        `).join("")}
        ${modifiers.map(({ description, additionalInfo, amount, overruled }, i) => `
          <tr>
            <th scope="row" colspan="3">
              ${overruled ? "<s>" : ""}
              ${description}
              ${overruled ? "</s>" : ""}
            </th>
            <td>
              ${overruled ? "<s>" : ""}
              ${dollarFormatter.format(amount)}
              ${additionalInfo != null ? `
                <span class="position:relative">
                  <button type="button" class="popover-trigger" id="breakdown-popover-${i}-trigger" popovertarget="breakdown-popover-${i}">ℹ️</button>
                  <div id="breakdown-popover-${i}" popover anchor="breakdown-popover-${i}-trigger">
                    <p>${additionalInfo}</p>
                  </div>
                </span>
              ` : ""}
              ${overruled ? "</s>" : ""}
            </td>
          </tr>
        `).join("")}
        <tr class="total">
          <th scope="row" colspan="3">Total</th>
          <td>${dollarFormatter.format(finalTotal)}</td>
        </tr>
      `;
    }
  }

  calculateTax(value, fthbpEligible, nbheEligible) {
    const brackets = [
      [200e3, 0.01],
      [2e6, 0.02],
      [3e6, 0.03],
      [Infinity, 0.05],
    ];
    const breakdown = brackets.map(([max, rate], i, arr) => {
      const min = arr[i - 1]?.[0] ?? 0;
      const taxableAmount = Math.max(0, Math.min(value, max) - min);
      const taxAmount = taxableAmount * rate;
      return { min, max, rate, taxableAmount, taxAmount };
    }).filter(({ taxableAmount }) => taxableAmount > 0);;
    const totalTax = breakdown.reduce((acc, { taxAmount }) => acc + taxAmount, 0);

    const modifiers = [];

    const fthbpFraction = fthbpEligible ? 1 - Math.max(0, (value - FTHBP_FULL_EXEMPTION_UNTIL) / (FTHBP_NO_MORE_EXEMPTION_AT - FTHBP_FULL_EXEMPTION_UNTIL)) : 0;
    const fthbpAmount = Math.max(0, Math.min(totalTax, fthbpFraction * FTHBP_FULL_EXEMPTION));

    const nbheFraction = nbheEligible ? Math.max(0, Math.min(1, ((NBHE_NO_MORE_EXEMPTION_AT - value) / (NBHE_NO_MORE_EXEMPTION_AT - NBHE_FULL_EXEMPTION_UNTIL)))) : 0;
    const nbheAmount = Math.min(totalTax, totalTax * nbheFraction);

    if (fthbpEligible) {
      const overruled = fthbpEligible && nbheEligible && nbheAmount >= fthbpAmount;
      let additionalInfo = fthbpFraction === 1 ?
          fthbpAmount === FTHBP_FULL_EXEMPTION ? `Maximum allowable amount`
          : `Maximum allowable amount of ${dollarFormatter.format(FTHBP_FULL_EXEMPTION)}, up to pre-exemption tax amount`
        : fthbpFraction > 0 ? `Allowed proportion (${percentFormatter.format(fthbpFraction)}, based on fair market value within the range of values the exemption applies to) of maximum exemption amount (${dollarFormatter.format(FTHBP_FULL_EXEMPTION)})`
        : `Fair market value is beyond the eligible range`;
      if (overruled && fthbpAmount > 0) {
        additionalInfo += "; overruled by a more significant exemption.";
      }
      modifiers.push({
        description: fthbpFraction === 1 ? "First time home buyers’ exemption" : "Partial first time home buyers’ exemption",
        amount: fthbpAmount === 0 ? 0 : -fthbpAmount,
        additionalInfo,
        overruled,
      });
    }
    if (nbheEligible) {
      const overruled = fthbpEligible && nbheEligible && fthbpAmount > nbheAmount;
      let additionalInfo = value < NBHE_FULL_EXEMPTION_UNTIL ? `Maximum allowable amount of ${dollarFormatter.format(NBHE_FULL_EXEMPTION)}, up to pre-exemption tax amount`
        : value === NBHE_FULL_EXEMPTION_UNTIL ? `Maximum allowable amount`
        : value < NBHE_NO_MORE_EXEMPTION_AT ? `Allowed proportion (${percentFormatter.format(nbheFraction)}, based on fair market value within the range of values the exemption applies to) of pre-exemption tax amount`
        : `Fair market value is beyond the eligible range`;
      if (overruled && nbheAmount > 0) {
        additionalInfo += "; overruled by a more significant exemption.";
      }
      modifiers.push({
        description: (value <= NBHE_FULL_EXEMPTION_UNTIL || value >= NBHE_NO_MORE_EXEMPTION_AT) ? "Newly-built home exemption" : "Partial newly-built home exemption",
        amount: nbheAmount === 0 ? 0 : -nbheAmount,
        additionalInfo,
        overruled,
      });
    }

    const finalTotal = totalTax + modifiers.reduce((acc, { overruled, amount }) => acc + (overruled ? 0 : amount), 0);

    return {
      totalTax,
      breakdown,
      modifiers,
      finalTotal,
    };
  }
}