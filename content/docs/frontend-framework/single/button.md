---
title: "Button"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "Colorful and juicy button component in all shapes and sizes."

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

##### Basic Button

A standard button

<button class="button">Button</button>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button">
  Button
</button>
```
{{% /codeblock %}}

##### Sizes

Buttons comes in various sizes, use standard size modifiers to transform its size.

<div class="u-spread-y-1 margin-bottom:2">
  <div>
    <button class="button button-size:1">Button</button>
  </div>
	<div>
    <button class="button button-size:2">Button</button>
  </div>
	<div>
    <button class="button button-size:3">Button</button>
  </div>
	<div>
    <button class="button button-size:4">Button</button>
  </div>
  <div>
    <button class="button button-size:5">Button</button>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button button-size:1">Button</button>
<button class="button button-size:2">Button</button>
<button class="button button-size:3">Button</button>
<button class="button button-size:4">Button</button>
<button class="button button-size:5">Button</button>
```
{{% /codeblock %}}

##### Growing Buttons

Buttons can vary in width.

<div class="u-spread-y-1 margin-bottom:2">
	<div>
    <button class="button">Default</button>
  </div>
  <div>
    <button class="button button-grow:1">Grow 1</button>
  </div>
  <div>
    <button class="button button-grow:2">Grow 2</button>
  </div>
  <div>
    <button class="button button-grow:3">Grow 3</button>
  </div>
  <div>
    <button class="button button-grow:4">Grow 4</button>
  </div>
  <div>
    <button class="button button-grow:5">Grow 5</button>
  </div>
  <div>
    <button class="button button-fluid:true">Fluid</button>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button">Default</button>
<button class="button button-grow:1">Grow 1</button>
<button class="button button-grow:2">Grow 2</button>
<button class="button button-grow:3">Grow 3</button>
<button class="button button-grow:4">Grow 4</button>
<button class="button button-grow:5">Grow 5</button>
<button class="button -fluid">Fluid</button>
```
{{% /codeblock %}}

##### Shapes

You can apply differently shaped corners to buttons with the `-sharp`, `-round` modifiers.

<div class="margin-bottom:2">
  <button class="button">Default</button>
  <button class="button button-border:sharp">Sharp</button>
  <button class="button button-border:round">Round</button>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button">Default</button>
<button class="button -sharp">Sharp</button>
<button class="button -round">Round</button>
```
{{% /codeblock %}}

##### Styles

There are 2 different styles of buttons, standard and elevated.

<div class="u-spread-x-1 margin-bottom:2">
  <div>
    <button class="button -purple">Default</button>
    <button class="button -purple button-elevate:true">Elevated</button>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button -purple">Default</button>
<button class="button -purple -elevate">Elevated</button>
```
{{% /codeblock %}}

##### Button Weights

Buttons can have different font weights based on standard weights.

<div class="u-spread-x-1 margin-bottom:2">
  <button class="button">Regular</button>
  <button class="button button-weight:medium">Medium</button>
  <button class="button button-weight:bold">Bold</button>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button">Regular</button>
<button class="button -medium">Medium</button>
<button class="button -bold">Bold</button>
```
{{% /codeblock %}}


##### Button Groups

Buttons can be joined to form a buttons. Groups can be vertical with the `-vertical` modifier or standard responsive modifiers for device specific verticality.

<div class="margin-bottom:2">
  <div class="buttons">
    <button class="button">1</button>
    <button class="button">2</button>
    <button class="button">3</button>
  </div>
</div>

<div class="margin-bottom:2">
  <div class="buttons -round -vertical-tb">
    <button class="button">1</button>
    <button class="button">2</button>
    <button class="button">3</button>
  </div>
</div>

<div class="margin-bottom:2">
  <div class="buttons -round -vertical">
    <button class="button">1</button>
    <button class="button">2</button>
    <button class="button">3</button>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="buttons">
  <button class="button">1</button>
  <button class="button">2</button>
  <button class="button">3</button>
</div>

<div class="buttons -round -vertical-tb">
  <button class="button">1</button>
  <button class="button">2</button>
  <button class="button">3</button>
</div>

<div class="buttons -round -vertical">
  <button class="button">1</button>
  <button class="button">2</button>
  <button class="button">3</button>
</div>
```
{{% /codeblock %}}

##### Colors

There are 10 colors available to choose from.

<div class="buttons buttons-direction:vertical -inline-tb margin-bottom:2">
  <a class="button">Button</a>
  <button class="button fill:primary button-color:green">Button</button>
  <button class="button fill:secondary">Button</button>
  <button class="button fill:red">Button</button>
  <button class="button fill:orange">Button</button>
  <button class="button fill:yellow">Button</button>
  <button class="button fill:green">Button</button>
  <button class="button fill:blue">Button</button>
  <button class="button fill:purple">Button</button>
  <button class="button fill:black">Button</button>
</div>

<div class="buttons margin-bottom:2">
  <a class="button">Button</a>
  <button class="button fill:primary button-color:green">Button</button>
  <button class="button fill:secondary">Button</button>
  <button class="button fill:red">Button</button>
  <button class="button fill:orange">Button</button>
  <button class="button fill:yellow">Button</button>
  <button class="button fill:green">Button</button>
  <button class="button fill:blue">Button</button>
  <button class="button fill:purple">Button</button>
  <button class="button fill:black">Button</button>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button">Button</button>
<button class="button fill:primary">Button</button>
<button class="button fill:secondary">Button</button>
<button class="button fill:red">Button</button>
<button class="button fill:orange">Button</button>
<button class="button fill:yellow">Button</button>
<button class="button fill:green">Button</button>
<button class="button fill:blue">Button</button>
<button class="button fill:purple">Button</button>
<button class="button fill:black">Button</button>
```
{{% /codeblock %}}

##### Outline Buttons

Empty buttons with outlines are also available using the `-outline` modifier.

<div class="buttons buttons-direction:ve2rtical -inline-tb margin-bottom:2">
  <button class="button button-style:outline fill:blue button-color:blue">Button</button>
  <button class="button button-style:outline fill:red">Button</button>
  <button class="button button-style:outline fill:orange">Button</button>
  <button class="button button-style:outline fill:yellow">Button</button>
  <button class="button button-style:outline fill:green">Button</button>
  <button class="button button-style:outline fill:blue">Button</button>
  <button class="button button-style:outline fill:purple">Button</button>
  <button class="button button-style:outline fill:black">Button</button>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="button -outline">Button</button>
<button class="button -outline -accent">Button</button>
<button class="button -outline -red">Button</button>
<button class="button -outline -orange">Button</button>
<button class="button -outline -yellow">Button</button>
<button class="button -outline -green">Button</button>
<button class="button -outline -blue">Button</button>
<button class="button -outline -purple">Button</button>
<button class="button -outline -black">Button</button>
<button class="button -outline -white">Button</button>
```
{{% /codeblock %}}
