- [Angular MVC Architecture](https://www.tutorialspoint.com/angularjs/angularjs_mvc_architecture.htm)

# [Developer Guide](https://docs.angularjs.org/guide)
## [Core concept](https://docs.angularjs.org/guide/concepts)
### [Modules](https://docs.angularjs.org/guide/module)
You can think of a module as a container for the different parts of your app – controllers, services, filters, directives, etc.
```
  <html ng-app="myApp">
  ...
  </html>
  <script>
     var myApp = angular.module('myApp', []);
  </script>
```

### [Controllers](https://docs.angularjs.org/guide/controller)
In AngularJS, a Controller is defined by a JavaScript _**constructor function**_ that is used to augment the _**AngularJS Scope**_.

When a Controller is attached to the DOM via the _**ng-controller**_ directive, AngularJS will instantiate a new _Controller object_, using the specified Controller's _constructor function_. A new child scope will be created and made available as an injectable parameter to the Controller's constructor function as $scope.

```
  <html ng-app="myApp">
    <div ng-controller="GreetingController">
      {{ greeting }}
    </div>
  </html>
  <script>
    var myApp = angular.module('myApp', []);
    myApp.controller("GreetingController", function($scope) {
        $scope.greeting = "hello world";
    });
  </script>
```
_**NOTE**_ : scope inheritance [Understanding Scopes](https://github.com/angular/angular.js/wiki/Understanding-Scopes)

### [Data binging](https://docs.angularjs.org/guide/databinding)
- one-way data binding : `ng-bind` or `{{value}}`, synchronizes the model to the view.
- two-way data binding : `ng-model`, synchronizes the model to the view, as well as view to the model.

### [Forms](https://docs.angularjs.org/guide/forms)
A Form is a collection of controls(`input`, `select`, `textarea`) for the purpose of grouping related controls together. Form and controls provide validation services, so that the user can be notified of invalid input before submitting a form. Server-side validation is still necessary for a secure application.

`<form novalidate class="simple-form">` : _**novalidate**_ is used to disable browser's native form validation. 

- Using CSS classes
  
  To allow styling of form as well as controls, ngModel adds these CSS classes:

  class name | description
  ---------- | -----------------------------------------------------
  `ng-valid` | the model is valid
  `ng-invalid` | the model is invalid
  `ng-valid-[key]` | for each valid key added by $setValidity
  `ng-invalid-[key]` | for each invalid key added by $setValidity
  `ng-pristine` | the control hasn't been interacted with yet
  `ng-dirty` | the control has been interacted with
  `ng-touched` | the control has been blurred
  `ng-untouched` | the control hasn't been blurred
  `ng-pending` | any $asyncValidators are unfulfilled
  
- Binding to form and control state
- Custom model update triggers
- Non-immediate (debounced) model updates
- Custom Validation
- Modifying built-in validators
- Implementing custom form controls (using ngModel)

### [Directives](https://docs.angularjs.org/guide/directive)

Directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's _**[HTML compiler](https://docs.angularjs.org/guide/compiler)**_ (`$compile`) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

#### AngularJS built-in directives
[AngularJS Built In Directives list](http://www.techstrikers.com/AngularJS/angularjs-built-in-directives.php)

#### Custom directives
- Normalization

  AngularJS normalizes an element's tag and attribute name to determine which elements match which directives.
  
  The normalization process is as follows:
  - Strip x- and data- from the front of the element/attributes.
  - Convert the :, -, or _-delimited name to camelCase.
  
  For example, the following forms are all equivalent and match the `ngBind` directive:
  ```
  <div ng-controller="Controller">
    Hello <input ng-model='name'> <hr/>
    <span ng-bind="name"></span> <br/>
    <span ng:bind="name"></span> <br/>
    <span ng_bind="name"></span> <br/>
    <span data-ng-bind="name"></span> <br/>
    <span x-ng-bind="name"></span> <br/>
  </div>
  ```
  
- Directive types

  $compile can match directives based on element names (E), attributes (A), class names (C), and comments (M).
  ```
  <my-dir></my-dir>                     // E
  <span my-dir="exp"></span>            // A
  <!-- directive: my-dir exp -->        // M
  <span class="my-dir: exp;"></span>    // C
  ```
  
  A directive can specify which of the 4 matching types it supports in the _**restrict**_ _property_ of the directive definition object. The default is `EA`.
  
  BEST PRACTICE : prefer using directives via _**tag name and attributes**_.
  
- Creating Directives

  Directives are registered on modules. To register a directive, you use the module.directive API. `module.directive` takes the normalized directive name followed by a _**factory function**_. This factory function should return an object with the different options to tell $compile how the directive should behave when matched.
  
  [Templates](https://docs.angularjs.org/guide/templates) are written with HTML that contains AngularJS-specific elements and attributes.
  
  ```
  <module>.directive(<name>, directiveFactory() {
      return {
          //restrict: 'E',               // Type of directive
          template: <template_string>,
	  //templateUrl: <html_url>,     // Template-expanding
          // scope: {}                   // isolate scope binding
      };
  });
  ```
  Example :
  ```
  <html ng-app="myApp">
    <div ng-controller="Controller">
      <my-customer info="naomi"></my-customer>
      <hr>
      <my-customer info="igor"></my-customer>
    </div>
  </html>  
  
  <script>
    angular.module('myApp', [])
    .controller('Controller', ['$scope', function($scope) {
      $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
      $scope.igor = { name: 'Igor', address: '123 Somewhere' };
    }])
    .directive('myCustomer', function() {
      return {
        restrict: 'E',
        scope: {
          customerInfo: '=info'
        },
        templateUrl: 'my-customer-iso.html'
      };
    });  
  </script>
  
  // my-customer-iso.html
  Name: {{customerInfo.name}} Address: {{customerInfo.address}}
  ```

  - Creating a Directive that Manipulates the DOM
  - Creating a Directive that Wraps Other Elements
  - Creating a Directive that Adds Event Listeners

### [Filters](https://docs.angularjs.org/guide/filter)

### [Services](https://docs.angularjs.org/guide/services)

## Tutorial
### [PhoneCat Tutorial App](https://docs.angularjs.org/tutorial/)
