---
title: "Align"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The align component sets the alignment of text elements."

includeLabel: true
labelText: "UTILITY"
labelColor: "brand"
lastUpdated: "10/04/18"
parent: "Utility"
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

Defined with `u-align` and direction of alignment.

<div class="u-pad-1 u-fill-shade-1 margin-bottom:2">
  <h6 class="font u-align-left">Left Aligned</h6>
  <h6 class="font u-align-center">Center Aligned</h6>
  <h6 class="font u-align-right">Right Aligned</h6>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h6 class="u-align-left">Left Aligned</h6>
<h6 class="u-align-center">Center Aligned</h6>
<h6 class="u-align-right">Right Aligned</h6>
```
{{% /codeblock %}}


##### Responsive Alignments

You can apply responsive alignment with standard device modifiers.

<div class="u-pad-1 u-fill-shade-1 margin-bottom:2">
  <h6 class="font u-align-left">Left</h6>
  <h6 class="font u-align-center-md">Center Medium</h6>
  <h6 class="font u-align-right-lg">Large Right</h6>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h6 class="u-align-left">Left</h6>
<h6 class="u-align-center-md">Center Medium</h6>
<h6 class="u-align-right-lg">Large Right</h6>
```
{{% /codeblock %}}
