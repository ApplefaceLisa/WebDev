# [jQuery reference](https://api.jquery.com/)

## jQuery Selectors (return a list of element/s)

- Select by tag name
  
  to select all img tags : $("img")
  
- Select by class name

  to select all elements with class "sale" : $(".sale")
  
- Select by Id

  to select element with id "bonus" : $("#bonus")
  
- combined

  to select all "a" tags inside of "li"s : $("li a")
  
## Manipulating CSS
 - selector.css("property name", "value")
 ```
   $("div").css("border", "2px solid red");
   or
   var styles = {
     backgroundColor : "pink",
     fontWeight : "bold",
     color: "red",
     border: "2px solid purple"
   };
   $("div").css(styles);
 ```  
  
## Common jQuery methods
 - val()
 - text()  , similar to textContent of javascript
 - attr()
 - html()  , similar to innerHtml of javascript
 - addClass()
 - removeClass()
 - toggleClass()
 
 ## jQuery events
 - click
 - keypress
 
# Articles
- [Simple jQuery Carousel Slider Tutorial](http://paulmason.name/item/simple-jquery-carousel-slider-tutorial) fadeIn/fadeOut
- [Building a Responsive jQuery Carousel Plugin from Scratch](https://www.barrelny.com/blog/building-a-jquery-slideshow-plugin-from-scratch/) Prev/Next, Responsive    
  - [Code](https://codepen.io/barrel/pres/oBefw)
- [Project: Creating an Image Carousel/Slider in Javascript](https://www.theodinproject.com/courses/javascript-and-jquery/lessons/creating-an-image-carousel-slider)
