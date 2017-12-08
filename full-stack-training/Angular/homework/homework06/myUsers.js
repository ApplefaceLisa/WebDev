var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

myApp.filter("search", function() {
  var i = 0;
  return function(input, searchby, key) {
    if (!searchby)  return input;
    var res = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i][searchby].toLowerCase().startsWith(key.toLowerCase()))
        res.push(input[i]);
    }
    return res;
  }
});

myApp.controller('userCtrl', function($scope, searchFilter) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.passw1 = '';
  $scope.passw2 = '';
  $scope.users = [
    {id:1, fName:'Hege',  lName:"Pege", title:"Software Engineer", sex:"male", age:22},
    {id:2, fName:'Kim',   lName:"Pim", title:"Principle", sex:"female", age:45},
    {id:3, fName:'Sal',   lName:"Smith", title:"Project Manager", sex:"male", age:35 },
    {id:4, fName:'Jack',  lName:"Jones", title:"Senior Engineer", sex:"male", age:32 },
    {id:5, fName:'John',  lName:"Doe", title:"ME", sex:"male", age:30 },
    {id:6, fName:'Peter', lName:"Pan", title:"blacksmith", sex:"male", age:19 },
    {id:7, fName:'Hege',  lName:"Pege", title:"Software Engineer", sex:"male", age:22},
    {id:8, fName:'Kim',   lName:"Pim", title:"Principle", sex:"female", age:45},
    {id:9, fName:'Sal',   lName:"Smith", title:"Project Manager", sex:"male", age:35 },
    {id:10, fName:'Jack',  lName:"Jones", title:"Senior Engineer", sex:"male", age:32 },
    {id:11, fName:'John',  lName:"Doe", title:"ME", sex:"male", age:30 },
    {id:12, fName:'Peter', lName:"Pan", title:"blacksmith", sex:"male", age:19 },
    {id:13, fName:'Hege',  lName:"Pege", title:"Software Engineer", sex:"male", age:22},
    {id:14, fName:'Kim',   lName:"Pim", title:"Principle", sex:"female", age:45},
    {id:15, fName:'Sal',   lName:"Smith", title:"Project Manager", sex:"male", age:35 },
    {id:16, fName:'Jack',  lName:"Jones", title:"Senior Engineer", sex:"male", age:32 },
    {id:17, fName:'John',  lName:"Doe", title:"ME", sex:"male", age:30 },
    {id:18, fName:'Peter', lName:"Pan", title:"blacksmith", sex:"male", age:19 }
  ];

  $scope.edit = true;
  $scope.error = false;
  $scope.incomplete = false;
  $scope.hideform = true;
  $scope.userId = "";
  $scope.searchKey = '';

  $scope.editUser = function(id) {
    if (id == 'new') {
      $scope.edit = true;
      $scope.incomplete = true;
      $scope.fName = '';
      $scope.lName = '';
      $scope.title = '';
      $scope.sex = '';
      $scope.age = '';
      $scope.passw1 = '';
      $scope.passw2 = '';
    } else {
      $scope.edit = false;
      $scope.fName = $scope.users[id-1].fName;
      $scope.lName = $scope.users[id-1].lName;
      $scope.title = $scope.users[id-1].title;
      $scope.sex = $scope.users[id-1].sex;
      $scope.age = $scope.users[id-1].age;
      $scope.passw1 = '';
      $scope.passw2 = '';
    }
    $scope.hideform = false;
    $scope.userId = id;
  };

  $scope.hideForm = function() {
    $scope.hideform = true;
  }

  var user = function(id, fName, lName, title, sex, age) {
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.title = title;
    this.sex = sex;
    this.age = age;
  }

  $scope.saveChanges = function(id) {
    if (id === "new") {
      id = $scope.users.length + 1;
      $scope.users.push(new user(id, $scope.fName, $scope.lName,
        $scope.title, $scope.sex, $scope.age));
      $scope.totalUsers = $scope.users.length;
    } else {
      $scope.users[id-1].fName = $scope.fName;
      $scope.users[id-1].lName = $scope.lName;
      $scope.users[id-1].title = $scope.title;
      $scope.users[id-1].sex = $scope.sex;
      $scope.users[id-1].age = $scope.age;
    }
    // close form
    $scope.hideform = true;
  }

  $scope.deleteUser = function(id) {
    $scope.users.splice(id-1, 1);
    // keep id related to index
    for (var i = id-1; i < $scope.users.length; i++) {
      $scope.users[i].id--;
    }
    $scope.totalUsers = $scope.users.length;
  }

  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
    } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit &&
      (!$scope.fName.length || !$scope.lName.length ||
       !$scope.passw1.length || !$scope.passw2.length)) {
         $scope.incomplete = true;
    }
  };

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
});