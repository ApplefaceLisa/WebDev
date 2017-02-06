# assignment
Write a function that returns the total cost of any number of buckets of paint. Ask the user how many buckets he is going to buy and for the cost of one bucket. Ask him for the color of the paint. Calculate and return what he owes. Change the color of the font to the color of the paint. The document will have a pink background.

## Must Have Knowledge
### How to access form elements
##### In one word: select form by form id, select form elements by element name.

- [Best Practice: Access form elements by HTML id or name attribute?](http://stackoverflow.com/questions/2435525/best-practice-access-form-elements-by-html-id-or-name-attribute)

  - Give your form an id only, and your input a name only:
  ```
    <form id="myform">
      <input type="text" name="foo">
  ```   
  Then the most standards-compliant and least problematic way to access your input element is via:
  ```
    document.getElementById("myform").elements["foo"]
    i.e.
    document.getElementById("form_id").elements["input_name"]
  ``` 
  or
  ```
    document.forms["myform"].elements["foo"]
    i.e.
    document.forms["form_id"].elements["input_name"]
  ```
  
- [How to get the elements in a form](http://www.javascript-coder.com/javascript-form/getelementbyid-form.phtml)
  **i.e.: how to obtain references to the form object and its elements.**
  - use document.getElementById()
  - use document.getElementsByTagName()
  - use document.getElementsByName()
  - use document.forms[] to get form object
  
#### How to get value of a form element 
- [How to get the value of a form element : text and textarea](http://www.javascript-coder.com/javascript-form/javascript-get-form.phtml)
  - use element.value
  - code example
  ```
  <!DOCTYPE html>
  <html>
  <body>

  <form id="nameForm">
  First name: <input type="text" name="FirstName" value="Mickey" onchange="getName()" onkeypress="this.onchange()" onpaste="this.onchange();" oninput="this.onchange();"><br>
  Last name: <input type="text" name="LastName" value="Mouse" onchange="getName()" onkeypress="this.onchange()" onpaste="this.onchange();" oninput="this.onchange();"><br>
  <input type="submit" value="Submit">
  </form>
  <br>
  <textarea form="nameForm" name="comment" rows="4" cols="50" onchange="getComment()" onkeypress="this.onchange()" onpaste="this.onchange();" oninput="this.onchange();">
  At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
  </textarea>

  <p>Click the "Submit" button and the form-data will be sent to a page on the server called "demo_form.asp".</p>

  <script>
  function getName() {
    var nameform = document.forms["nameForm"];
    var fname = nameform.elements["FirstName"].value;
    var lname = nameform.elements["LastName"].value;
    var name = fname + " " + lname;
    console.log(name);
  }  
  function getComment() {
    var nameform = document.forms["nameForm"];
    var cele = nameform.elements["comment"];
    var comment = cele.value;
    console.log(comment);
  }
  </script>
  </body>
  </html>
  ```
  
- [How to get the value of a form element : check box and radio button](http://www.javascript-coder.com/javascript-form/javascript-get-check.phtml)  
  - use element.checked to test if radio/checkbox is selected/checked. For example:
  - radio
  
    Radio buttons in a form can be grouped together using the same name attribute, such that, if one of them is checked, all the others are automatically un-checked.
    ```
    <form action="" id="radioform">
      <input type="radio" name="gender" value="male" checked onclick="getGender()"> Male<br>
      <input type="radio" name="gender" value="female" checked onclick="getGender()"> Female<br>
      <input type="radio" name="gender" value="other" checked onclick="getGender()"> Other<br><br>
      <input type="submit">
    </form>

    <script>
      function getGender()
      {
         var elements = document.forms['radioform'].elements['gender'];
         var gender = '';

         for(var i = 0; i < elements.length; i++)
         {
            if(elements[i].checked)
            {
               gender = elements[i].value;
            }
         }
         console.log(gender);
         return gender;
      }
    </script>
    ```
  - checkbox
    A check box in a form has only two states (checked or un-checked) and is independent of the state of other check boxes in the form, unlike radio buttons which can be grouped together under a common name.
    ```
    <!DOCTYPE html>
    <html>
    <body>

    <form action="demo_form.asp" method="get" id="myForm">
      <input type="checkbox" name="vehicle" value="Bike" checked> I have a bike<br>
      <input type="checkbox" name="vehicle" value="Car"> I have a car<br>
      <input type="checkbox" name="email_alerts" value="ON" checked><label for='chk_email_alerts'>Email me matching jobs everyday</label><br> 
      <input type="checkbox" name="recruiter_contact" value="ON"><label for='chk_recruiter_contact'>Enable Recruiters to directly contact me</label><br>
      <input type="submit" value="Submit">
    </form>
    <script>
      var vehicle_elements = document.forms["myForm"].elements["vehicle"];
      for (var i = 0; i < vehicle_elements.length; i++) {
        testCheckbox(vehicle_elements[i]);
      }
      testCheckbox(document.forms["myForm"].elements["email_alerts"]);
      testCheckbox(document.forms["myForm"].elements["recruiter_contact"]);

      function testCheckbox(element)
      {
          if (element.checked == true)
          {
              alert("Checkbox with name = " + element.name 
                  + " and value =" + element.value + " is checked");
          }
          else
          {
              alert("Checkbox with name = " + element.name 
                  + " and value =" + element.value + " is not checked");
          }
      }
    </script>
    </body>
    </html>
    ```

- [How to get the value of a form element : Drop downs and lists](http://www.javascript-coder.com/javascript-form/javascript-get-select.phtml)
  - note: .selectedIndex, .options, .options.length, .options[i].selected, .options[i].value, .options[i].text.
  - drop down lists
  ```
  <!DOCTYPE html>
  <html>
  <body>

  <form action="action_page.php" id="myForm">
    <select name="cars" onchange = "getSelected()">
      <option value=""> - Select - </option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="fiat">Fiat</option>
      <option value="audi">Audi</option>
    </select>
    <br><br>
    <input type="submit">
  </form>
  <script>
    function getSelected() {
      var selected = document.forms["myForm"].elements["cars"];
      var index = selected.selectedIndex;           // get the selected option's index
      var value = selected.value;                   // get the selected option's value, same as the following line
      var value = selected.options[index].value;    // get the selected option's value
      var text = selected.options[index].text;      // get the selected option's text
      console.log(index+' '+value+' '+text);
    }
  </script>
  </body>
  </html>
  ```
  - Multi-select list
  ```
  <!DOCTYPE html>
  <html>
  <body>
  <form id="jobs">
  <select name="job_category" id='slt_job_category' size="4" multiple='multiple' onchange="getSelectedOptions()"> 
  <option value="">- Select -</option>
  <option value='1'>Software Development</option>
  <option value='2'>Sales & Marketing</option>
  <option value='3'>Customer Support & Communications</option>
  <option value='4'>Advertising</option>
  <option value='5'>Public Relations and Event Management</option>
  <option value='6'>Oil & Gas</option>
  <option value='7'>Construction</option>
  <option value='8'>Other</option> 
  </select><br>
  <input type="submit">
  </form>

  <p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>
  </body>
  <script>
  function getSelectedOptions() {
    var jobList = document.forms["jobs"].elements['job_category'];
    var selected = [];
    for (var i = 0; i < jobList.options.length; i++) {
      if (jobList.options[i].selected) {
        selected.push(jobList.options[i].text);
      }
    }
    console.log(selected);
    return selected;
  }  
</script>
</html>
  ```
  
#### How to set value of a form element  
- [How to set the value of a form element using Javascript PartI](http://www.javascript-coder.com/javascript-form/javascript-form-value.phtml)
- [How to set the value of a form element using Javascript PartII](http://www.javascript-coder.com/javascript-form/javascript-set-form-field.phtml)
- [How to set the value of a form element using Javascript PartIII](http://www.javascript-coder.com/javascript-form/javascript-form-value-select.phtml)  

## Reference
- **[Javascript Form Handling](http://www.javascript-coder.com/category/javascript-form)**
- [Doing real-time calculations in a form using JavaScript](http://www.javascript-coder.com/javascript-form/javascript-calculator-script.phtml)
