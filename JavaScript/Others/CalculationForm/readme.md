# assignment
Write a function that returns the total cost of any number of buckets of paint. Ask the user how many buckets he is going to buy and for the cost of one bucket. Ask him for the color of the paint. Calculate and return what he owes. Change the color of the font to the color of the paint. The document will have a pink background.

## Must Have Knowledge
#### How to access form elements
- [Best Practice: Access form elements by HTML id or name attribute?](http://stackoverflow.com/questions/2435525/best-practice-access-form-elements-by-html-id-or-name-attribute)

  - Give your form an id only, and your input a name only:
  ```
    <form id="myform">
      <input type="text" name="foo">
  ```   
  Then the most standards-compliant and least problematic way to access your input element is via:
  ```
    document.getElementById("myform").elements["foo"]
  ``` 

## Reference
- [Doing real-time calculations in a form using JavaScript](http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml)
- [How to set the value of a form element using Javascript PartI](http://www.javascript-coder.com/javascript-form/javascript-form-value.phtml)
- [How to set the value of a form element using Javascript PartII](http://www.javascript-coder.com/javascript-form/javascript-set-form-field.phtml)
- [How to set the value of a form element using Javascript PartIII](http://www.javascript-coder.com/javascript-form/javascript-form-value-select.phtml)
