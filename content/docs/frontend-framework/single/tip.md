---
title: "Tip"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The tip component adds tooltip functionality to any given element using pseudo elements."

includeLabel: true
labelText: "SINGLE"
labelColor: "orange"
lastUpdated: "10/04/18"
parent: "Single"
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

The tip component is defined by adding a data attribute `tip` with content.

<button class="button tip tip-position:top" tip="Just a simple tooltip">
  Basic Tooltip
</button>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button tip tip-position:top" tip="Just a simple tooltip">
  Basic Tooltip
</button>
```
{{% /codeblock %}}

##### Tooltip Positioning

Tooltips can be positioned by defining its direction with the data attribute `tip-position`.

<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="top">
  Top Tooltip
</button>

<button class="button tip tip-position:right" tip="Just a simple tooltip" tip-position="right">
  Right Tooltip
</button>

<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="bottom">
  Bottom Tooltip
</button>

<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="left">
  Left Tooltip
</button>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="top">
  Top Tooltip
</button>

<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="right">
  Right Tooltip
</button>

<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="bottom">
  Bottom Tooltip
</button>

<button class="button tip tip-position:top" tip="Just a simple tooltip" tip-position="left">
  Left Tooltip
</button>
```
{{% /codeblock %}}
