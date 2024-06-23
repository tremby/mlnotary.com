import Calculator from "./calculator.mjs";

try {
  const calculator = new Calculator();
  for (const [input, expected] of [
    [0, 0],
    [100e3, 1e3],
    [200e3, 2e3],
    [300e3, 4e3],
    [830e3, 14.6e3],
    [835e3, 14.7e3],
    [850e3, 15e3],
    [860e3, 15.2e3],
    [900e3, 16e3],
    [1.9e6, 36e3],
    [2.5e6, 53e3],
    [3.3e6, 83e3],
  ]) {
    const { finalTotal } = calculator.calculateTax(input, false, false);
    if (finalTotal !== expected) throw new Error(`Expected total tax on ${input} to be ${expected}; got ${finalTotal}`);
  }
  for (const [input, expected] of [
    [0, 0],
    [100e3, 0],
    [200e3, 0],
    [300e3, 0],
    [830e3, 6.6e3],
    [835e3, 6.7e3],
    [850e3, 11.8e3],
    [860e3, 15.2e3],
    [900e3, 16e3],
    [1.9e6, 36e3],
    [2.5e6, 53e3],
    [3.3e6, 83e3],
  ]) {
    const { finalTotal } = calculator.calculateTax(input, true, false);
    if (finalTotal !== expected) throw new Error(`Expected total tax on ${input} with FTHBP to be ${expected}; got ${finalTotal}`);
  }
  for (const [input, expected] of [
    [0, 0],
    [100e3, 0],
    [200e3, 0],
    [300e3, 0],
    [830e3, 0],
    [835e3, 0],
    [850e3, 0],
    [860e3, 0],
    [900e3, 0],
    [1.09e6, 0],
    [1.1e6, 0],
    [1.11e6, 4.04e3],
    [1.14e6, 16.64e3],
    [1.15e6, 21e3],
    [1.16e6, 21.2e3],
    [1.9e6, 36e3],
    [2.5e6, 53e3],
    [3.3e6, 83e3],
  ]) {
    const { finalTotal } = calculator.calculateTax(input, false, true);
    if (finalTotal !== expected) throw new Error(`Expected total tax on ${input} with NBHE to be ${expected}; got ${finalTotal}`);
  }

  console.log("Test OK");
} catch (error) {
  console.error(`Test failed: ${error.message}`)
};
