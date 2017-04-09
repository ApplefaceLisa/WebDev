# jQuery Selectors

- Select by tag name
  
  to select all img tags : $("img")
  
- Select by class name

  to select all elements with class "sale" : $(".sale")
  
- Select by Id

  to select element with id "bonus" : $("#bonus")
  
- combined

  to select all "a" tags inside of "li"s : $("li a")
  
# Manipulating CSS
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
  
