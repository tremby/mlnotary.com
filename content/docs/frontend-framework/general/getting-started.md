---
title: "Getting Started"
date: 2018-04-11T09:16:45+12:00
draft: false

layout: "docs"

description: "Geting started is easy, here's a quick start guide to help kickstart your project."

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

##### The Quick Way

There are two ways you can get started. The quickest way is to include the production ready CSS and Javascript files into your project. This will provide your project with all the basic component and give your stylesheet access to global and local CSS variables.

1. Download or clone **<a href="https://github.com/zapFramework/zapCSS">repository</a>**.
2. Include the CSS and JS files found in the dist folder.

##### Recommended Way

To take full advantage of this framework and its customization options, include the src file as part of your project build process. This is the recommended way if your project requires complex customization or component extensions.

**Build Process**

ZapCSS utilizes a combination of Gulp, SCSS and PostCSS to build the project. At its core, Gulp runs three tasks `zap-css`, `zap-js` and `zap-media` to process and compile each of the asset groups. The following is a breakdown of the build process in more detail.

1. SCSS variables are preprocssed to build out the various component library
2. This is then parsed through PostCSS for autoprefixing, media query grouping, and minification
3. Core javascript files are concatenated and minified
4. Image files are compressed

Refer to `gulpfile.js` for a detailed view of how each of these assets are processed. Feel free to customise the gulpfile to suit your project.

##### Browser Support

**ZapCSS supports the latest, stable releases of all major browsers and platforms**. On Windows, we support Internet Explorer 11 / Microsoft Edge. By default PostCSS's cssnext plugin converts your CSS custom properties to support IE11, however you can disable cssnext to retain native css variables.

##### Importance of Green CSS

The life of any project lives on after its inception. Like most things, your project will eventually need to evolve and grow. In order to perform maintanence and style updates without incurring unnecessary debt your CSS should be kept well organized, modular and minimal.

Badly maintained CSS can be frustrating to work as you spend more time fighting against your stylesheet as oppose to working with it. This will eventually reduce your efficiency and slow down development.

So how do you organize your css to be simple and manageable? How do you deal with overrides and CSS specificity? How do you reduce bloat, increasing re-usability and performance? Let's begin our journey with a simple but crucial concept, file organization.
