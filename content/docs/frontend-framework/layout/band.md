---
title: "Band"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The band component is useful when you require a row based seperating container that spans the full width of the browser window. Often you will see sites with alternating white and shaded rows, this is a perfect example of how the band layout can used."

includeLabel: true
labelText: "LAYOUT"
labelColor: "green"
lastUpdated: "10/04/18"
parent: "Layout"
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

<section class="l-band -shade-2 u-pad-y-5">
</section>
<section class="l-band -shade-3 u-pad-y-5 margin-bottom:2">
</section>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<section class="l-band -shade-2">
  ...
</section>

<section class="l-band -shade-3">
  ...
</section>
```
{{% /codeblock %}}


##### Backgrounds

The band layout definition supports all color modifiers.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<section class="l-band -brand">
  ...
</section>
<section class="l-band -accent">
  ...
</section>
<section class="l-band -red">
  ...
</section>
<section class="l-band -orange">
  ...
</section>
<section class="l-band -yellow">
  ...
</section>
<section class="l-band -green">
  ...
</section>
<section class="l-band -blue">
  ...
</section>
<section class="l-band -purple">
  ...
</section>
<section class="l-band -black">
  ...
</section>
<section class="l-band -grey">
  ...
</section>
<section class="l-band -white">
  ...
</section>

<section class="l-band -shade-1">
  ...
</section>
<section class="l-band -shade-2">
  ...
</section>
<section class="l-band -shade-3">
  ...
</section>
<section class="l-band -shade-4">
  ...
</section>
<section class="l-band -shade-5">
  ...
</section>
<section class="l-band -shine-1">
  ...
</section>
<section class="l-band -shine-2">
  ...
</section>
<section class="l-band -shine-3">
  ...
</section>
<section class="l-band -shine-4">
  ...
</section>
<section class="l-band -shine-5">
  ...
</section>
```
{{% /codeblock %}}
