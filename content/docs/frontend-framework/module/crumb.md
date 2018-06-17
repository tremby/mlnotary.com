---
title: "Crumb"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The crumb component provides visual information of the current page location in context to the overall parent hierarchy."

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

<div class="crumb margin-bottom:2">
  <a href="#" class="crumb/item color:primary font:link">Breadcrumb</a>
  <span class="crumb/slash">/</span>
  <a href="#" class="crumb/item color:primary font:link">Breadcrumb</a>
  <span class="crumb/slash">/</span>
  <span class="crumb/item color:primary font:link is-active">Current Page</span>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="crumb">
  <a href="#" class="crumb/item">Breadcrumb</a>
  <span class="crumb/slash">/</span>
  <a href="#" class="crumb/item">Breadcrumb</a>
  <span class="crumb/slash">/</span>
  <span class="crumb/item is-active">Current Page</span>
</div>
```
{{% /codeblock %}}
