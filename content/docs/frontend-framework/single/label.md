---
title: "Label"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The label component are small tag based components useful for highlighting taxonomic data."

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

Defined with `label`.

<span class="label">Label</span>

<div class="labels">
  <span class="label fill:secondary">Colors</span>
  <span class="label fill:grey color:black">YES</span>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<span class="label">Label</span>
```
{{% /codeblock %}}


##### Colors

All standard color modifiers are available to change background colors.

<span class="label -red">Label</span>
<span class="label -orange">Label</span>
<span class="label -yellow">Label</span>
<span class="label -green">Label</span>
<span class="label -blue">Label</span>
<span class="label -purple">Label</span>
<span class="label -black">Label</span>
<span class="label -grey">Label</span>
<span class="label -white">Label</span>

<span class="label -shade-5">Label</span>
<span class="label -shade-4">Label</span>
<span class="label -shade-3">Label</span>
<span class="label -shade-2">Label</span>
<span class="label -shade-1">Label</span>

<div class="u-fill-black" style="display: inline-block">
  <span class="label -shine-5">Label</span>
  <span class="label -shine-4">Label</span>
  <span class="label -shine-3">Label</span>
  <span class="label -shine-2">Label</span>
  <span class="label -shine-1">Label</span>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<span class="label -red">Label</span>
<span class="label -orange">Label</span>
<span class="label -yellow">Label</span>
<span class="label -green">Label</span>
<span class="label -blue">Label</span>
<span class="label -purple">Label</span>
<span class="label -black">Label</span>
<span class="label -grey">Label</span>
<span class="label -white">Label</span>

<span class="label -shade-5">Label</span>
<span class="label -shade-4">Label</span>
<span class="label -shade-3">Label</span>
<span class="label -shade-2">Label</span>
<span class="label -shade-1">Label</span>

<span class="label -shine-5">Label</span>
<span class="label -shine-4">Label</span>
<span class="label -shine-3">Label</span>
<span class="label -shine-2">Label</span>
<span class="label -shine-1">Label</span>
```
{{% /codeblock %}}
