---
title: "Thumb"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The thumb component represent profile images and previews"

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

Defined with `s-thumb`. Not to be confused with the image component, thumbnails have defined sizes and act as a container.

<div class="s-thumb margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="s-thumb">
  <img src="https://placeimg.com/500/500/people">
</div>
```
{{% /codeblock %}}



##### Sizes

Standard size modifiers apply.

<div class="s-thumb -size-1 u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>
<div class="s-thumb -size-2 u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>
<div class="s-thumb -size-3 u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>
<div class="s-thumb -size-4 u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>
<div class="s-thumb -size-5 u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="s-thumb -size-1">
  ...
</div>
<div class="s-thumb -size-2">
  ...
</div>
<div class="s-thumb -size-3">
  ...
</div>
<div class="s-thumb -size-4">
  ...
</div>
<div class="s-thumb -size-5">
  ...
</div>
```
{{% /codeblock %}}

##### Shapes

There are three corner variants.

<div class="s-thumb -size-3 u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>

<div class="s-thumb -size-3 -sharp u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>

<div class="s-thumb -size-3 -round u-margin-right-1 margin-bottom:2">
  <img src="https://placeimg.com/500/500/people">
</div>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="s-thumb">
  <img src="https://placeimg.com/500/500/people">
</div>

<div class="s-thumb -sharp">
  <img src="https://placeimg.com/500/500/people">
</div>

<div class="s-thumb -round">
  <img src="https://placeimg.com/500/500/people">
</div>
```
{{% /codeblock %}}
