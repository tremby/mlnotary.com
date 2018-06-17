---
title: "Card"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "The card component is a simple card based container that holds various types of information."

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

The card module contains header, content and footer child elements. There are two types of card styles available, elevated (default) and flat. By default child elements has padding however, this can be removed with the `-flush` modifier.

<div class="row grid-columns:1 grid-columns-sm:2 row-gutter:3 margin-bottom:2">
  <div class="column:1">
    <div class="card margin-bottom:2">
      <div class="card/header padding:none">
        <img src="https://i.imgur.com/Ig4qpjc.jpg" class="image">
      </div>
      <div class="card/content u-border-bottom">
        <div class="flex margin-bottom:2">
          <div class="flex/item margin-right:2">
            <span class="image image-shape:round image-size:3 fill:primary">
              <img src="https://pbs.twimg.com/profile_images/803356024690216960/CH3i813s_400x400.jpg">
            </span>
          </div>
          <div class="flex/item">
            <h6 class="font -bold">Jin Park</h6>
            <span class="u-color-default">@zapcss</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@zapcss</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        </p>
      </div>
      <div class="card/footer align:center fill:blue">
        <a href="#">Get started</a>
      </div>
    </div>
  </div>
  <div class="column:1">
    <div class="border:radius padding:2 fill:background-focus margin-bottom:2">
      <div class="card/content">
        <h3 class="font -body -gap-2 -bold">Step 1 of 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@zapcss</a>. <a href="#">#css</a> <a href="#">#responsive</a></p>
        <div>
        <a href="#" class="s-button -fluid u-color-white">
          Get Started
        </a>
        </div>
      </div>
    </div>
  </div>
</div>

{{% codeblock key="language" definition="html" margin="bottom" %}}
```html
<div class="card">
  <div class="card/header -flush">
    ...
  </div>
  <div class="card/content">
    ...
  </div>
  <div class="card/footer">
    ...
  </div>
</div>

<div class="card -flat">
  <div class="card/content">
    ...
  </div>
  <div class="card/footer">
    ...
  </div>
</div>
```
{{% /codeblock %}}
