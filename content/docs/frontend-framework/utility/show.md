---
title: "Show"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The show component manipulates the display property to block."

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

Defined with `u-show`.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-show">
  ...
</div>
```
{{% /codeblock %}}

##### Responsive Hide

You can assign responsive shows by adding standard device specific extensions.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="u-show-sm">
  ...
</div>
<div class="u-show-md">
  ...
</div>
```
{{% /codeblock %}}
