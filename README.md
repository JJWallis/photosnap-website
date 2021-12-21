# Frontend Mentor - Photosnap multi-page website solution

This is a solution to the [Photosnap multi-page website challenge](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for each page depending on their device's screen size
-  See hover states for all interactive elements throughout the site

### Screenshot

![](./screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Sass - CSS preprocessor
-  Typescript

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```scss
$colors: (
   accent-orange: 28 100% 79%,
);
```

Naked HSL colour format - alpha easily changeable (different shades of grey - table borders, colour of body vs btn hover effects)

```js
const proudOfThisFunc = () => {
   console.log('🎉')
}
```

### Continued development

Sass partials - more organised (Kevin live stream) - utilities folder + additional abstract partials (maps broken up)

### Useful resources

-  [Easily overlap content with CSS Grid](https://www.youtube.com/watch?v=HFG3BKOqOlE&ab_channel=KevinPowell) - Kevin's video for grid section in footer (overlapping nav + grid rows responding based on that)

-  [Build and deploy your portfolio](https://scrimba.com/learn/portfolio) - Scrimba course with Kevin showcases custom animated harmburger

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

HTML:

CSS:

accent bar - repsonsive height to hero content but relative to viewport

Hamburger - creating manually with spans + pseudo els of parent button | translate lines to form a cross on click

Social icons - gradient fill achieved by displaying that version on top of default as pseudo-el (opacity transitioned + switched on hover)

Grid offset design - switching fluid imgs + background-imgs (cover space where padding on text items causes fluid grid rows to expand)

Stories - clickable links as parent (wrapping everything in links + screwing up grid overlapping layout + position relative bug)
