---
title: "List"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The list module is used to present any list of content horizontally or vertically."

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

The list module `list` is useful for any type of list content that runs horizontally and vertically.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<ul class="list">
  <li class="list/item">List Item</li>
  <li class="list/item">List Item</li>
  <li class="list/item">List Item</li>
</ul>
```
{{% /codeblock %}}

##### Spacing

You can use the standard spacing modifiers to control the spread between list items. You can make your list run horizontally with the `list:inline` modifier.

<ul class="list list-gutter:1 list:inline margin-bottom:2" style="margin-left: 0">
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
</ul>

<ul class="list list-gutter:2 list:inline margin-bottom:2" style="margin-left: 0">
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
</ul>

<ul class="list list-gutter:3 list:inline margin-bottom:2" style="margin-left: 0">
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
</ul>

<ul class="list list-gutter:4 list:inline margin-bottom:2" style="margin-left: 0">
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
</ul>

<ul class="list list-gutter:5 list:inline margin-bottom:2" style="margin-left: 0">
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
  <li class="list/item">
    <div class="image border:sharp image-shape:square image-size:2 fill:primary">
    </div>
  </li>
</ul>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<ul class="list list-gutter:1">
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
</ul>
<ul class="list list-gutter:2">
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
</ul>
<ul class="list list-gutter:3">
  <li class="list/item">...t</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
</ul>
<ul class="list list-gutter:4">
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
</ul>
<ul class="list list-gutter:5">
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
  <li class="list/item">...</li>
</ul>
```
{{% /codeblock %}}
