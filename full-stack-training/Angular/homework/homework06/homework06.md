# Question description
Start with a good example at W3Schooles.com:

http://www.w3schools.com/angular/tryit.asp?filename=try_ng_w3css

It shows a list of users (which is in a JS array) and allows NEW / EDIT on a selected user.

This homework is to enhance this app in the following way:  
1. Add a few new fields such as Title, Sex, Age. It should be to all aspects, including list, new, and
edit;  
2. Implement filtering / searching and sorting to the User list.  
3. Implement 'Delete User' - add a new column in the User list. In this column, each rows shows a 'delete' icon. By clicking it, the selected user will be deleted from the list (and the JS array).  
4. Implement paging / pagination by having 'Prev Page' and 'Next Page'. (the size of each page is pre-defined, such as 20).

Note: You should create your own code files for this.

# AngularJS
- [select](https://docs.angularjs.org/api/ng/directive/select)
  - [ngOptions](https://docs.angularjs.org/api/ng/directive/ngOptions)
  
- [Filters](https://docs.angularjs.org/guide/filter)  
  - [orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

# References
- [Search Sort and Pagination in ng-repeat – AngularJS](https://ciphertrick.com/2015/06/01/search-sort-and-pagination-ngrepeat-angularjs/)

  Use library [dirPagination.js](https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination)
  
- [AngularJS - Pagination Example with Logic like Google](http://jasonwatmore.com/post/2016/01/31/angularjs-pagination-example-with-logic-like-google)


# How to run on computer
If double click "homework_6.html" on computer locally, COR will occur. Use _http-server_ to avoid it.
1. In command line, change working path under the folder where "homework_6.html" exists.  
2. run `http-server`  
3. In browser, type `http://localhost:8080/homework_6.html`  
