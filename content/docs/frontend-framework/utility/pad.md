---
title: "Pad"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The pad component adds padding to any object or container."

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

Defind with `u-padding`. There are 11 basic levels of padding based on standard grid rhythm that can be applied. Additionally, you can also add `-none` to remove padding.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-padding-0">
  ...
</div>
<div class="u-padding-1">
  ...
</div>
<div class="u-padding-2">
  ...
</div>
<div class="u-padding-3">
  ...
</div>
<div class="u-padding-4">
  ...
</div>
<div class="u-padding-5">
  ...
</div>
<div class="u-padding-6">
  ...
</div>
<div class="u-padding-7">
  ...
</div>
<div class="u-padding-8">
  ...
</div>
<div class="u-padding-9">
  ...
</div>
<div class="u-padding-10">
  ...
</div>
```
{{% /codeblock %}}

##### Directional Padding

Margin can be applied to `top` `right` `bottom` `left`. It can also be applied to only the horizontal and vertical axis.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-padding-top-1">
  ...
</div>
<div class="u-padding-right-2">
  ...
</div>
<div class="u-padding-bottom-3">
  ...
</div>
<div class="u-padding-left-4">
  ...
</div>
<div class="u-padding-x-5">
  ...
</div>
<div class="u-padding-y-6">
  ...
</div>
```
{{% /codeblock %}}

##### Responsive Padding

To apply responsive paddings add device specific extensions

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-padding-top-sm-1">
  ...
</div>
<div class="u-padding-right-md-5">
  ...
</div>
```
{{% /codeblock %}}

##### Viewport Padding

The padding component also supports viewport based paddings that range from 1 to 20 vh/vw respectively.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-padding-top-10vh">
  ...
</div>
<div class="u-padding-right-md-5vh">
  ...
</div>
```
{{% /codeblock %}}
