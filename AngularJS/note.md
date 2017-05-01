# AngularJS Directives and Data Binding

### AngularJS core concepts
- Directives : HTML annotations that trigger Javascript behaviors
- Modules : Where our application components live
- Controllers : Where we add application behavior
- Expressions : How values get displayed within the page

### Detail
- Directives
  - Directives have two parts. The first part is extra attributes, elements, and CSS classes that are added to an HTML template. The second part is JavaScript code that extends the normal behavior of the DOM.
  - The advantage of using directives is that an HTML template indicates the intended logic with a directive. Also, the built-in AngularJS directives handle most of the necessary DOM manipulation functionality that you need to implement to bind the data in the scope to a view.
  - More than 50 built-in directives
    - One way data binding [$scope, ng-bind] 
    - Two way data binding [ng-model] 
    - form validation [] 
    - template generation [ng-repeat] 
    - event handling [ng-click] 
    - manipulating HTML elements[ng-show, ng-hide]
  - Usage:
    - As an attribute: `<span my-directive></span>`
    - As an element: `<my-directive></my-directive>`
    - As a class: `<span class="my-directive: expression;"></span>`     ----- for much older browsers
    - As a comment: `<!-- directive: my-directive expression -->`     ----- for much older browsers
  
- Data binding directives
  - one-way binding, means a value is taken from the data model and inserted into an HTML element.
  - Two-way binding means a value is exchanged between data model and HTML element. Two bindings are realized by the ng-model. It can be applied only to elements that allow the user to provide a data value, which means the input, textarea, and select elements.

  Directives | description
  ---- | ----------------------------------------------
  ng- | indicates Angular built-in directive
  ng-app | defines and initializes an AngularJS application
  ng-controller | This directive creates new scope. e.g. `<div ng-controller="myFilterDemoCtrl"></div>`. Note the "controller as" syntax.
  ng-bind | Declares one-way data binding. Binds the innerText property of an HTML element. Binds application data ($scope.property) to the HTML View. `<p ng-bind=“name”></p>` equals to `<p> {{name}} </p>`.
  ng-bind-html | Creates data bindings using the innerHTML property of an HTML element. This is potentially dangerous because it means that the browser will interpret the content as HTML, rather than content.
  ng-bind-template | Similar to the ng-bind directive but allows for multiple template expressions to be specified in the attribute value.
  ng-model | Declares two-way data binding. Binds value of HTML controls (input, select, textarea, etc) to application data ($scope.property), e.g. `<p>Name: <input type="text" ng-model="name"></p>`
  ng-non-bindable | Declares a region of content for which data binding will not be performed.
  
- Template Directives:

  directives that can consume collections and generate the view over the data, to operate on collections of similar data objects and vary the view they present to the user based on different data values.
  
    Directives | description
    ---------- | --------------------------------------------
    ng-cloak | Applies a CSS style that hides inline binding expressions, which can be briefly visible when the document first loads
    ng-include | Loads, processes, and inserts a fragment of HTML into the Document Object Model
    ng-repeat | Generates new copies of a single element and its contents for each object in an array or property on an object, e.g. `<li ng-repeat="name in names"> {{ name }} </li>`
    ng-repeat-start | Denotes the start of a repeating section with multiple top-level elements
    ng-repeat-end | Denotes the end of a repeating section with multiple top-level elements
    ng-switch | Changes the elements in the Document Object Model based on the value of data bindings
  
  - ng-repeat : generating Elements Repeatedly
  
    The basic format of the value for the ng-repeat directive attribute is `<variable> in <source>`, where source is an _**object or array**_ defined by the controller $scope.
    
    For ng-repeat there are a set of built-in variables that provide context for the data being processed:
    
    Variable | Operation
    -------- | --------------------------------------------------------
    $index | Returns the position of the current object or property
    $first | true if the current object is the first in the collection 
    $middle | true if the current object is the first in the collection 
    $last | true if the current object is the last in the collection 
    $even | true for the even-numbered objects in a collection 
    $odd | true for the odd-numbered objects in a collection
    
  - ng-include : to include HTML partial Views
  
    The ng-include directive retrieves a fragment of HTML content from the server, compiles it to process any directives that it might contain, and adds it to the Document Object Model. These fragments are known as partial views.
    
    - to statically include HTML partial Views  
      ```
      <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
        <h3 class="panel-header">To Do List</h3>
        <ng-include src="'./includeDir/table.html'"></ng-include>
      </div>

      // in table.html
      <table class="table">
          <thead>
          <tr>
              <th>#</th>
              <th>Action</th>
              <th>Done</th>
          </tr>
          </thead>
          <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
              <td>{{$index + 1}}</td>
              <td ng-repeat="prop in item">{{prop}}</td>
          </tr>
      </table>    
      ```
  
    - to dynamically include HTML partial Views 
    
      The real power of the ng-include lies in the way that the src attribute is evaluated.
      
      ```
      <div id="todoPanel" class="panel" ng-controller="defaultCtrl">
          <h3 class="panel-header">To Do List</h3>

          <div class="well">
              <div class="checkbox">
                  <label>
                      <input type="checkbox" ng-model="showList">
                      Use the list view
                  </label>
              </div>
          </div>

          <ng-include src="viewFile()"></ng-include>
      </div>   
      <script>
        angular.module("exampleApp", [])
        .controller("defaultCtrl", function ($scope) {
          $scope.todos = [
                          { action: "Get groceries", complete: false },
                          { action: "Call plumber", complete: false },
                          { action: "Buy running shoes", complete: true },
                          { action: "Buy flowers", complete: false },
                          { action: "Call family", complete: false }
                         ];

                      /**
                       *This function returns the name of one of the two fragment files we created based on
                       * the value of a variable called showList.
                       * If showList is true, then the viewFile behavior returns the name of the listItems.html file;
                       * if showList is false or undefined, then the behavior returns the name of the table.html file.
                       * @returns {string}
                       */
          $scope.viewFile = function () {
            return $scope.showList ? "./includeDir/listItems.html" : "./includeDir/table.html";
          };
        });
      </script>
      
      // listItems.html
      <ol>
          <li ng-repeat="item in todos">
              {{item.action}}
              <span ng-if="item.complete"> (Done)</span>
          </li>
      </ol>      
      
      // table.html
      <table class="table">
          <thead>
          <tr>
              <th>#</th>
              <th>Action</th>
              <th>Done</th>
          </tr>
          </thead>
          <tr ng-repeat="item in todos" ng-class="$odd ? 'odd' : 'even'">
              <td>{{$index + 1}}</td>
              <td ng-repeat="prop in item">{{prop}}</td>
          </tr>
      </table>      
      ```
    
    
# AngularJS Filters

- AngularJS filters format the value of an expression for _**display**_ to the end user.

- Built-in filters:
  - Date, Number, Lowercase, Uppercase
  
    Built-in filters | description
    ---------------- | ----------------------------------
    date | Formats date to a string based on the requested format. T
    number | Formats a number as text. If the input is null or undefined, it will just be returned. If the input is infinite (Infinity/-Infinity) the Infinity symbol '∞' is returned. If the input is not a number an empty string is returned.
    lowercase | 
    uppercase | 
    limitTo | This handy filter lets you limit the amount of information displayed from an array. It does this by creating a new array, which contains a subset of the items that are contained in the original array.
  
  - Use of filter in the View:
    - {{ expression | filtername [: input parameter] }
    - example: `<span> {{ name | lowercase }} </span>`, `<span> {{ date | date : ‘d-M-yy EEEE’ }} </span>`
    
- Filters work great with ng-repeat
  ```
  <div ng-app="myApp" ng-controller="myController"> 
    <input type=“text” ng-model=“nameText”>
    <ul>
      <li ng-repeat="name in names | filter : nameText | orderBy : 'name' "> {{ name | uppercase }} </li> 
    </ul>
  </div>
  ```
  
- Custom filters

  example: replace the "-" with white-space of input
  ```
  // in .html
  <body ng-app="myStripDashesApp" ng-controller="myStripDashesController">
    <input type="text" ng-model="data.plan">
    <p>Data in the orginal form: {{data.plan}}</p>
    <p>Data with the dashes Stripped: {{data.plan | replaceDash}}</p>
  </body>
  
  // in .js
  angular.module('myStripDashesApp', [])
  .controller('myStripDashesController', function ($scope) {})
  .filter('replaceDash', function () {
      return function (text) {
        if (angular.isString(text)) {
          return text.split('-').join(' ');
        }else{
          return text;
        }
      }
  });  
  ```
  
  
