---
title: "Wrap"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The wrap component is a standard center aligning content container with a set maximum width."

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

The wrap layout definitions has float clearing properties built in.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="l-wrap">
  ...
</div>
```
{{% /codeblock %}}

##### Fluid Wrap

For fluid wrap apply `-fluid` classname. This can be extended with device modifiers for responsiveness.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="l-wrap -fluid -fluid-md">
  ...
</div>
```
{{% /codeblock %}}
