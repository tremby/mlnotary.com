---
title: "File Organization"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "An introduction to the 5 categories of component structure."

includeLabel: true
labelText: "GENERAL"
labelColor: "blue"
lastUpdated: "10/04/18"
parent: "General"
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

##### Component Structure

Everything is treated as a component, however not all components are equal. Components are organized into 5 different folder categories in order of specificity: base, layout, module, single and utility. This structure is an simplified adaptation of Jonathan Snook's SMACSS and the ITCSS methodology.

```html
/base
/layout
/module
/single
/utility
```

##### Base

The **Base folder** is the foundation of your project and contains CSS Normalize/Resets, HTML/body declarations, global pre-processor variables, mixins etc. Similar to a construction site, this is something we set once and expect to be stable. Treat this folder as the floor plan we build our project on.

##### Layout

The **Layout folder** contains components that only manipulate the positioning of content such as grids, media object and wrappers.

##### Module

The **Module folder** contains re-usable components that are made up of child elements but are treated as one single entity. These include tables, cards, lists, forms and etc.

##### Single

The **Single folder** contains small and singular components that are styled independent of its parent container such as buttons, headings and etc.

##### Utility

The **Utility folder** contains useful single purpose components such as hiddens, floats and aligns etc.
