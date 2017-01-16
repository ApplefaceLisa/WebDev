# CSS
- box-sizing: border-box;
- selector : *, *:before, *:after
- ** flexbox **
- transform
  - transform : translateY()
    - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY
    - The translateY() CSS function moves the element vertically on the plane. This transformation is characterized by a <length> defining how much it moves vertically.
    - translateY(ty) is a shortcut for translate(0, ty).
      - when ty > 0, move downward;
      - when ty < 0, move upward.

# JavaScript
- Element.classList
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  - methods
    - add( String [, String] )
      Add specified class values. If these classes already exist in attribute of the element, then they are ignored.
      
    - remove( String [,String] )
      Remove specified class values.
      
    - item ( Number )
      Return class value by index in collection.
      
    - toggle ( String [, force] )
      - When only one argument is present: Toggle class value; i.e., if class exists then remove it and return false, if not, then add it and return true.
      - When a second argument is present: If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.

    - contains( String )
      Checks if specified class value exists in class attribute of the element.

- EventTarget.addEventListener()
  - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  - The EventTarget.addEventListener() method registers the specified listener on the EventTarget it is called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).
  
- transitionend 
  - https://developer.mozilla.org/en-US/docs/Web/Events/transitionend
  - The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

# Reference
- Document Object Model (DOM)
  - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
  
- flexbox
  - A Complete Guide to Flexbox : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  
  - Flex : https://css-tricks.com/almanac/properties/f/flex/    
  
  - https://flexbox.io/
  
- Event reference : https://developer.mozilla.org/en-US/docs/Web/Events  
