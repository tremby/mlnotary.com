---
title: "Line"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The line component are similar to the hr element and are used as content dividers."

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

The Single line `line` creates a soft horizontal rules that divide sections.

<span class="line"></span>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<span class="line"></span>
```
{{% /codeblock %}}


##### Light Colors

The line component only has access to the light color group modifiers.

<span class="line margin-bottom:2 -shade-1"></span>
<span class="line margin-bottom:2 -shade-2"></span>
<span class="line margin-bottom:2 -shade-3"></span>
<span class="line margin-bottom:2 -shade-4"></span>
<span class="line margin-bottom:2 -shade-5"></span>
<div class="u-pad-2 u-fill-black">
  <span class="line margin-bottom:2 -shine-1"></span>
  <span class="line margin-bottom:2 -shine-2"></span>
  <span class="line margin-bottom:2 -shine-3"></span>
  <span class="line margin-bottom:2 -shine-4"></span>
  <span class="line -shine-5"></span>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<span class="line -shade-1"></span>
<span class="line -shade-2"></span>
<span class="line -shade-3"></span>
<span class="line -shade-4"></span>
<span class="line -shade-5"></span>

<span class="line -shine-1"></span>
<span class="line -shine-2"></span>
<span class="line -shine-3"></span>
<span class="line -shine-4"></span>
<span class="line -shine-5"></span>
```
{{% /codeblock %}}
