1. type ahead
- [Creating a Typeahead Widget with AngularJS](https://www.sitepoint.com/creating-a-typeahead-widget-with-angularjs/)
- [searchable drop down in AngularJs](https://stackoverflow.com/questions/39524657/searchable-drop-down-in-angularjs)

2. Promise
- [AngularJS $q](https://docs.angularjs.org/api/ng/service/$q)
- [All about $q and Promises in Angular](https://toddmotto.com/promises-angular-q)
- [Doing more than one thing at a time](https://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/)

3. Base64 image
- [Base64 encoding images](https://varvy.com/pagespeed/base64-images.html)
- [Base64!! What? How? Where? and Why? to use](http://resource-guru.com/html-css/web-design-code-snippepts/base64-what-how-where-and-why-use/)

4. clear button inside input field
- [Creating an AngularJS reset field directive](http://softwareninjaneer.com/blog/creating-an-angularjs-reset-field-directive/)
  - Code: [GitHub repo](https://github.com/amageed/angular-resetfield)
  - Demo: [JSBin demo](http://jsbin.com/OgogiwEV/22/edit?html,css,js,output)
- directive [angular-clear-button](http://ngmodules.org/modules/angular-clear-button)  
- [Clear / reset “x” button inside input-field](http://www.milosev.com/88-css/396-clear-reset-x-button-inside-input-field.html)

5. Datepicker
- [Angular Datetime Picker](https://dalelotts.github.io/angular-bootstrap-datetimepicker/)

6. AngularJS select-option ng-model binding
- [Can't set selected value of ng-options](https://stackoverflow.com/questions/27514267/cant-set-selected-value-of-ng-options)
  
  Two ways to bind object data.
  - use `track by` syntax with ng-options to specify track by id, which will enable ng-option's options to be tracked by the specified property of the bound object rather than the object reference itself.
  - use select `as` to set the ng-model to specify only the id.
  
  Working examples :
  ```
  // JavaScript
   angular.module('app', []).controller('ctrl', function($scope){
      $scope.thisTour = {};
      $scope.siteList = [
          { id: 1, name: 'cycling'},
          { id: 2, name: 'walking'},
          { id: 3, name: 'holidays'}
      ];

      $scope.thisTour.site = { id: 2, name: 'walking'};  // html way 1, `track by`
      $scope.thisTour.site = 2;  // html way 2, select `as`
  })
  
  // html way 1: 
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>
  <div ng-app="app" ng-controller="ctrl">
    <select ng-model="thisTour.site" ng-options="site.name for site in siteList track by site.id"></select>
    {{thisTour.site}}
  </div>
  
  // html way 2:
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>
  <div ng-app="app" ng-controller="ctrl">
    <select ng-model="thisTour.site" ng-options="site.id as site.name for site in siteList"></select>
    {{thisTour.site}}
  </div>  
  ```
7. [directive data binding](https://stackoverflow.com/questions/14115701/angularjs-create-a-directive-that-uses-ng-model?rq=1)
```
// JS
var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.model = { name: 'World' };
  $scope.name = "Felipe";
});

app.directive('myDirective', function($compile) {
  return {
    restrict: 'AE', //attribute or element
    scope: {
      myDirectiveVar: '=',
     //bindAttr: '='
    },
    template: '<div class="some">' +
      '<input ng-model="myDirectiveVar"></div>',
    replace: true,
    //require: 'ngModel',
    link: function($scope, elem, attr, ctrl) {
      console.debug($scope);
      //var textField = $('input', elem).attr('ng-model', 'myDirectiveVar');
      // $compile(textField)($scope.$parent);
    }
  };
});

// html
<body ng-controller="MainCtrl">
  This scope value <input ng-model="name">
  <my-directive my-directive-var="name"></my-directive>
</body>
```
