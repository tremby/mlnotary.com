---
title: "Accordion"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "Accordions are useful when you want to hide and show large content."

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

##### Basic Usage

Basic accordion markup. To disable rotating arrows, remove the `accordion/arrow` container. Styling is minimum to allow for easier style overrides.

<div class="accordion margin-bottom:2">
  <div class="accordion/item">
    <a class="accordion/header">
      Panel 1
      <span class="accordion/arrow"></span>
    </a>
    <div class="accordion/content">
      <div class="accordion/body">
        Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
      </div>
    </div>
  </div>
  <div class="accordion/item">
    <a class="accordion/header">
      Panel 2
      <span class="accordion/arrow"></span>
    </a>
    <div class="accordion/content">
      <div class="accordion/body">
        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
      </div>
    </div>
  </div>
  <div class="accordion/item">
    <a class="accordion/header">
      Panel 3
      <span class="accordion/arrow"></span>
    </a>
    <div class="accordion/content">
      <div class="accordion/body">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
      </div>
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="accordion js-accordion">
  <div class="accordion/item">
    <a class="accordion/header">
      Panel 1
      <span class="accordion/arrow"></span>
    </a>
    <div class="accordion/content">
    ...
    </div>
  </div>
  <div class="accordion/item">
    <a class="accordion/header">
      Panel 2
      <span class="accordion/arrow"></span>
    </a>
    <div class="accordion/content">
    ...
    </div>
  </div>
  <div class="accordion/item">
    <a class="accordion/header">
      Panel 3
      <span class="accordion/arrow"></span>
    </a>
    <div class="accordion/content">
    ...
    </div>
  </div>
</div>
```

  {{% codeblock key="initializing" definition="javascript" margin="top-tight" %}}
  ```javascript
  var zapAccordion = new ZapAccordion();
  ```
  {{% /codeblock %}}
{{% /codeblock %}}

##### Options

<table class="m-table -fluid -stack">
  <thead>
    <tr>
      <th>
        <strong>Setting</strong>
      </th>
      <th>
        <strong>Default</strong>
      </th>
      <th>
        <strong>Description</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Setting">
        element
      </td>
      <td data-label="Default">
        .accordion
      </td>
      <td data-label="Description">
        Define the element class name to initialize.
      </td>
    </tr>
  </tbody>
</table>
