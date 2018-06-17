---
title: "Nav"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The nav component provides you with a standard responsive navigation bar."

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

##### Basic Navigation

The nav component is built using flex and comes groups container `nav/content` and child elements `nav/item`. To push content right assign the `-right` modifier.

<div class="fill:primary-tint-2 padding:2 margin-bottom:2">
  <nav class="menu" role="menuigation">
    <div class="menu/content">
      <a href="#" class="menu/item nav/columnhover is-active">
        A
      </a>
      <a href="#" class="menu/item nav/columnhover">
        B
      </a>
      <a href="#" class="menu/item nav/columnhover">
        C
      </a>
      <a href="#" class="menu/item nav/columnhover">
        C
      </a>
      <a href="#" class="menu/item nav/columnhover">
        C
      </a>
      <a href="#" class="menu/item nav/columnhover">
        C
      </a>
    </div>
    <div class="menu/content">
      <a href="#" class="menu/item">
        D
      </a>
      <a href="#" class="menu/item">
        E
      </a>
    </div>
    <div class="menu/content">
      <a href="#" class="menu/item">
        D
      </a>
      <a href="#" class="menu/item">
        E
      </a>
    </div>
  </nav>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<nav class="menu" role="menuigation">
  <div class="menu/content align:left">
    <a href="#" class="menu/item u-hide-m u-hide-t is-active">
      A
    </a>
    <a href="#" class="menu/item">
      B
    </a>
    <a href="#" class="menu/item">
      C
    </a>
  </div>
  <div class="menu/content align:right">
    <a href="#" class="menu/item">
      D
    </a>
    <a href="#" class="menu/item">
      E
    </a>
  </div>
</nav>
```
{{% /codeblock %}}

##### Hover & Padding

To remove hover effect and padding apply the following:

<div class="u-fill-shade-2 u-pad-2 margin-bottom:2">
  <nav class="menu" role="menuigation">
    <div class="menu/content align:left">
      <a href="#" class="menu/item u-hide-m u-hide-t is-active">
        A
      </a>
      <a href="#" class="menu/item">
        B
      </a>
      <a href="#" class="menu/item">
        C
      </a>
    </div>
    <div class="menu/content align:right">
      <a href="#" class="menu/item">
        D
      </a>
      <a href="#" class="menu/item">
        E
      </a>
    </div>
  </nav>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<nav class="menu" role="menuigation">
  <div class="menu/content">
    <a href="#" class="menu/item u-hide-m u-hide-t is-active">
      A
    </a>
    <a href="#" class="menu/item">
      B
    </a>
    <a href="#" class="menu/item">
      C
    </a>
  </div>
  <div class="menu/content align:right">
    <a href="#" class="menu/item">
      D
    </a>
    <a href="#" class="menu/item">
      E
    </a>
  </div>
</nav>
```
{{% /codeblock %}}
