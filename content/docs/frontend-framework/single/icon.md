---
title: "Icon"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The icon component for to help you achieve consistent sizing and layout options across all icon fonts."

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

The icon single is defined by the class `icon` this can be used in conjunction with any icon vendor syntax.

<a class="button fill:primary">
  <i class="fas fa-star icon"></i>Test Button
</a>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<i class="icon fas fa-star "></i>
```
{{% /codeblock %}}

##### Sizing

There are standard sizing options available.

<i class="icon icon-size:1 -block margin-bottom:2 fas fa-star"></i>
<i class="icon icon-size:2 -block margin-bottom:2 fas fa-star"></i>
<i class="icon icon-size:3 -block margin-bottom:2 fas fa-star"></i>
<i class="icon icon-size:4 -block margin-bottom:2 fas fa-star"></i>
<i class="icon icon-size:5 -block margin-bottom:2 fas fa-star"></i>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h1 class="font -light">Light Typography</h1>
<h1 class="font -regular">Regular Typography</h1>
<h1 class="font -medium">Medium Typography</h1>
<h1 class="font -medium">medium Typography</h1>
<h1 class="font -bold">Bold Typography</h1>
```
{{% /codeblock %}}

##### Colors

You can chance the default colors using the standard color modifiers.

<i class="icon -red margin-bottom:2 fas fa-star"></i>
<i class="icon -orange margin-bottom:2 fas fa-star"></i>
<i class="icon -yellow margin-bottom:2 fas fa-star"></i>
<i class="icon -purple margin-bottom:2 fas fa-star"></i>
<i class="icon -blue margin-bottom:2 fas fa-star"></i>
<i class="icon -green margin-bottom:2 fas fa-star"></i>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<i class="icon u-color-red fas fa-star"></i>
<i class="icon u-color-orange fas fa-star"></i>
<i class="icon u-color-yellow fas fa-star"></i>
<i class="icon u-color-purple fas fa-star"></i>
<i class="icon u-color-blue fas fa-star"></i>
<i class="icon u-color-green fas fa-star"></i>
```
{{% /codeblock %}}

##### Light Colors

Additionally to color modifiers, the icon component also has access to light color group modifiers.

<i class="icon -shade-1 margin-bottom:2 fas fa-star"></i>
<i class="icon -shade-2 margin-bottom:2 fas fa-star"></i>
<i class="icon -shade-3 margin-bottom:2 fas fa-star"></i>
<i class="icon -shade-4 margin-bottom:2 fas fa-star"></i>
<i class="icon -shade-5 margin-bottom:2 fas fa-star"></i>
<div class="u-pad-1 u-fill-black margin-bottom:2">
<i class="icon -shine-1 fas fa-star"></i>
<i class="icon -shine-2 fas fa-star"></i>
<i class="icon -shine-3 fas fa-star"></i>
<i class="icon -shine-4 fas fa-star"></i>
<i class="icon -shine-5 fas fa-star"></i>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<i class="icon -shade-1 fas fa-star"></i>
<i class="icon -shade-2 fas fa-star"></i>
<i class="icon -shade-3 fas fa-star"></i>
<i class="icon -shade-4 fas fa-star"></i>
<i class="icon -shade-5 fas fa-star"></i>

<i class="icon -shine-1 fas fa-star"></i>
<i class="icon -shine-2 fas fa-star"></i>
<i class="icon -shine-3 fas fa-star"></i>
<i class="icon -shine-4 fas fa-star"></i>
<i class="icon -shine-5 fas fa-star"></i>
```
{{% /codeblock %}}
