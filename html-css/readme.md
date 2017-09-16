# Notes about html / css learning

### html

### CSS
- [The 30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
- [CSS Transitions and Transforms for Beginners](https://robots.thoughtbot.com/transitions-and-transforms)
- [Align a pseudo element to the right and vertical center](https://stackoverflow.com/questions/30055459/align-a-pseudo-element-to-the-right-and-vertical-center)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- traditional clear fix trick
  ```
  @mixin clearfix {
    &:before,
    &:after {
      content: '';
      display: table;
    }
    &:after {
      clear : both;
    }
  }
  #target_element_Id {
    @include clearfix;
  }
  ```

### Reference
- [How to style checkbox using CSS?](http://stackoverflow.com/questions/4148499/how-to-style-checkbox-using-css)
- [10 Hilarious Lorem Ipsum Generators for Web Designers](http://theultralinx.com/2013/08/10-hilarious-lorem-ipsum-generators-web-designers/)
- [CSS Font Stack](http://www.cssfontstack.com/)
- [Google fonts](https://fonts.google.com/)
- hr style
  - [Simple Styles for ```<hr>```'s](https://css-tricks.com/examples/hrs/)
  - [18 Simple Styles for Horizontal Rules (hr CSS Design)](https://codepen.io/ibrahimjabbari/pen/ozinB)
- get images [unsplash](https://source.unsplash.com/)
- [How To Center Anything With CSS](https://codemyviews.com/blog/how-to-center-anything-with-css)


---
# HTML5
## New structural elements

![html5_StructuringElements](html5_StructuringElements.jpg)

![html5_StructuringElements_description](html5_StructuringElements_description.JPG)

![html5-sectioning-flowchart](html5-sectioning-flowchart.png)

### Best practices when using sectioning elements
- Best practice 1: always add a heading to explicit sectioning content (mainly for accessibility reasons )
  - Always use a heading element after a sectioning element, for example `<section><Hx>...</Hx>...</section>`, and after `<body>`, where x can be 1..6,
  - Or, use a `<header>` element, like in `<section><header><Hx>...</Hx>.....</header>...</section>`. **_You can use heading elements `<h1>...<h6>` in a `<header>` but be careful if you use more than one_**
  ```
  // Good:
  <section>
    <h1>Blog post of April 2015</h1>
    ...
  </section>
  
  // Good
  <section>
    <header>
       <h1>Blog post of April 2015</h1>
       <p>Posted by Michel Buffa...</p>
    </header>
    ...
  </section>
  
  // Bad:
  <section>
    <header>
      <p class="article title">Blog post of April 2015</p>
      <p>Posted by Michel Buffa...</p>
    </header>
    ...
  </section>
  ```
  
  Notice that <body> is also a sectioning element. It's called a "sectioning root", and would also need a heading.
  ```
  // Good
  <body>
    <h1>Example Blog</h1>
    <section>
      <header>
         <h2>Blog post of April 2015</h2>
         <p>Posted by Michel Buffa...</p>
      </header>
      <p>Content of the blog post...</p>
    </section>
  </body>
  ```
  
- Best practice 2: try not to rely on implicit sectioning, use `<section>, <article>`, etc. instead of just `<h1>...<h6>`

### `<main>`
- Constraints:
  - There must NOT be more than one `<main>` element in a document,
  - It must NOT be a descendent of an `<article>,<aside>, <footer>, <header>, or <nav>` element.
  
- Best practice:
  - For accessibility matters, a best practice is to split your page content into "regions" defined by the five 5 elements (aside, footer, header, main and nav).
  
### about "not display heading content"
- BEST PRACTICE 1: In order to NOT display the heading content on screen  the recommended technique  is described in [this article by Steve Faulkner](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/). Do not use display:none or visibility:hidden in your CSS stylesheet, as in that case the heading content will never be vocalized by screen readers, and more generally by assistive technologies. 

  As an illustration of the recommended technique, see [this JSBin version of the blog example](http://jsbin.com/savabo/edit?html,css,output) that hides the `<h2>Navigation menu</h2>` from the `<nav>...</nav>` element, using the CSS technique explained in the above link.
  
- BEST PRACTICE 2: it is not advised to include interactive content (links, controls etc) that is hidden offscreen (it is in fact a violation of the [W3C WCAG 2.0 Guidelines](http://www.w3.org/TR/WCAG20/)). All interactive content must have a visible focus indicator (and be on screen when focused).

### `<details> & <summary>`
A sort of "accordion" with foldable content. [Example](https://codepen.io/ApplefaceLisa/pen/yzBxjg):
```
  <!DOCTYPE html>
  <html>
  <body>
  <details>
      <summary>
          How to beat the boss...spoiler alert !
      </summary>
         <p> Just aim to the red spots near his eyes</p>
         <p>Keep shooting at these spots until the eyes open, then hit quickly both eyes with your laser beam.</p>
  </details>
  </body>
  </html>
```

### External resources:
- Structural elements
  - [the-importance-of-sections](http://coding.smashingmagazine.com/2013/01/18/the-importance-of-sections/)
  - [new-structural-elements-in-html5](https://dev.opera.com/articles/new-structural-elements-in-html5/)
  - [the-semantics-of-html5-structural-elements](http://colinaut.com/2009/10/15/the-semantics-of-html5-structural-elements/)
- main tag
  - http://www.w3.org/TR/html5/grouping-content.html#the-main-element
  - http://www.w3.org/html/wg/wiki/User:Sfaulkne/main-usecases#Introduction
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
- [HTML5 Accessibility Chops: hidden and aria-hidden](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- using CSS to position elements : float and clear
  - http://learn.shayhowe.com/html-css/positioning-content/
  - http://alistapart.com/article/css-floats-101
  - http://webdesign.about.com/od/advancedcss/a/css-clear.htm
  - https://developer.mozilla.org/en-US/docs/Web/CSS/clear
- using CSS to position elements : flexbox
  - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
  - online practice flexbox : http://flexboxfroggy.com/
    - level 24 answer:
    ```
    #pond {
      display: flex;
      flex-flow: column-reverse wrap-reverse;
      justify-content: center;
      align-content: space-between;
    }
    ```
