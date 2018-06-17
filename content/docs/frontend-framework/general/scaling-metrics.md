---
title: "Scaling Metrics"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "An indepth guide into common scale modifiers."

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

##### Scaling Metrics

There are various types of predefined scaling modifiers available. In most cases there are 5 levels of scaling modifiers available for each type of scale, however there are certain exceptions that provide more levels of scale such as the margin or padding utilities.

```html
-gap-1
-gap-2
-gap-3
-gap-4
-gap-5

-size-1
-size-2
-size-3
-size-4
-size-5

...
```

##### Sizing and Spacing Metrics

There are two main types of scaling metrics available, the `size` and `gap` metrics. Any modifiers that transform the size of a given element are defined with the `-size` syntax followed by the level. Any modifiers that apply spacing between elements are defined with the `-gap` syntax followed by the level. In general, gap transforms in only 1 direction whereas size transforms in both horizontal and vertical directions simultaneously.

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<button class="s-button -size-1">Smallest</button>
<button class="s-button -size-2">Small</button>
<button class="s-button -size-3">Medium</button>
<button class="s-button -size-4">Large</button>
<button class="s-button -size-5">Largest</button>

<h3 class="s-head -gap-1">Smallest Margin Below</h3>
<h3 class="s-head -gap-2">Small Margin Below</h3>
<h3 class="s-head -gap-3">Medium Margin Below</h3>
<h3 class="s-head -gap-4">large Margin Below</h3>
<h3 class="s-head -gap-5">Largest Margin Below</h3>
```
{{% /codeblock %}}

##### Grid Rhythm Variables

Grid rhythms are short and useful variables that provide rem based units. By default grid rhythms scale up in increments of 1 rem. By utilising grid rhythm variables, component padding and spacing can be tightly controlled and kept consistent.

By default font-size for the global HTML property are set to 62.5% which makes 1rem equal 10px. With this in mind Grid rhythm variables range from 10px to 200px.

{{% codeblock key="language" definition="scss" margin="bottom" %}}
```scss
--gr1: 1rem;
--gr2: 2rem;
--gr3: 3rem;
--gr4: 4rem;
--gr5: 5rem;
--u6: 6rem;
--gr7: 7rem;
--gr8: 8rem;
--gr9: 9rem;
--gr10: 10rem;
--gr11: 11rem;
--gr12: 12rem;
--gr13: 13rem;
--gr14: 14rem;
--gr15: 15rem;
--gr16: 16rem;
--gr17: 17rem;
--gr18: 18rem;
--gr19: 19rem;
--gr20: 20rem;
```
{{% /codeblock %}}

##### Font Sizing

There are a total of 8 font sizes that are accessible and used to style font sizes across all the components.

{{% codeblock key="language" definition="scss" margin="bottom" %}}
```scss
--h1: 5rem;
--h2: 3.6rem;
--h3: 3rem;
--h4: 2.4rem;
--h5: 2rem;
--h6: 1.8rem;
--body: 1.5rem;
--micro: 1.2rem;
```
{{% /codeblock %}}

##### Other Scaling Metrics

There are other common scaling metrics available such as the color scales `shade` and `shines`, and `grow` for buttons. Refer to the component documentation for more detail on these modifiers.
