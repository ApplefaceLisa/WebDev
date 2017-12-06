- [Angular MVC Architecture](https://www.tutorialspoint.com/angularjs/angularjs_mvc_architecture.htm)

# Guide
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

## Tutorial
### [PhoneCat Tutorial App](https://docs.angularjs.org/tutorial/)
