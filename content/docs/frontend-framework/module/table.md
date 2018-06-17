---
title: "Table"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The table module is useful for displaying grid based data and content."

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

The table module is defined with the `table` class. By default the table width will only be as wide to fit the content. To make the table span the full width assign the `-fluid` modifier.

<table class="table table:fluid margin-bottom:2">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="hover-fill:background-focus">Cell</td>
      <td class="hover-color:red">Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>


{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<table class="table -fluid">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
    <tr>
      <td>Cell</td>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
```
{{% /codeblock %}}

##### Responsive Tables

Tables can respond to devices and display cells stacked with the `-stack` modifier. Header labels can be applied by adding the attribute `data-label` to the `<td>` cell.

<table class="table table:fluid table:stack margin-bottom:2">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
    </tr>
    <tr>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
    </tr>
  </tbody>
</table>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<table class="table -fluid -stack">
  <thead>
    <tr>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
      <th>Head</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
    </tr>
    <tr>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
      <td data-label="Label">Cell</td>
    </tr>
  </tbody>
</table>
```
{{% /codeblock %}}
