---
title: "Configuration"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "Start your next project the right way."

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

##### Setup your Project

The `default.variables` file contains all the base setting variables that is used to compile and generate the component properties.

```scss
$levels: 5 !default;
$levels: 5 !default;
$columns: 12 !default;
$max-width: 1440px !default;
$radius: 5px !default;
$background: #fbfcfd !default;
$color: #4D5871 !default;
$links: #4D58EF !default;
$default-columns: 12 !default;
var(--border-color): #D4DEE8 !default;
$border: 1px solid var(--border-color) !default;

...
```


##### Global Custom Properties

Common global variables are converted to CSS custom properties and are accessible in post processed state. To view all global custom properties that are available refer to `b-root.component`.

{{% codeblock key="language" definition="scss" margin="bottom" %}}
```scss
:root {

  --max-width: #{$max-width};
  --radius: #{$radius};
  --background: #{$background};
  --color: #{$color};
  --links: #{$links};
  --default-columns: #{$default-columns};
  --border-color: #{var(--border-color)};
  --border: #{$border};

  ...
}
```
{{% /codeblock %}}


##### Local Custom Properties

In addition to global custom properties, components feature local custom properties that are namespaced with the component name. This enables local component variable overrides.


{{% codeblock key="language" definition="scss" margin="bottom" %}}
```scss
/************************************************************
BUTTON SINGLE
************************************************************/

:root {
  --button__padding: .9em 1em;
  --button__outline-weight: 2px;
  --button__radius: var(--radius);
  --button__font-family: var(--font-family);
  --button__font-weight: var(--regular);
  --button__transition: all 0.2s ease;
}
```
{{% /codeblock %}}
