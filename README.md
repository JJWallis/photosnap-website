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
-  Mobile-first workflow
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Sass
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

This project was my first introduction to building and styling HTML tables, which generally speaking are fairly uncommon in modern web design due to their restrictive nature and niche use cases. Throughout my implementation, I learnt how to semantically structure the markup with `<thead>` and `<tbody>` elements, as well as including a `<caption>` to be read aloud as the title. Beyond this basic structure, I incorporated multiple accessibility features to help visually impaired users navigate through the tables' contents. These features included the `headers` and `scope` attributes, whose presence help define under which columns and rows certain table cells and headings live under. I lastly provided an extra paragraph in each cell of data to give more context about whether that specific feature was available or not, since by default the only content present was a decorative tick icon which required no alternative description.

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

The styling of the table also proved to be a major challenge, since by default tables have a restrictive nature where a lot of box model properties don't have any effect. In order to force the table to respond to mobile devices, I had to override all the required table-based elements with a `display:block` to remove their default styling and behaviour. From there I had more freedom to experiment with different properties (margin and width) to create the mobile design provided. Additionally, I adjusted the default alignment of content from centered to left-aligned, as well as using pseudo elements to create the table headings and labels, since the ones present in the header were only rendered visible beyond tablet devices.

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

This was my first attempt at 'manually' creating a hamburger made up of multiple `<span>` elements for the lines, positioned inside a button as the parent. On click, these lines would rotate and translate in on eachother to form a cross, instead of statically changing the default hamburger image to one of a cross.

```scss
.grid-container {
   @include m(offset) {
      @include m(pm) {
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
}
```

I was really proud of my solution to creating the primary 'offset' design of the hero sections on all pages. I ran into a number of bugs where grid would automatically adjust the heights of each row to match the amount of padding I had applied to each item. This produced a lot of undesired white space under each item housing an image, which I was able to solve by toggling the foreground image invisible, whilst including a background image which would cover all remaining space available. I still included the foreground image in the DOM to avoid that column from collapsing with a size of `auto`, which also created that uneven effect present in the original design.

```scss
.hero {
   @include m(stories) {
      @include mq(min-width, tablet) {
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

The last feature I was proud of was using grid to overlap content instead of turning to positioning by default. This is something you have to explicitly tell grid to allow since by default it assumes you never want that to happen, but it provides a much more coherent syntax as it's all controlled from the parent container itself.

### Continued development

I look forward to learning more about grid as a layout tool and using it in areas where at first I may not think it feasible. Not only does that occur with overlapping content, but also keeping content aligned on a single axis where we may naturally want to use flex instead.

### Useful resources

-  [Easily overlap content with CSS Grid](https://www.youtube.com/watch?v=HFG3BKOqOlE&ab_channel=KevinPowell) - This was a great short video by Kevin demonstrating how to overlap content with grid, specifically pointing out where most people get stuck and how to avoid that.

-  [Build and deploy your portfolio](https://scrimba.com/learn/portfolio) - This course was where I first learnt how to manually create my own custom hamburger, and manipulate its structure on interaction.

-  [Responsive Data Tables](https://css-tricks.com/responsive-data-tables/) - This CSS Tricks article was my introduction to responsively adjusting a tables design to fit mobile screens, focusing on a specific method which happened to be used in this project.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
