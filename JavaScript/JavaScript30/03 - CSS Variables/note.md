# html
* <input type="color">   (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
is used to create an input field which allow user to select color and enter color code. 
A color picker's UI has no required features other than accepting simple colors as text.

# CSS
* :root selector     (https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
- The :root CSS pseudo-class matches the root element of a tree representing the document. Applied to HTML, :root represents the <html> element and is identical to the selector html, except that its specificity is higher.

- :root can be useful to declare global CSS Variables:
  
    :root {
      --main-color: hotpink;
      --pane-padding: 5px 42px;
    }
    
* filter
- The filter property provides graphical effects like blurring, sharpening, or color shifting an element. 
Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

    filter: url("filters.svg#filter-id");
    filter: blur(5px);
    filter: brightness(0.4);
    filter: contrast(200%);
    filter: drop-shadow(16px 16px 20px blue);
    filter: grayscale(50%);
    filter: hue-rotate(90deg);
    filter: invert(75%);
    filter: opacity(25%);
    filter: saturate(30%);
    filter: sepia(60%);

    /* Apply multiple filters */
    filter: contrast(175%) brightness(3%);

    /* Global values */
    filter: inherit;
    filter: initial;
    filter: unset;
    
# JavaScript    
