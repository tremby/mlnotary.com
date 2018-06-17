---
title: "Dropdown"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined content."

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

The dropdown component is defined with the `dropdown` class and is initialized with javascript.

<div class="dropdown dropdown:hover margin-bottom:2">
  <div class="dropdown/toggle" title="Menu">
    <a class="button">Toggle Menu</a>
  </div>
  <div class="dropdown/content">
    <div class="dropdown/body">
      <a class="dropdown/item">
        Menu Item
      </a>
      <a class="dropdown/item">
        Menu
      </a>
      <a class="dropdown/item">
        Settings
      </a>
      <a class="dropdown/item">
        Search
      </a>
    </div>
  </div>
</div>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="dropdown">
  <a class="dropdown/toggle">
    Toggle Menu
  </a>
  <div class="dropdown/content">
    <div class="dropdown/body">
      <a class="dropdown/item">
        Menu Item
      </a>
      <a class="dropdown/item">
        Menu
      </a>
      <a class="dropdown/item">
        Settings
      </a>
      <a class="dropdown/item">
        Search
      </a>
    </div>
  </div>
</div>
```

{{% codeblock key="initializing" definition="javascript" margin="top" %}}
```javascript
var zapDropdown = new ZapDropdown();
```
{{% /codeblock %}}

{{% /codeblock %}}

##### Direction & Alignment

By default the dropdown menu is aligned to the bottom left of its parent container. To override direction and alignment assign the following modifiers:

<div>
  <div class="dropdown dropdown-directin:right margin-bottom:2 js-dropdown">
    <a class="dropdown/toggle" title="Menu">
      <span class="button">Right Menu</span>
    </a>
    <div class="dropdown/content">
      <div class="dropdown/body">
        <a class="dropdown/item">
          Menu Item
        </a>
        <a class="dropdown/item">
          Menu
        </a>
        <a class="dropdown/item">
          Settings
        </a>
        <a class="dropdown/item">
          Search
        </a>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="dropdown dropdown-direction:top-right margin-bottom:2 js-dropdown">
    <a class="dropdown/toggle" title="Menu">
      <span class="button">Top Right Menu</span>
    </a>
    <div class="dropdown/content">
      <div class="dropdown/body">
        <a class="dropdown/item">
          Menu Item
        </a>
        <a class="dropdown/item">
          Menu
        </a>
        <a class="dropdown/item">
          Settings
        </a>
        <a class="dropdown/item">
          Search
        </a>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="dropdown dropdown-direction:top-center margin-bottom:2 js-dropdown">
    <a class="dropdown/toggle" title="Menu">
      <span class="button">Top Center Menu</span>
    </a>
    <div class="dropdown/content">
      <div class="dropdown/body">
        <a class="dropdown/item">
          Menu Item
        </a>
        <a class="dropdown/item">
          Menu
        </a>
        <a class="dropdown/item">
          Settings
        </a>
        <a class="dropdown/item">
          Search
        </a>
      </div>
    </div>
  </div>
</div>

{{% codeblock key="initializing" definition="html" margin="top-tight" %}}
```html
<div class="dropdown dropdown-direction:right">
  <a class="dropdown/toggle">
    ...
  </a>
  <div class="dropdown/content">
    ...
  </div>
</div>

<div class="dropdown -top -right">
  <a class="dropdown/toggle">
    ...
  </a>
  <ul class="dropdown/content">
    ...
  </ul>
</div>

<div class="dropdown -top -center">
  <a class="dropdown/toggle">
    ...
  </a>
  <ul class="dropdown/content">
    ...
  </ul>
</div>
```
{{% /codeblock %}}

##### Options

<table class="m-table -fluid">
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
        .m-accordion
      </td>
      <td data-label="Description">
        Define the element class name to initialize.
      </td>
    </tr>
    <tr>
      <td data-label="Setting">
        hover
      </td>
      <td data-label="Default">
        false
      </td>
      <td data-label="Descripti">
        Enable hover feature
      </td>
    </tr>
  </tbody>
</table>
