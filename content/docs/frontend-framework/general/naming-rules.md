---
title: "Naming Rules"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "Indepth guide into how component names are used and defined."

includeLabel: true
labelText: "GENERAL"
labelColor: "blue"
lastUpdated: "10/04/18"
parent: "General"
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

##### Naming Rules

All component names are hyphen based and are namespaced with the first letter of the category it belongs in, e.g. `l-component-name`, `m-product-list`, `s-button`. This helps you to easily identify it's position in the specificity tree.

ensures every CSS is carefully accounted for by prefixing each class with the letter of class category it belongs under, if its a grid we write `.grid` for "Layout Grid", and if its a button then `.s-button` for "Single Button".

##### Defining Child Elements

ZapCSS borrows the method from BEM methodology for defining child elements. Child elements are prefixed with the namespace and component name followed by double underscore and element suffix.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="m-parent">
  <div class="m-parent__child">
    ...
  </div>div>
  <div class="m-parent__child">
    ...
  </div>div>
</div>

<div class="m-product-list">
  <div class="m-product-list__item">
    ...
  </div>div>
  <div class="m-product-list__item">
    ...
  </div>div>
</div>
```
{{% /codeblock %}}

##### Taxonomy of Common Elements

For consistency and simplicity ZapCSS introduces a handful of element names that are commonly used to define child elements. For general containers, there are three common element name to define child group, `__header` `__content` `__footer`. Multiple child elements that look and behave the same way are usually with the `__item` child element.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="m-product-list">
  <div class="m-product-list__header">
    Header Content
  </div>
  <div class="m-product-list__content">
    <div class="m-product-list__item">
      ...
    </div>
    <div class="m-product-list__item">
      ...
    </div>
    <div class="m-product-list__item">
      ...
    </div>
  </div>
  <div class="m-product-list__footer">
    Footer Content
  </div>
</div>

<div class="m-product-list">
  <div class="m-product-list__item">
    ...
  </div>
  <div class="m-product-list__item">
    ...
  </div>
</div>
```
{{% /codeblock %}}

##### Defining Modifiers

Unlike child elements, all modifiers begin with a hyphen and do not require any prefixes.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="m-parent">
  <div class="m-parent__child -modifier">
    ...
  </div>
  <div class="m-parent__child -modifier-1 -modifier-2">
    ...
  </div>
</div>

<div class="m-product-list">
  <div class="m-product-list__item -on-sale">
    ...
  </div>
  <div class="m-product-list__item -favourite">
    ...
  </div>
</div>
```
{{% /codeblock %}}

##### States & Javascript

All state based class names are prefixed with `is` and all javascript component hooks are prefixed with `js`.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="m-parent js-hook">
  <div class="m-parent__child is-active">
    ...
  </div>
  <div class="m-parent__child">
    ...
  </div>
</div>
```
{{% /codeblock %}}

##### General Rules

You can nest components within components regardless of its namespace however avoid mixing component classes on a single HTML element. This encourages your component markup to be modular and helps to avoid conflicts. The only exception to this rule are utilitiy classes.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<section class="l-band -white">
  <div class="l-wrap">
    <div class="m-product-list">
      <div class="m-product-list__item -on-sale">
        ...
      </div>
      <div class="m-product-list__item -favourite">
        <button class="s-button -blue">Add to cart</button>
      </div>
    </div>
  </div>
</section>
```
{{% /codeblock %}}
