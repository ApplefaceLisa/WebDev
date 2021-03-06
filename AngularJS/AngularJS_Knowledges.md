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
Data binding in AngularJS is the synchronization between the model and the view.
- one-way data binding : `ng-bind` or `{{value}}`, synchronizes the model to the view.
- two-way data binding : `ng-model`, synchronizes the model to the view, as well as view to the model.

Angular [digest cycle](https://www.thinkful.com/projects/understanding-the-digest-cycle-528/) is the process behind Angular data binding.
- [Understand digest cycle in depth](https://www.youtube.com/watch?v=SYuc1oSjhgY)

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

  $compile can match directives based on _element names (E), attributes (A), class names (C), and comments (M)_.
  ```
  <my-dir></my-dir>                     // E : Element (or tag)
  <span my-dir="exp"></span>            // A : Attribute
  <!-- directive: my-dir exp -->        // M : coMments
  <span class="my-dir: exp;"></span>    // C : Class
  ```
  
  A directive can specify which of the 4 matching types it supports in the _**restrict**_ _property_ of the directive definition object. The default is `EA`.
  
  BEST PRACTICE : prefer using directives via _**tag name**_ and _**attributes**_.
  
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

  Directives that want to modify the DOM typically use the `link` option to register DOM listeners as well as update the DOM. It is executed after the template has been cloned and is where directive logic will be put.

  `link` takes a function with the following signature, `function link(scope, element, attrs, controller, transcludeFn) { ... }`, where:

  - `scope` is an AngularJS scope object.
  - `element` is the jqLite-wrapped element that this directive matches.
  - `attrs` is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
  - `controller` is the directive's required controller instance(s) or its own controller (if any). The exact value depends on the directive's require property.
  - `transcludeFn` is a transclude linking function pre-bound to the correct transclusion scope.
  
  Example code :
  ```
  //------------ html ------------
  <div ng-controller="Controller">
    Date format: <input ng-model="format"> <hr/>
    Current time is: <span my-current-time="format"></span>
  </div>
  
  //------------ js ------------
  angular.module('docsTimeDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.format = 'M/d/yy h:mm:ss a';
  }])
  .directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
    function link(scope, element, attrs) {
      var format,
          timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
      });

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }

    return {
      link: link
    };
  }]);  
  ```

- Creating a Directive that Wraps Other Elements
- Creating a Directive that Adds Event Listeners
  
#### Directive isolated scope shorthand syntax `=, @, &` : [What is the difference between & vs @ and = in angularJS](https://stackoverflow.com/questions/14908133/what-is-the-difference-between-vs-and-in-angularjs)
  - `@` allows a value defined on the directive attribute to be passed to the directive's isolate scope. The value could be a simple string value (myattr="hello") or it could be an AngularJS interpolated string with embedded expressions (myattr="my_{{helloText}}"). Think of it as "one-way" communication from the parent scope into the child directive. _**parent to child data-binding**_
  
  - `&` allows the directive's isolate scope to pass values into the parent scope for evaluation in the expression defined in the attribute. Note that the directive attribute is implicitly an expression and does not use double curly brace expression syntax. _**child to parent data-binding**_
  
  - `=` sets up a two-way binding expression between the directive's isolate scope and the parent scope. Changes in the child scope are propagated to the parent and vice-versa. Think of = as a combination of @ and &. _**two-way data-binding between parent and child**_

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
#### [AngularJS: Factory vs Service vs Provider](https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/)
Angular provides us with three ways to create and register our own service: factory, service and provider.
1. Factory  
  Factories are the most popular way to create and configure a service. When you’re using a `factory` you create an object, add properties to it, then return that same object. When you pass this service into your controller, those properties on the object will now be available in that controller through your factory.  
  You can have `private` variables and functions inside factory, for any variables and functions you want them be accessed in controller, put them in the returned object. Example:
  ```
    app.factory('myFactory', function ($http, $q) {
      /* private variables only used inside factory */
      var baseUrl = 'https://itunes.apple.com/search?term='
      var _artist = '';
      var _finalUrl = '';

      /* private function */
      var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
      }

      /* service to be used in controller */
      var service = {};
      service.setArtist = function (artist) {
        _artist = artist;
      }

      service.getArtist = function () {
        return _artist;
      }

      service.callItunes = function () {
        makeUrl()
        var deferred = $q.defer();
        $http({
          method: 'JSONP',
          url: _finalUrl
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject('There was an error');
        })

        return deferred.promise;
      }

      return service;
    });

    // use service in controller
    app.controller('myFactoryCtrl', function ($scope, myFactory) {    // inject myFactory into controller
      $scope.data = {};
      $scope.updateArtist = function () {
        myFactory.setArtist($scope.data.artist);
      }

      $scope.submitArtist = function () {
        myFactory.callItunes()
          .then(function (data) {
            $scope.data.artistData = data;
          }, function (data) {
            alert(data);
          })
      }
    })  
  ```
  
2. Service  
  _**Service is instantiated with the `new` keyword**_. Because of that, you’ll add properties to _**`this`**_ and the service will return `this`. When you pass the service into your controller, those properties on `this` will now be available on that controller through your service.  
  You can have private variables and helper functions used only inside service.  
  For any varaibles and functions you want to use in controller, attach them to `this`.  
  Example:  
  ```
    app.service('myService', function ($http, $q) {
      /* private variables and function */
      var baseUrl = 'https://itunes.apple.com/search?term=';
      var _artist = '';
      var _finalUrl = '';

      var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
      }
      
      /* functions available for controllers */
      this.setArtist = function (artist) {
        _artist = artist;
      }

      this.getArtist = function () {
        return _artist;
      }

      this.callItunes = function () {
        makeUrl()
        var deferred = $q.defer();
        $http({
          method: 'JSONP',
          url: _finalUrl
        }).success(function (data) {
          deferred.resolve(data);
        }).error(function () {
          deferred.reject('There was an error');
        })

        return deferred.promise;
      }
    });  
    
    // use service in controller, exactly same as factory
    app.controller('myService', function ($scope, myService) {
      $scope.data = {};
      $scope.updateArtist = function () {
        myService.setArtist($scope.data.artist);
      }

      $scope.submitArtist = function () {
        myService.callItunes()
          .then(function (data) {
            $scope.data.artistData = data;
          }, function (data) {
            alert(data);
          })
      }
    });
  ```
  
3. Provider  
  Providers are the _**only**_ service you can pass into your _**`.config()`**_ function. Use a provider when you want to provide module-wide configuration for your service object before making it available.  
  For private variables and helper functions, just declare and use them inside provider;  
  For the variables/functions that will be available in your app.config function, attach them to `this`;  
  For the variables/functions that will be available in your controller, attach them to `this.$get()`. `$get` function returns all the methods/properties we want to be available in the controller.  
  Example:
  ```
    app.provider('myProvider', function ($http, $q) {
      /* private variables and function */
      var baseUrl = 'https://itunes.apple.com/search?term=';
      var _artist = '';
      var _finalUrl = '';

      var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK';
        return _finalUrl;
      }

      /* variable which will go into app.config() */
      this.thingFromConfig = '';

      /* varaible / functions which is available for controllers */
      this.$get = function ($http, $q) {
        return {
          callItunes: function () {
            makeUrl()
            var deferred = $q.defer();
            $http({
              method: 'JSONP',
              url: _finalUrl
            }).success(function (data) {
              deferred.resolve(data);
            }).error(function () {
              deferred.reject('There was an error');
            })

            return deferred.promise;
          },
          setArtist: function (artist) {
            _artist = artist;
          },
          getArtist = function () {
            return _artist;
          },
          thingonConfig: this.thingFomConfig
        }
      }
    });  
    
    // use in controller
    app.controller('myProviderCtrl', function ($scope, myProvider) {
      $scope.data = {};
      $scope.updateArtist = function () {
        myProvider.setArtist($scope.data.artist);
      }

      $scope.submitArtist = function () {
        myProvider.callItunes()
          .then(function (data) {
            $scope.data.artistData = data;
          }, function (data) {
            alert(data);
          })
      }

      $scope.data.thingFromConfig = myProvider.thingOnConfig;
    });    
  ```

### [Component Router](https://docs.angularjs.org/guide/component-router)
- w3school [AngularJS Routing](https://www.w3schools.com/angular/angular_routing.asp)
- [AngularJS Routing](http://www.tutorialsteacher.com/angularjs/angularjs-routing)
- [Navigation From One Page to Another In AngularJS Page Routing](http://www.c-sharpcorner.com/UploadFile/58e23e/navigation-from-one-page-to-another-in-angularjs-page-routin/)
- [Single Page Apps with AngularJS Routing and Templating](https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating)

### [AngularJS $q API](https://docs.angularjs.org/api/ng/service/$q)

### [AngularJS deep copy](https://docs.angularjs.org/api/ng/function/angular.copy)
Angular.copy()

## Tutorial
### [PhoneCat Tutorial App](https://docs.angularjs.org/tutorial/)

### [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

## Articles
- [All about $q and Promises in Angular](https://toddmotto.com/promises-angular-q)

  This article dives into ES2015 Promise API and how it maps across to $q for AngularJS. 
  
- [Using and chaining promises in AngularJS](https://www.airpair.com/angularjs/posts/angularjs-promises)  
  - The `then` and `finally` functions each return a _**new promise**_, known as a derived promise.
  ```
    var promiseA = $http.get('/my-url');
    var promiseB = promiseA.then(function(result) {
      // Do something with the results of the GET request
    });
    promiseB.then(function(result) {
      // Do something with the resolved result of promiseB
    })  
  ```
  - Derived promises are resolved/rejected with the returned resolved/rejected value of the callback that was run.
    - Resolving a derived promise immediately
    ```
      $http.get('/my-url').then(function(result) {
        return 'my-immediate-value';
      }).then(function(results) {
        // results === 'my-immediate-value';
      })  

      $http.get('/my-url-that-does-not-exist').then(function(results) {
      }, function(error) {
        return 'my-immediate-value';
      }).then(function(results) {
        // results === 'my-immediate-value'
      })    
    ```
    - Rejecting a derived promise immediately, by returning the result of `$q.reject()`.
    ```
      $http.get('/my-url').then(function(result) {
        return $q.reject('my-failure-reason');
      }).then(function(results) {
        // The code never gets here
      }, function(error) {
        // error === 'my-failure-reason'
      });    
      --------------- OR -----------------------------------------------------
      $http.get('/my-url-that does not exist').then(function(results) {
        // The code never gets here if the GET was unsuccessfull
      }, function(error) {
         return $q.reject('my-failure-reason');
      }.then(function() {
        // The code never gets here if the GET was unsuccessfull
      }, function(error) {
        // error === 'my-failure-reason'
      });      
    ```
    - Deferring a derived promise
    
      A powerful aspect of derived promises is that their resolution/rejection can be deferred until another promise has been resolved/rejected. This is done by returning a promise from the success or error callback. 
    ```
      $http.get('/my-first-url').then(function(results) {
        return $http.get('/my-second-url')
      }).then(function(results) {
        // results here are the results of the GET to /my-second-url 
      });    
    ```
  - Layered APIs
  
    A common use of promises is chaining them via layered APIs. A typical pattern in AngularJS is to have calls to $http functions in a service, so controllers are not aware that $http is used. `MyController -> MyService -> $http`
    
  ```
    // In MyService
    this.fetchResults = function() {
      return $http.get('/my-url').then(function(results) {
        // Just return the http body
        return results.data;
    ), function(error) {
      return $q.reject('Oh no!');
    });

    // In MyController
    $scope.fetchResults = function() {
      MyService.fetchResults().then(function(results) {
        // Do something with results
      }, function(error) {
        // Do something with error if it occurs
        // which would be 'Oh no!'
      });
    }   
  ```  
  
- [$q.defer: You're doing it wrong](http://www.codelord.net/2015/09/24/%24q-dot-defer-youre-doing-it-wrong/)
- [Recipes with Angular.js](http://fdietz.github.io/recipes-with-angular-js/index.html)
- Upload File
  - [AngularJS File Upload using $http post and FormData](http://www.encodedna.com/angularjs/tutorial/angularjs-file-upload-using-http-post-formdata-webapi.htm)
  - [10 Most Viewed AngularJS Articles on encodedna.com in 2017](http://www.encodedna.com/angularjs/tutorial/10-most-viewed-angularjs-articles-on-my-blog-in-2017.htm)
  - [ANGULARJS FILE UPLOAD EXAMPLE & TUTORIAL](http://www.folio3.com/blog/angularjs-file-upload-example-tutorial/)
    - [Demos](http://nervgh.github.io/pages/angular-file-upload/examples/simple/)
    - [Github](https://github.com/nervgh/angular-file-upload)
  - [Simple file upload example using AngularJS](http://angularcode.com/simple-file-upload-example-using-angularjs/) 
    - [Working Code](https://github.com/ApplefaceLisa/WebDev/tree/master/AngularJS/SnipCode/Angular-Upload-File)


## References
- [A list of awesome AngularJs services, directives, utilities and resources](https://github.com/gianarb/awesome-angularjs)

## QA
1. How to apply external CSS to angular project?  

  External css can not be applied in angular project by using `<style type="text/css" src="style.css"></style>`, instead you should use
`<link href="style.css" rel="stylesheet">`.

2. Pagination
- [AngularJS - Pagination Example with Logic like Google](http://jasonwatmore.com/post/2016/01/31/angularjs-pagination-example-with-logic-like-google)
- [dir-pagination library](https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination)
	- [Search Sort and Pagination in ng-repeat – AngularJS](https://ciphertrick.com/2015/06/01/search-sort-and-pagination-ngrepeat-angularjs/)
	- [Server Side Pagination in AngularJS](https://ciphertrick.com/2015/08/31/server-side-pagination-in-angularjs/)

3. [Submit form on pressing Enter with AngularJS](https://stackoverflow.com/questions/15417125/submit-form-on-pressing-enter-with-angularjs)
```
<form ng-submit="myFunc()" ng-controller="mycontroller">
   <input type="text" ng-model="name" />
    <br />
    <input type="text" ng-model="email" />
</form>

<input ng-keyup="$event.keyCode == 13 && myFunc()"... />
```

4. [Using MySQL LIKE Operator To Select Data Based On Patterns](http://www.mysqltutorial.org/mysql-like/)
5. [AngularJS Dropdown Multiselect Example](http://dotansimha.github.io/angularjs-dropdown-multiselect/docs/#/main)
