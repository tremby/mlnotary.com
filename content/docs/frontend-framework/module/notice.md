---
title: "Notice"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The notice component is useful for visually displaying temporary content or information."

includeLabel: true
labelText: "MODULE"
labelColor: "yellow"

includeMetaCard: false
lastUpdated: "10/04/18"
parent: "Module"
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

Defined with the class `notice` initialized with javascript. The `notice/close` is required.

<div class="notice align:center border:sharp margin-bottom:2 is-active">
  <div class="notice/content">
    <span class="label fill:secondary margin-right:1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="notice margin-bottom:2">
  <div class="notice/content">
    ...
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
```

{{% codeblock key="initializing" definition="javascript" margin="top" %}}
```javascript
var zapNotice = new ZapNotice();
```
{{% /codeblock %}}

{{% /codeblock %}}

##### Colors

All standard color modifiers are available.

<div class="notice -red margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -orange margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -yellow margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-color-yellow u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -green margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-color-green u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -blue margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-color-blue u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -purple margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-color-purple u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -black margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-color-black u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -grey margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-color-grey u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="notice -red is-active">
  ...
</div>

<div class="notice -orange is-active">
  ...
</div>

<div class="notice -yellow is-active">
  ...
</div>
...
```
{{% /codeblock %}}

##### Alignment

Content can be centered aligned.

<div class="notice -center margin-bottom:2 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="top-tight" %}}
```html
<div class="notice -center is-active">
  ...
</div>
```
{{% /codeblock %}}

##### Shapes

You can apply differently shaped corners to buttons with the `-sharp`, `-round` modifiers.

<div class="notice margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -sharp margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>
<div class="notice -round margin-bottom:1 is-active">
  <div class="notice/content">
    <span class="label -middle -white u-margin-right-1">NEW</span>
    Sample Notification
  </div>

  <div class="notice/close">
    <span></span>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="notice is-active">
  ...
</div>
<div class="notice -sharp is-active">
  ...
</div>
<div class="notice -round is-active">
  ...
</div>
```
{{% /codeblock %}}


##### Options

<table class="m-table -fluid -stack">
  <thead>
    <tr>
      <th>
        <strong>Setting</strong>
      </th>
      <th>
        <strong>Default</strong>
      </th>
      <th>
        <strong>Description</strong>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Setting">
        element
      </td>
      <td data-label="Default">
        .notice
      </td>
      <td data-label="Description">
        Define the element class name to initialize.
      </td>
    </tr>
  </tbody>
</table>
