# setup enviroment
- brower
- code editor, e.g. sublime
- git  (check existence: command line> git --version)
  - ```git config --global user.email "<email_address>"```
  - ```git config --global user.name "<user_name>"```
  - clone github repo to local
    - ```git clone <repo url>```
  - commit local repo to github:
    - ```git status```
    - ```git add .```
    - ```git commit .m "<message...>"```
    - ```git push```
  
- node.js  (check existence: command line> node --version)
- browser-sync  (check existence: command line> browser-sync --version)
  - ```cmd_line > browser-sync start --server -- directory --files "**/*" ```
- github account

# Basic
- high cohesion, loose coupling
  - high cohesion : when smaller pieces of functionality are strongly related to each other within some code boundary. How well does that one thing stick to doing just one thing.
  
  - loose coupling : least possible dependency of one component on another component. If you change one, you do not have to change the other.
    

- MVVM : Model, View, Viewmodel
  - Model: it represents and holds **raw** data.  
    - Some of this data, in some form, may be displayed in the view.
    - Can also contain logic to retrieve the data from some source.
    - Contains **no logic** associated with displaying the model.
    
  - View: user interface that never changes data, declares events  
    - In a web app, it's just the HTML and CSS.
    - Only displays the data that it is given.
    - **Never** changes the data.
    - Declaratively broadcasts events, but **never** handles them.
    
  - View Model: representation of the state of the view.  
    - Holds the data that's displayed in the view.
    - Responds to view events, aka presentation logic.
    - Calls other functionality for business logic processing.
    - **Never** directly asks the view to display anything.
    
  - Declarative Binder : declaratively binds the model of the ViewModel to the View.    
    - _Declaratively_ means you don't have to write any code, the framework does this "magic"
    - Key enabler of the whole MVVM pattern.
    
  Angular is **not** restricted to MVVM.
  In AngularJs, Controller serves the function of ViewModel. (Controller is ViewModel)

- Dependency injection(DI)
  - Design pattern that _implements inversion of control_(IoC) for resolving dependencies.
  - Client gets called with the dependency by some system(e.g. AngularJS)
  - Client is not responsible for instantiating the dependency
  - **Protecting Dependency Injection from Minification**  (week1 Lecture10), two methods:
    
    Original code:
    ```
      (function () {
        'use strict';
        angular.module('DIApp', [])
        .controller('DIController', DIController);
        
        function DIController($scope, $filter) {
          $scope.name = "Yaakov";
          
          $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
          };
        }
      })();
    ```    
    
    - Inline array with function as last element
    ```
      (function () {
        'use strict';
        angular.module('DIApp', [])
        .controller('DIController', ['$scope', '$filter', function($scope, $filter) {
          $scope.name = "Yaakov";
          
          $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
          };
        }]);
      })();
      
      or
      (function () {
        'use strict';
        angular.module('DIApp', [])
        .controller('DIController', ['$scope', '$filter', DIController]);
       
        function DIController($scope, $filter) {
          $scope.name = "Yaakov";
          
          $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
          };
        }
      })();      
    ```
    - Attach $inject property to the function object
    ```
      (function () {
        'use strict';
        angular.module('DIApp', [])
        .controller('DIController', DIController);
        
        DIController.$inject = ['$scope', '$filter'];
        
        function DIController($scope, $filter) {
          $scope.name = "Yaakov";
          
          $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
          };
        }
      })();
    ```
