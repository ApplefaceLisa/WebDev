# AngularJS Directives and Data Binding

  name | description
  ---- | ----------------------------------------------
  ng- | indicates Angular built-in directive
  ng-app | defines and initializes an AngularJS application
  ng-bind | Declares one-way data binding. Binds application data ($scope.property) to the HTML View
  ng-model | Declares two-way data binding. Binds value of HTML controls (input, select, textarea, etc) to application data ($scope.property), e.g. `<p>Name: <input type="text" ng-model="name"></p>`
  {{ expression }} | Data Binding Expression, bind AngularJS data to HTML the same way as the ng-bind directive. `<p> {{name}} </p>` equals to `<p ng-bind=“name”></p>`
  ng-init | initializes JS Model data behind the scenes, e.g. `<div ng-init="names=['Laura', 'Vivek', 'Mark', 'Steve']">`
  ng-repeat | iterates through data, e.g. `<li ng-repeat="name in names"> {{ name }} </li>`
  
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
  
  
