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

  AngularJS provides basic implementation for most common HTML5 input types: (text, number, url, email, date, radio, checkbox), as well as some directives for validation (required, pattern, minlength, maxlength, min, max). Failed validators are stored by key in [ngModelController.$error](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController#$error).

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
  - A form is an instance of [FormController](https://docs.angularjs.org/api/ng/type/form.FormController). The form instance can optionally be published into the scope using the `name` attribute.
  ```
    <form name="form" class="css-form" novalidate>
      <div ng-show="form.$submitted">...</div>
      ...
    </form>
  ```
  
  - An input control that has the [ngModel](https://docs.angularjs.org/api/ng/directive/ngModel) directive holds an instance of [NgModelController](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController). Such a control instance can be published as a property of the form instance using the name attribute on the input control.
  ```
    <form name="form" class="css-form" novalidate>
      <label>Name:
        <input type="text" ng-model="user.name" name="uName" required="" />
      </label>
      <br />
      <div ng-show="form.$submitted || form.uName.$touched">
        <div ng-show="form.uName.$error.required">Tell us your name.</div>
      </div>
    </form>
  ```
  
- Custom model update triggers

  By default, any change to the content will _**trigger**_ a model update and form validation. You can override this behavior using the [ngModelOptions](https://docs.angularjs.org/api/ng/directive/ngModelOptions) directive to bind only to specified list of events.
  
  `ng-model-options="{ updateOn: '[default] [event1] [event2]...' }"`
  
- Non-immediate (debounced) model updates

  You can _**delay**_ the model update/validation by using the `debounce` key with the [ngModelOptions](https://docs.angularjs.org/api/ng/directive/ngModelOptions) directive. This delay will also apply to parsers, validators and model flags like `$dirty` or `$pristine`. E.g. `ng-model-options="{ debounce: 500 }"`.
  
  Custom trigger and delay : `ng-model-options="{ updateOn: 'default blur', debounce: { default: 500, blur: 0 } }"`
  
- _**Custom Validation**_

  - `$validators` object, receives the [modelValue]() and the [viewValue]() as parameters.
  - `$asyncValidators` object which handles asynchronous validation
  
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
Example:
```
<body ng-app="myApp" ng-controller="Controller">
  <div>
    <my-customer info="naomi"></my-customer>
    <hr>
    <my-customer info="igor"></my-customer>
  </div>

  <script>
  var app = angular.module('myApp', []);
 
  app.controller('Controller', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  });

  app.directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info'
      },
      templateUrl: 'example7-my-customer-iso.html'
    };
  });  
  </script>
</body>

// example7-my-customer-iso.html
Name: {{customerInfo.name}} Address: {{customerInfo.address}}
```

### [Services](https://docs.angularjs.org/guide/services)

### [Component Router](https://docs.angularjs.org/guide/component-router)
- w3school [AngularJS Routing](https://www.w3schools.com/angular/angular_routing.asp)
- [AngularJS Routing](http://www.tutorialsteacher.com/angularjs/angularjs-routing)
- [Navigation From One Page to Another In AngularJS Page Routing](http://www.c-sharpcorner.com/UploadFile/58e23e/navigation-from-one-page-to-another-in-angularjs-page-routin/)
- [Single Page Apps with AngularJS Routing and Templating](https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating)

## Tutorial
### [PhoneCat Tutorial App](https://docs.angularjs.org/tutorial/)

### [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

## QA
1. How to apply external CSS to angular project?  

  External css can not be applied in angular project by using `<style type="text/css" src="style.css"></style>`, instead you should use
`<link href="style.css" rel="stylesheet">`.

2. Pagination
- [AngularJS - Pagination Example with Logic like Google](http://jasonwatmore.com/post/2016/01/31/angularjs-pagination-example-with-logic-like-google)
