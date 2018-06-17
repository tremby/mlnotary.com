---
title: "Hide"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The hide component manipulates the display property to none."

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

Defined with `u-hide`.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-hide">
  ...
</div>
```
{{% /codeblock %}}

##### Responsive Hide

You can assign responsive hides by adding standard device specific extensions.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-hide-sm">
  ...
</div>
<div class="u-hide-md">
  ...
</div>
```
{{% /codeblock %}}
