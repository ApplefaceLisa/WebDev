# jQuery class final project

## References
### Single Page App
- [Ajax: Create a Single Page App with jQuery](https://ilovecoding.org/lessons/ajax-create-a-single-page-app-with-jquery)

- [Code a Simple Github API Webapp using jQuery & Ajax](http://blog.teamtreehouse.com/code-a-simple-github-api-webapp-using-jquery-ajax)

- [Making a Single Page App Without a Framework](http://tutorialzine.com/2015/02/single-page-app-without-a-framework/)

  Using jQuery and handlebar
  
- [Single Page Application Micro Framework](https://github.com/c-smile/spapp)  
  
- Book: [Single page apps in depth](http://singlepageappbook.com/single-page.html)
  - [github](https://github.com/mixu/singlepageappbook) 

- Video: [Build a Single Page Application with jQuery & AJAX](https://www.youtube.com/watch?v=NdJhKcm8JHY)
  - [Code](https://github.com/nax3t/ajax-jquery-tutorial)

### jQuery Templates
- [jQuery: Creating templates for your HTML Content](http://www.webistrate.com/jquery-creating-templates-for-your-html-content/)
  - [jquery-tmpl code](https://github.com/BorisMoore/jquery-tmpl)
  
- jsRender, jsViews
  - [Difference between jsRender and jsViews](https://stackoverflow.com/questions/9965571/difference-between-jsrender-and-jsviews)
  
    In short, 
    - [JsRender](https://github.com/borismoore/jsrender) helps you render HTML using a template (static HTML/CSS with embedded tokens that get replaced with data). It supports simple logic, rendering values, and custom functions.

    - [JsViews](https://github.com/BorisMoore/jsviews), which is built on top of JsRender, adds observability to objects/properties. This allows you to link your json objects to HTML targets and get 2 way data binding.

  - [try them online](https://www.jsviews.com/)

  - jsRender tutorials
    - [Quick JsRender Tutorial](http://blog.teamextension.com/quick-jsrender-tutorial-1043)
    - [Display JSON Data Using the JsRender Template Engine](http://www.htmlgoodies.com/beyond/javascript/display-json-data-using-the-jsrender-template-engine.html)
    - [Client Side Templating with JsRender](http://www.dotnetcurry.com/javascript/840/client-side-template-jsrender)

### jQuery form validation
- **[HTML5 Form Validation - Showing All Error Messages](https://www.tjvantoll.com/2012/08/05/html5-form-validation-showing-all-error-messages/)**
- [Basic jQuery Form Validation Example](https://www.sitepoint.com/basic-jquery-form-validation-tutorial/)

### event binding
- [Event binding on dynamically created elements?](https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements)

  Use `$(static_parent_selector).on(event, dynamic_added_element, function(){})` instead of `$(dynamic_added_element).on(event, function(){})`

### jQuery Datepicker
- [jQuery DatePicker: Start Date should be less than End date validation](https://www.aspsnippets.com/Articles/jQuery-DatePicker-Start-Date-should-be-less-than-End-date-validation.aspx)
