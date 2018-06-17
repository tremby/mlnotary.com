---
title: "Float"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The float component forces float of any given element."

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

Defined with `u-float` and direction.

<div class="row margin-bottom:2">
  <div class="item -span-6">
    <div class="s-thumb u-float-left">
      <img src="https://placeimg.com/500/500/people">
    </div>
  </div>
</div>
<div class="row margin-bottom:2">
  <div class="item -span-6">
    <div class="s-thumb u-float-right">
      <img src="https://placeimg.com/500/500/people">
    </div>
  </div>
</div>
<div class="row margin-bottom:2">
  <div class="item -span-6">
    <div class="s-thumb u-float-none">
      <img src="https://placeimg.com/500/500/people">
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-float-left">
  ...
</div>
<div class="u-float-right">
  ...
</div>
<div class="u-float-none">
  ...
</div>
```
{{% /codeblock %}}

##### Responsive Floats

You can assign responsive floats by adding device specific extensions.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-float-left-sm">
  ...
</div>
<div class="u-float-right-md">
  ...
</div>
<div class="u-float-none-lg">
  ...
</div>
```
{{% /codeblock %}}
