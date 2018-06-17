---
title: "Slidemenu"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "Slide panel navigation for mobile."

includeLabel: true
labelText: "MODULE"
labelColor: "yellow"
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

Defined with `m-slidemenu` and initialized with javascript. Slidemenu is a fixed element and must belong outside of all containers.

{{% codeblock key="language" definition="html" margin="bottom" %}}
  ```html
  <aside class="m-slidemenu js-slidemenu">
    <div class="m-slidemenu__overlay">

    </div>
    <div class="m-slidemenu__content">
      <div class="m-slidemenu__close">

      </div>
      ...
    </div>
  </aside>
  ```

  {{% codeblock key="initializing" definition="javascript" margin="top" %}}
  ```javascript
    var zapSlidemenu = new ZapSlidemenu();
  ```
  {{% /codeblock %}}
{{% /codeblock %}}

##### Slide Direction

To change slide direction apply the direction modifier.

{{% codeblock key="language" definition="html" margin="bottom" %}}
  ```html
  <aside class="m-slidemenu -right js-slidemenu">
    <div class="m-slidemenu__overlay">

    </div>
    <div class="m-slidemenu__content">
      ...
    </div>
  </aside>
  ```
{{% /codeblock %}}

##### Options

<table class="m-table -stack -fluid">
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
        .m-slidemenu
      </td>
      <td data-label="Description">
        Define the element class name to initialize.
      </td>
    </tr>
    <tr>
      <td data-label="Setting">
        toggleClass
      </td>
      <td data-label="Default">
        .js-hamburger
      </td>
      <td data-label="Description">
        Define the element class name to toggle
      </td>
    </tr>
    <tr>
      <td data-label="Setting">
        closeClass
      </td>
      <td data-label="Default">
        .m-slidemenu__close
      </td>
      <td data-label="Description">
        Define the element class name to close
      </td>
    </tr>
  </tbody>
</table>
