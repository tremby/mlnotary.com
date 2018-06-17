---
title: "Font"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The font component provides for text styling for headings or general text."

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

Apply class `font` to any heading element to apply styling. There are 8 size variants to choose from. You can apply to existing header elements or manually apply font size class names, this can also be device specific with responsive extensions.

<span class="font font-size:micro -gap-2">Micro</span>
<p class="font body -gap-2">Body</p>
<p class="font font-size:h6 -gap-2">H6 Typography</p>
<p class="font h4 -h5-md -gap-2">H5 Typography</p>
<h4 class="font gap-2">H4 Typography</h4>
<h3 class="font gap-2">H3 Typography</h3>
<h2 class="font gap-2">H2 Typography</h2>
<h1 class="font gap-2">H1 Typography</h1>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<span class="font -micro">Micro</span>
<p class="font -body">Body</p>
<p class="font -h6">H6 Typography</p>
<p class="font -h4 -h5-md">H5 Typography</p>
<h4 class="font">H4 Typography</h4>
<h3 class="font">H3 Typography</h3>
<h2 class="font">H2 Typography</h2>
<h1 class="font">H1 Typography</h1>
```
{{% /codeblock %}}

##### Weights

For different weights use standard weight modifiers.

<h3 class="font -gap-3 font-weight:light">Light Typography</h3>
<h3 class="font -gap-3 font-weight:regular">Regular Typography</h3>
<h3 class="font -gap-3 font-weight:medium">Medium Typography</h3>
<h3 class="font -gap-3 font-weight:bold">Bold Typography</h3>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h3 class="font -light">Light Typography</h3>
<h3 class="font -regular">Regular Typography</h3>
<h3 class="font -medium">Medium Typography</h3>
<h3 class="font -bold">Bold Typography</h3>
```
{{% /codeblock %}}





##### Ruled Headers

Headers can have a line underneath with the `-rule` modifier.

<h3 class="font font:underline -gap-4">Ruled Heading</h3>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h3 class="font -rule -gap-4">Ruled Heading</h3>
```
{{% /codeblock %}}

##### Line Heights

You can override the default unitless line height with the following modifiers.

<h5 class="font font-leading:0 font-align:right">Line Height</h5>
<h5 class="font font-leading:1">Line Height</h5>
<h5 class="font font-leading:2">Line Height</h5>
<h5 class="font font-leading:3">Line Height</h5>
<h5 class="font font-leading:4">Line Height</h5>
<h5 class="font font-leading:5">Line Height</h5>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h5 class="font font-line-height:0 font-align:right">Line Height</h5>
<h5 class="font font-line-height:1">Line Height</h5>
<h5 class="font font-line-height:2">Line Height</h5>
<h5 class="font font-line-height:3">Line Height</h5>
<h5 class="font font-line-height:4">Line Height</h5>
<h5 class="font font-line-height:5">Line Height</h5>
```
{{% /codeblock %}}


##### Custom Transformations

There are custom transformations that can be applied to further modifer how headings are displayed.

<h5 class="font -block">Block</h5>
<h5 class="font -reset">Reset</h5>
<h5 class="font -inherit">Inherit</h5>
<h5 class="font -link">Link</h5>
<h5 class="font -hover">Hover</h5>
<h5 class="font -decorate">Decorate</h5>
<h5 class="font -pointer">Pointer</h5>
<h5 class="font font-transform:upper">Uppercase</h5>
<h5 class="font -condense">Condensed</h5>
<h5 class="font -expand">Expand</h5>
<h5 class="font -inline -gap-2">Inline</h5>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<h5 class="font -block">Block</h5>
<h5 class="font -reset">Reset</h5>
<h5 class="font -inherit">Inherit</h5>
<h5 class="font -link">Link</h5>
<h5 class="font -hover">Hover</h5>
<h5 class="font -decorate">Decorate</h5>
<h5 class="font -pointer">Pointer</h5>
<h5 class="font -upper">Uppercase</h5>
<h5 class="font -condense">Condensed</h5>
<h5 class="font -expand">Expand</h5>
<h5 class="font -inline">Inline</h5>
```
{{% /codeblock %}}

##### Colors

You can apply color with standard color modifiers (including all shade and product colors).

<h5 class="font -red">Color</h5>
<h5 class="font -orange">Color</h5>
<h5 class="font -yellow">Color</h5>
<h5 class="font -green">Color</h5>
<h5 class="font -blue">Color</h5>
<h5 class="font -purple">Color</h5>
<h5 class="font -black">Color</h5>
<h5 class="font -grey">Color</h5>
<h5 class="font -white">Color</h5>
