# (jQuery reference)[https://api.jquery.com/]

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
 
