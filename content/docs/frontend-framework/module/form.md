---
title: "Form"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The form component provides styling for standard forms."

includeLabel: true
labelText: "MODULE"
labelColor: "yellow"

includeMetaCard: false
lastUpdated: "10/04/18"
parent: "Module"
family: "Frontend Framework"
sizeMetric: true
spaceMetric: true
responsive: true

buttonOne:
  include: true
  icon: "fas fa-star"
  text: "Changelog"
  link: "https://github.com/atjinsu/zap-css/commits/master"
buttonTwo:
  include: true
  icon: "fas fa-external-link-alt"
  text: "View Source"
  link: "https://github.com/atjinsu/zap-css"
---

##### Basic Form

To initialize add the `form` class. The form module contains child items to seperate rows, add the `-last` modifier to the last row to remove bottom margin. By default all input fields have a set max-width, you can make span full width with the `-fluid` modifier. Additionally adding `form/label:fluid` will automatically add the required asterisk at the end of your label.

<div class="card margin-bottom:2" style="max-width: 460px;">
  <div class="card/content">
    <form class="form">
      <div class="form/item">
        <label for="email" class="form/label:required">Username</label>
        <input id="email" type="email" placeholder="Email" class="form/input:fluid">
      </div>
      <div class="form/item">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" class="form/input:fluid">
      </div>
      <div class="form/item">
        <label class="form/checkbox">
          I agree to the <a href="#">Terms and Conditions</a>
          <input type="checkbox"/>
          <div class="form/checkbox-indicator"></div>
        </label>
      </div>
      <div class="form/item u-align-right">
        <button type="submit" class="button button-size:2 button:fluid -broad">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<form class="form">
  <div class="form/item">
    <label for="email" class="form/label:fluid">Username</label>
    <input id="email" type="email" placeholder="Email" class="form/input:fluid">
  </div>
  <div class="form/item">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password" class="form/input:fluid">
  </div>
  <div class="form/item">
    <label class="form/checkbox">
      I agree to the <a href="#">Terms and Conditions</a>
      <input type="checkbox"/>
      <div class="form/checkbox-indicator"></div>
    </label>
  </div>
  <div class="form/item">
    <button type="submit" class="button button-size:2 button:fluid -broad">
      Submit
    </button>
  </div>
</form>
```
{{% /codeblock %}}


##### Disabled Fields

The disabled state fades into the background and disables clickable state.

<div class="card margin-bottom:2" style="max-width: 360px;">
  <div class="card/content">
    <form class="form">
      <div class="form/item">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Email" value="jin@litmos.com" disabled="disabled">
      </div>
      <div class="form/item">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Password" disabled="disabled">
      </div>
      <div class="form/item">
        <label class="form/checkbox -checkbox">Disabled
          <input type="checkbox" disabled="disabled" checked="checked"/>
          <div class="form/checkbox-indicator"></div>
        </label>
      </div>
      <div class="form/item">
        <label class="form/radio">Disabled & checked
          <input type="radio" name="radio2" disabled="disabled" checked="checked"/>
          <div class="form/radio-indicator"></div>
        </label>
      </div>
      <div class="form/item">
        <div class="form/subitem">
          <select disabled="disabled">
            <option>Disabled</option>
            <option>Option</option>
            <option>Option</option>
          </select>
          <div class="form/arrow"></div>
        </div>
      </div>
    </form>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<form class="form">
  <div class="form/item">
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="Email" value="jin@litmos.com" disabled="disabled">
  </div>
  <div class="form/item">
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password" disabled="disabled">
  </div>
  <div class="form/item">
    <label class="form/checkbox -checkbox">Disabled
      <input type="checkbox" disabled="disabled" checked="checked"/>
      <div class="form/checkbox-indicator"></div>
    </label>
  </div>
  <div class="form/item">
    <label class="form/radio">Disabled & checked
      <input type="radio" name="radio2" disabled="disabled" checked="checked"/>
      <div class="form/radio-indicator"></div>
    </label>
  </div>
  <div class="form/item">
    <div class="form/subitem">
      <select disabled="disabled">
        <option>Disabled</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <div class="form/arrow"></div>
    </div>
  </div>
</form>
```


{{% markdown margin="bottom" %}}

##### Multi-Column Fields

Here is an example of a Company Information form in multi-column format. For multi-column layout utilise grid layout.

{{% /markdown %}}

##### Multi-Column Fields

Here is an example of a Company Information form in multi-column format. For multi-column layout utilise grid layout.

<div class="row margin-bottom:2" style="max-width:600px;">
  <div class="item -span-md-12 -span-lg-12 -span-xl-8">
    <div class="card">
      <div class="card/content">
        <form class="form">
          <h5 class="font margin-bottom:3 font-weight:medium font:underline">
            Company Information
          </h5>
          <div class="form/item">
            <div class="row row-gutter:2 grid-columns:1 grid-columns-sm:2 margin-bottom:3">
              <div class="column:2 item-sm:1">
                <label for="firstname" class="form/label:fluid">Company</label>
                <input id="firstname" type="text" placeholder="Company" class="form/input:fluid">
              </div>
              <div class="column:2 item-sm:1">
                <label for="lastname" class="">Title</label>
                <input id="lastname" type="text" placeholder="Digital Designer" value="Digital Designer" disabled="disabled" class="form/input:fluid">
              </div>
            </div>
          </div>
          <div class="form/item">
            <label for="username" class="form/label:fluid">Address</label>
            <input id="username" type="text" placeholder="Level 5, Graham St" class="form/input:fluid margin-bottom:1">
            <input id="username" type="text" placeholder="Central" class="form/input:fluid">
            <span class="form/help">Help message example</span>
          </div>
          <div class="row row-gutter:2 margin-bottom:3">
            <div class="column:2 item-sm:1">
              <div class="form/item">
                <label for="email">City</label>
                <input id="email" type="email" placeholder="City" class="form/input:fluid">
              </div>
            </div>
            <div class="column:2 item-sm:1">
              <div class="form/item">
                <label for="email">State</label>
                <input id="website" type="Website" placeholder="State" class="form/input:fluid">
              </div>
            </div>
          </div>
          <div class="row row-gutter:2 margin-bottom:3">
            <div class="column:2 item-sm:1">
              <div class="form/item">
                <label for="email">Zip</label>
                <input id="email" type="email" placeholder="City" class="form/input:fluid">
              </div>
            </div>
            <div class="column:2 item-sm:1">
              <div class="form/item">
                <label for="email">Country</label>
                <div class="form/select">
                  <select class="form/select:fluid">
                    <option>USA</option>
                    <option>New Zealand</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="form/item">
            <textarea class="form/textarea:fluid"></textarea>
          </div>
          <div class="form/item">
            <label class="form/radio">First radio
              <input type="radio" name="radio1" checked="checked"/>
              <div class="form/radio-indicator"></div>
            </label><br />
            <label class="form/radio">Second radio
              <input type="radio" name="radio1"/>
              <div class="form/radio-indicator"></div>
            </label>
          </div>
          <div class="form/item">
            <div class="l-flex -gap-2">
              <div class="l-flex__item">
                <label class="form/radio">First radio
                  <input type="radio" name="radio2" checked="checked"/>
                  <div class="form/radio-indicator"></div>
                </label>
              </div>
              <div class="l-flex__item">
                <label class="form/radio">Second radio
                  <input type="radio" name="radio2"/>
                  <div class="form/radio-indicator"></div>
                </label>
              </div>
              <div class="l-flex__item">
                <label class="form/radio">Third radio
                  <input type="radio" name="radio2"/>
                  <div class="form/radio-indicator"></div>
                </label>
              </div>
            </div>
          </div>
          <div class="form/item">
            <button type="submit" class="button button-size:2 button:fluid -broad">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<form class="form">
  <div class="row grid-columns:1 grid-columns-sm:2 margin-bottom:3">
    <div class="column:2 item-sm:1">
      <div class="form/item">
        ...
      </div>
    </div>
    <div class="column:2 item-sm:1">
      <div class="form/item">
        ...
      </div>
    </div>
  </div>
  <div class="form/item">
    ...
  </div>
  <div class="form/item">
    ...
  </div>
</form>
```
{{% /codeblock %}}

##### Form States

Form input fields can have states for various types of highlighting.

<div class="card margin-bottom:2" style="max-width: 500px;">
  <div class="card/content">
    <form class="form">
      <div class="form/item">
        <label class="form/label:fluid">Name</label>
        <input type="text" placeholder="Text input" class="form/input:fluid is-alert">
        <span class="form/help is-alert">Check spelling</span>
      </div>
      <div class="form/item">
        <label>Username</label>
        <input type="text" placeholder="Username" value="zapcss" class="form/input:fluid is-success">
        <span class="form/help is-success">This username is available</span>
      </div>
      <div class="form/item">
        <label>Email</label>
        <input type="text" placeholder="Email" value="zap@" class="form/input:fluid is-warning">
        <span class="form/help is-warning">Email is invalid</span>
      </div>
    </form>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<form class="form">
  <div class="form/item">
    <label class="form/label:fluid">Name</label>
    <input type="text" placeholder="Text input" class="form/input:fluid is-alert">
    <span class="form/help is-alert">Check spelling</span>
  </div>
  <div class="form/item">
    <label>Username</label>
    <input type="text" placeholder="Username" value="zapcss" class="form/input:fluid is-success">
    <span class="form/help is-success">This username is available</span>
  </div>
  <div class="form/item">
    <label>Email</label>
    <input type="text" placeholder="Email" value="zap@" class="form/input:fluid is-warning">
    <span class="form/help is-warning">Email is invalid</span>
  </div>
</form>
```
{{% /codeblock %}}


##### Special Fields

Standard text fields can have icons on the left and right.

<div class="card margin-bottom:2" style="max-width: 500px;">
  <div class="card/content">
    <form class="form">
      <div class="form/item">
        <div class="form/content form/content-icon:left form/content-icon:right">
          <input type="text" placeholder="Username" value="zapcss" class="form/input:fluid">
          <span class="form/icon">
            <i class="far fa-user"></i>
          </span>
          <span class="form/icon form/icon:right">
            <i class="far fa-check"></i>
          </span>
        </div>
      </div>
      <div class="form/item">
        <div class="form/content form/content-icon:left form/content-icon:right">
          <input type="text" placeholder="Email" value="zap@" class="form/input:fluid">
          <span class="form/icon">
            <i class="far fa-envelope"></i>
          </span>
          <span class="form/icon">
            <i class="far fa-times"></i>
          </span>
        </div>
      </div>
      <div class="form/item">
        <div class="form/content form/content-icon:right">
          <input type="text" placeholder="Email" value="docs" class="form/input:fluid">
          <span class="form/text">
            .zapcss.com
          </span>
        </div>
      </div>
    </form>
  </div>
</div>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<form class="form">
  <div class="form/item">
    <div class="form/subitem -fluid -icon-left -icon-right">
      <input type="text" placeholder="Username" value="zapcss" class="form/input:fluid">
      <span class="form/icon">
        <i class="fas fa-user"></i>
      </span>
      <span class="form/icon -right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>
  <div class="form/item">
    <div class="form/subitem -fluid -icon-left -icon-right">
      <input type="text" placeholder="Email" value="zap@" class="form/input:fluid">
      <span class="form/icon">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="form/icon -right">
        <i class="fas fa-times"></i>
      </span>
    </div>
  </div>
  <div class="form/item">
    <div class="form/subitem -fluid -text-right">
      <input type="text" placeholder="Email" value="docs" class="form/input:fluid">
      <span class="form/text -right">
        .zapcss.com
      </span>
    </div>
  </div>
</form>
```
{{% /codeblock %}}
