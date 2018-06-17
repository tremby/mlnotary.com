---
title: "Grid"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The grid component takes advantage of the latest css grid layout property providing you with varying column containers and layout area styling. Note, old row and col definitions are now deprecated."

includeLabel: true
labelText: "LAYOUT"
labelColor: "green"

includeMetaCard: false
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

By default grid layouts containers have a 12 column grid template. You can assign different columns templates with the `-set` modifier.


<!-- 12 Grid -->
<div class="row margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 11 Grid -->
<div class="row -set-11 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 10 Grid -->
<div class="row -set-10 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 9 Grid -->
<div class="row -set-9 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 8 Grid -->
<div class="row -set-8 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 7 Grid -->
<div class="row -set-7 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 6 Grid -->
<div class="row -set-6 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 5 Grid -->
<div class="row -set-5 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 4 Grid -->
<div class="row -set-4 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 3 Grid -->
<div class="row -set-3 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 2 Grid -->
<div class="row -set-2 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<!-- 3 Grid -->
<div class="row -set-1 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row">
  <div class="item">
    ...
  </div>
</div>

<div class="row -set-11">
  <div class="item">
    ...
  </div>
</div>

<div class="row -set-10">
  <div class="item">
    ...
  </div>
</div>

...
```
{{% /codeblock %}}

##### Responsive Grid Templates

You can assign responsive grid templates using standard device specific modifiers.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row -md-6 -lg-10">
  <div class="item">
    ...
  </div>
</div>
```
{{% /codeblock %}}

##### Grid Gutters

You can assign gutters using standard gap modifiers.

<div class="row -gap-1 -set-4 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -gap-2 -set-4 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -gap-3 -set-4 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -gap-4 -set-4 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -gap-5 -set-4 margin-bottom:2">
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
  <div class="item -span-1">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row -gap-1">
  ...
</div>
<div class="row -gap-2">
  ...
</div>
<div class="row -gap-3">
  ...
</div>
<div class="row -gap-4">
  ...
</div>
<div class="row -gap-5">
  ...
</div>
```
{{% /codeblock %}}

##### Grid Items

Grid items are child elements that horiontally seperate content. Various grid items column spans can be assigned with the `-span` modifiers. For device specific spans use the standard responsive modifiers.

<div class="row margin-bottom:2">
  <div class="item -span-6 -span-sm-7 -span-md-8 -span-lg-10">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
  <div class="item -span-6 -span-sm-5 -span-md-4 -span-lg-2">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      &nbsp;
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row">
  <div class="item -span-6 -span-sm-7 -span-md-8 -span-lg-10">
    ...
  </div>
  <div class="item -span-6 -span-sm-5 -span-md-4 -span-lg-2">
    ...
  </div>
</div>
```
{{% /codeblock %}}


##### Pushing Items

You can push grid items with the `-push` modifier. For device specific pushes, use standard responsive modifiers.

<div class="row margin-bottom:2">
  <div class="item -span-6 -push-6 -push-sm-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row">
  <div class="item -span-6 -push-6 -push-sm-2">
    ...
  </div>
</div>
```
{{% /codeblock %}}

##### Ordering Items

The order property can be used to specify the order in which different items should be placed inside a grid. By default, the items are placed in the order in which they appear in the DOM. You can reorder grid items with the `-order` modifier. For device specificity, use standard responsive modifiers.

<div class="row margin-bottom:2">
  <div class="item -span-6 -order-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      1
    </div>
  </div>
  <div class="item -span-6 -order-1">
    <div class="u-pad-0 u-align-center u-fill-shade-2">
      2
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row">
  <div class="item -span-6 -order-2">
    1
  </div>
  <div class="item -span-6 -order-1">
    2
  </div>
</div>
```
{{% /codeblock %}}

##### Content Alignment

You can align content left to right, top to bottom using directional modifier. For device specificity, use standard responsive modifiers. You can also apply the same directional alignments to child items.

<div class="row -top margin-bottom:2 u-fill-shade-2" style="height: 100px;">
  <div class="item -span-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -middle margin-bottom:2 u-fill-shade-2" style="height: 100px;">
  <div class="item -span-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -bottom margin-bottom:2 u-fill-shade-2" style="height: 100px;">
  <div class="item -span-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -left margin-bottom:2 u-fill-shade-2">
  <div class="item -span-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -center margin-bottom:2 u-fill-shade-2">
  <div class="item -span-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

<div class="row -right margin-bottom:2 u-fill-shade-2">
  <div class="item -span-2">
    <div class="u-pad-0 u-align-center u-fill-shade-4">
      &nbsp;
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="row -top">
  <div class="item">
    ...
  </div>
</div>
<div class="row -middle">
  <div class="item">
    ...
  </div>
</div>
<div class="row -top">
  <div class="item">
    ...
  </div>
</div>
<div class="row -left">
  <div class="item">
    ...
  </div>
</div>
<div class="row -center">
  <div class="item">
    ...
  </div>
</div>
<div class="row -right -md-center">
  <div class="item">
    ...
  </div>
</div>
```
{{% /codeblock %}}

##### Grid Areas

The grid layout definition comes with a basic template that can be extended depending on your project.

{{% codeblock lang="css" %}}
```css
.grid {
  display: grid;
  &__area {
    &.-header {
      grid-area: header;
    }
    &.-sidebar {
      grid-area: sidebar;
    }
    &.-content {
      grid-area: content;
    }
    &.-footer {
      grid-area: footer;
    }
  }
}
```
{{% /codeblock %}}
