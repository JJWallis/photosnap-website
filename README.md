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
<table>
   <caption class="sr-only">
      Compare pricing features
   </caption>
   <thead>
      <tr>
         <th id="feat" scope="col">The Features</th>
      </tr>
   </thead>
   <tbody>
      <td headers="basic">
         <img src="./assets/pricing/desktop/check.svg" alt="" />
         <p class="sr-only">Feature available</p>
      </td>
   </tbody>
</table>
```

This project was my first introduction to building and styling HTML tables, which generally speaking are fairly uncommon in modern web design due to their restrictive nature and niche use-cases. Throughout my implementation I learnt how to semantically structure the markup with `<thead>` and `<tbody>` elements, as well as including a `<caption>` to be read aloud as the title. Beyond this basic structure, I incorporated multiple accessibility features to help visually impaired users navigate through the tables' contents. These features included the `headers` and `scope` attributes, whose presence help define under which columns/rows of data certain table cells and headings live under. I lastly provided an extra paragraph in each cell of data to give more context about whether that specific feature was available or not on its corresponding subscription plan, since by default the only content present was a decorative image with no alternative description.

```scss
.compare__table {
   @include mq(max-width, tablet) {
      table,
      thead,
      tbody,
      th,
      td,
      tr {
         display: block;
      }

      @include e(header) {
         @include m(heading) {
            @include mq(max-width, tablet) {
               position: absolute;
               top: -9999px;
               left: -9999px;
            }
         }
      }
   }
}
```

The styling of the table also proved to be a major challenge, since by default they have a restrictive nature where a lot of box model properties don't have any effect. In order to force the table to respond to mobile devices, I had to override all the required table-based elements with a `display:block` to remove their default styling and behaviour. From there I had more freedom to experiment with different properties (margin and width) to create the mobile design provided. Additionally, I adjusted the default alignment of content from centered to left-aligned, as well as using pseudo elements to create the table headings/labels since the ones present in the header were only rendered visible beyond tablet devices.

```scss
$colors: (
   accent-orange: 28 100% 79%,
);

.example {
   color: hsl(var(--clr-light-grey-body) / 0.7);
}
```

The code above highlights a new methodology I adopted for this project regarding the format of colors I chose to use. I have become a great fan of the more recent `HSL()` format for storing colors, since it provides the most convenient method to modifying the base color. However, I learnt that if you store the hsl color without certain parts of it syntax, you're still able to use it by wrapping your CSS variable (in my case) inside the parenthesis, and easily change the alpha-channel all within the same syntax.

```scss
.hamburger {
   &[data-visible='true'] {
      &::before {
         transform: rotate(46deg) translate(9px, 2.5px);
      }
      &::after {
         transform: rotate(-46deg) translate(3px, 3px);
      }
   }
}
```

Hamburger - creating manually with spans + pseudo els of parent button | translate lines to form a cross on click

```scss
.grid-container {
   @include m(offset) {
      @include m(pm) {
         @include mq(min-width, tablet) {
            grid-template-columns: 1fr auto;
         }
         @include mq(min-width, desktop-offset) {
            grid-template-columns: minmax(500px, 1fr) auto;
         }
         @include mq(min-width, ultra-wide) {
            grid-template-columns: repeat(2, 1fr);
         }
      }

      @include mq(min-width, desktop-offset) {
         @include e(image) {
            opacity: 0;
         }
         @include m(hero) {
            @include m(home) {
               @include bg-img(
                  $img: '../assets/home/desktop/create-and-share.jpg'
               );
            }
         }
      }
   }
}
```

Grid offset design - switching fluid imgs + background-imgs (cover space where padding on text items causes fluid grid rows to expand) | changing position to keep focus point of img in view (diff for each pic)

```scss
.hero {
   @include mq(min-width, tablet) {
      padding-left: clamp(2rem, 6vw, 5rem);
   }
}
```

Accent bar - repsonsive height to hero content but pinned to viewport edge | logical clamp() padding-left = scale with width of utility container-wrapper + adjusted for ultra wide screens

```scss
.hero {
   @include m(stories) {
      @include mq(min-width, tablet) {
         background-color: transparent;
         position: relative;
         grid-column: 1 / 2;
         grid-row: 1 / 2;

         @include m(bg) {
            grid-column: 1 / -1;
            grid-row: 1 / 2;
         }
      }
   }
}
```

Overlapping content with grid (referenced kevins vid below)

```scss
.social-list {
   @include e(item) {
      position: relative;
      @include p-el(before) {
         @include position(absolute);
      }
      &:hover {
         @include p-el(before) {
            opacity: 0;
         }
      }
   }
}
```

Social icons - gradient fill achieved by displaying that version on top of default as pseudo-el (opacity switched on hover)

### Continued development

Sass partials - more organised (Kevin live stream) - utilities folder + additional abstract partials (maps broken up)

Grid layout - overlapping practice (using positioning less) | not turning to flex immediately (centering content + align-self - don't have with flex)

### Useful resources

-  [Easily overlap content with CSS Grid](https://www.youtube.com/watch?v=HFG3BKOqOlE&ab_channel=KevinPowell) - Kevin's video for grid section in footer (overlapping nav + grid rows responding based on that)

-  [Build and deploy your portfolio](https://scrimba.com/learn/portfolio) - Scrimba course with Kevin showcases custom animated harmburger

-  [Responsive Data Tables](https://css-tricks.com/responsive-data-tables/) - CSS tricks article | multiple responsive techniques with tables - this one used in the design (with a few additions - tick cells next to each-other) | display block for mobile means normal properties start working for these els (normally don't because strict HTML behaviour)

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
