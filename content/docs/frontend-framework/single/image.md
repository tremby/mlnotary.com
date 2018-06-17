---
title: "Image"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The image component formats images and provides useful corner transformations."

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

Defined with `s-image`. By default the image components applies a block display property however this can be overwritten.

<div class="margin-bottom:2" style="max-width: 100px;">
  <img src="http://via.placeholder.com/350x350" class="s-image">
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<img src="https://i.imgur.com/Ig4qpjc.jpg" class="s-image">
```
{{% /codeblock %}}


##### Corner Shapes

Various corner shapes are available.

<div class="margin-bottom:2" style="max-width: 100px;">
  <img src="http://via.placeholder.com/350x350" class="s-image -radius">
</div>

<div class="margin-bottom:2" style="max-width: 100px;">
  <img src="http://via.placeholder.com/350x350" class="s-image -round">
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<img src="http://via.placeholder.com/350x350" class="s-image -radius">
<img src="http://via.placeholder.com/350x350" class="s-image -round">
```
{{% /codeblock %}}

##### Display Properties

Image display property can be overwritten with the `-inline` modifier. Additionally, you can force your image to span the full width with the `-fluid` modifier.

<img src="http://via.placeholder.com/1200x200" class="s-image -fluid margin-bottom:2">
<img src="http://via.placeholder.com/200x200" class="s-image -inline">
<img src="http://via.placeholder.com/200x200" class="s-image -inline">


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<img src="http://via.placeholder.com/800x200" class="s-image -fluid">
<img src="http://via.placeholder.com/200x200" class="s-image -inline">
<img src="http://via.placeholder.com/200x200" class="s-image -inline">
```
{{% /codeblock %}}
