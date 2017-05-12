# Coursera course [Server-side Development with NodeJS](https://www.coursera.org/learn/server-side-development/home/welcome)
Hong Kong University

## Week 01

### Full Stack Web Development: The Big Picture 
- the big picture (Week01_FSWD-BigPicture.pdf)

- course overview (Week01_CourseOverview.pdf)

- Additional resources
  - [What is a Full Stack developer?](http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)
  - [Wait, Wait… What is a Full-stack Web Developer After All?](http://edward-designer.com/web/full-stack-web-developer/)
  - [The Myth of the Full-stack Developer](http://andyshora.com/full-stack-developers.html)
  - [Multi-tier Architecture](https://en.wikipedia.org/wiki/Multitier_architecture)
  - [What is the 3-Tier Architecture?](http://www.tonymarston.net/php-mysql/3-tier-architecture.html)
  
### Introduction to Node.js and NPM
- What is Node.js
  - Javascript runtime built on Chrome V8 Javascript engine
  - Uses an event-driven, non-bloking I/O model, which makes it lightweight and efficient.
  
- Node Architecture

- Node.js use cases
  - Utilities written in JavaScript for web development (Bower, Grunt, Gulp, Yeoman, etc.)
  - Server-Side Development (Web server, Business logic, Database access)
  
- Node Package Manager (NPM)
  - NPM manages ecosystem of node modules / packages
  - A package contains: JS files and package.json (manifest)
  - Semantic Versioning
    - `<Major Version>.<Minor Version>.<Patch>`
    - npm install can specify the acceptable package version:
      - Exact: `npm install express@4.0.0`
      - Patch acceptable: `npm install express@"~4.0.0"`
      - Minor version acceptable: `npm install express@"^4.0.0"`
  
- Setting up Node.js and npm on your computer  
  - Verifying the Node Installation: `node -v`, `npm -v`
  
- Slides (Week01_1-Nodejs.pdf)

- Additional resources
  - [Nodejs.org](https://nodejs.org/)
  - [Npmjs.com](https://www.npmjs.com/)
  - [Node API Documentation](https://nodejs.org/api/)
  - [NPM Documentation](https://docs.npmjs.com/)

### Node Modules
- Objectives
  - Write simple Node applications and run them using Node
  - Develop Node modules and use them within your Node applications
  - Learn about using callbacks and handling errors within your Node application
  
- Node Modules
  - Each file in Node is its own module
  - The _module_ variable gives access to the current module definition in a file
  - The _module.exports_ variable determines the export from the current module
  - The _require_ function is used to import a module into Node application
  
- Callbacks and Error handling
  - two salient features of JavaScript for supporting callbacks
    - First-class functions : A function can be treated the same way as any other variable
    - Closures: 
      - A function defined inside another function has access to all the variables declared in the outer function (outer scope).
      - The inner function will continue to have access to the variables from the outer scope even after the outer function has returned.

  - Asynchronous programming
  
  - Different kinds of Node Modules and how to use them
    - File-based Modules
      - user defined modules
      - usage:
        - require("./module_name")
        - specify the relative path to the file
        
    - Core Modules
      - Part of core NodeJS
      - Examples: path, fs, os, util,...
      - usage:
        - require("module_name")
          
    - External Node modules
      - Third-party modules
      - Installed using NPM
      - node_modules folder in your Node application
      - usage:
        - require("module_name")
        - Looks for external modules in 
          - ./node_modules, ../node_modules, ../../node_modules,etc
          - Up the folder hierarchy until the module is found      

- Slides
  - Week01_2-Node-Modules.pdf
  - Week01_3-Node-Callbacks-Error-Handling.pdf
  - Week01_4-Node-Modules-Further.pdf
  
- Additional resources
  - [Node Modules](https://nodejs.org/dist/latest-v4.x/docs/api/modules.html)
  - [yargs](https://github.com/yargs/yargs)
  - [CommonJS](http://www.commonjs.org/)
  - [CommonJS Module Format](http://wiki.commonjs.org/wiki/Modules/1.1.1)
  - [RequireJS](http://requirejs.org/)

### Node and HTTP
- Objectives
  - Create a simple HTTP server using the Node HTTP core module
  - Create a web server to serve static HTML files from a folder
  
- The HTTP (Hypertext Transfer Protocol) Protocol
  - A client-server communications protocol
  - Allows retrieving inter-linked text documents(hypertext)
    - world wide web
  - HTTP verbs:
    - HEAD
    - GET
    - POST
    - PUT
    - DELETE
    - TRACE
    - OPTIONS
    - CONNECT
  
  - HTTP request message
    - Request Line
      - Method
      - URL
      - Version (of http protocol)
      - Example:  `GET  /index.html  HTTP/1.1`
    - Headers
      - Header Field Name : Value 
      - Example: 
        ```
        host: localhost:3000
        connection: keep-alive
        user-agent: Mozilla/5.0....
        accept-encoding: gzip, deflate, sdch
        ```
    - Blank Line : divide headers and body
    - Body
      - Body Contents
  
  - HTTP response message
    - Status Line
      - Example: `HTTP/1.1  200  OK`
    
    - Headers
      - Example:
        ```
        Connection: keep-alive
        Content-Type: text/html
        Date: Sun, 21 Feb 2016 06:01:43 GMT
        Transfer-Encoding: chunked
        ```
    
    - Blank Line : used for dividing
    
    - Response Data
      - Example:
        ```
        <html><title>This is index.html</title><body>....</body></html>
        ```

    - HTTP response code (main ones)
    
      Code | Meaning
      ---- | ---------------------------------------
      200 | OK
      201 | Created
      301 | Moved Pernamently
      304 | Not Modified
      400 | Bad Request
      401 | Unauthorized
      403 | Forbidden
      404 | Not Found
      422 | Unprocessable Entry
      500 | Internal server Error
      505 | HTTP Version Not Supported

- **[Node http module](https://nodejs.org/api/http.html)**
  - Core networking module supporting a high-performance foundation for a HTTP stack
  - Using the module:
  
    `var http = require('http');`
    
  - Creating a server:
  
    `var server = http.createServer(function(req, res){...});`
    
    - Incoming request message information available through the first parameter "req" (req.header, req.body,...)
    - Response message is constructed on the second parameter "res"
      - res.setHeader("Content-Type", "text/html");
      - res.statusCode = 200;
      - res.writeHead(200, {"Content-Type": "text/html"});
      - res.write('Hello World!');
      - res.end(`'<html><body><h1>Hello World</h1></body></html>'`);
    
  - Starting the server:
  
    `server.listen(port[,hostname, callback]);`
    
- **[Node path module](https://nodejs.org/api/path.html)**   
  - The path module enables user to specify the paths to various files. 
  - The path module will construct the path based upon the native operating system of the machine on which this code is running, it takes care of "/" or "\" for different OS paths.
  - Using path Module:
    
    `var path = require('path');`
    
  - The path module supports additional methods:
    - `path.resolve('./public'+fileUrl);` , will return the absolute path of file
    - `path.extname(filePath);`  will return the extension for the file that is specified by the file path.
    
- **[Node fs module](https://nodejs.org/api/fs.html)** 
  - filesystem module
  - Usage:
    `var fs = require('fs');`
  - Some methods:
    - `fs.exists(filePath, function(exists){...});` will return true if the specified file exists, and false if not exists, as the param
    for callback function.
    - `fs.createReadStream(filePath).pipe(res);` will create a read stream for the specified file, and pipe to response.

- Example: A Simple Server, return Hello World when get request.
  ```
  var http = require('http');
  var hostname = 'localhost';
  var port = 3000;
  
  var server = http.createServer(function(req, res){
    console.log(req.header);
    
    res.writeHead(200, { 'Content-Type':'text/html' });
    res.end('<h1>Hello World</h1>');
  });
  
  server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}`);
  });
  ```
- Example: html server, return corresponding html file when get 'GET' request.
  ```
  var http = require('http');
  var fs = require('fs');
  var path = require('path');

  var hostname = 'localhost';
  var port = 3000;

  var server = http.createServer(function(req, res){
    console.log('Request for '+req.url+' by method '+req.method);
    if (req.method == 'GET') {
      var fileUrl;
      if (req.url == '/') fileUrl = '/index.html';
      else fileUrl = req.url;

      var filePath = path.resolve('./public' + fileUrl);
      var fileExt = path.extname(filePath);
      if (fileExt == '.html') {
          fs.exists(filePath, function(exists) {
              if (!exists) {
                  res.writeHead(404, {'Content-Type':'text/html'});
                  res.end('<h1>Error 404 : '+fileUrl+' not found</h1>');
                  return;
              }

              res.writeHead(200, {'Content-Type':'text/html'});
              fs.createReadStream(filePath).pipe(res);
          });
      } else {
          res.writeHead(404, {'Content-Type':'text/html'});
          res.end('<h1>Error 404 : '+ fileUrl +' not a HTML file</h1>');
      }
    } else {
      res.writeHead(404, {'Content-Type':'text/html'});
      res.end('<h1>Error 400 : '+ req.method +' not supported</h1>');
    }
  });

  server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}`);
  });  
  ```

- Slides
  - Week01_5-HTTP-Protocol.pdf
  - Week01_6-Node-HTTP.pdf
  
- Additional resources
  - Node
    - [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
    - [Node http module](https://nodejs.org/api/http.html)
    - [Node fs module](https://nodejs.org/dist/latest-v4.x/docs/api/fs.html)
    - [Node path module](https://nodejs.org/dist/latest-v4.x/docs/api/path.html)
  
  - Http
    - [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
    - [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)    

### Introduction to Express
- Objective
  - Implement a web server using the Express framework
  - Develop a web server that supports a REST API
  - Use Express router to implement support for the REST API
  
- Express Introduction  
  - What is Express
    - Express: fast, unopinionated, minimalist web framework for Node.js (from expressjs.com)
    - Web application framework that provides a robust set of features
    - Express has many third-party _**middleware**_ to extend functionality
      - A middleware is added by calling use() on the application and passing the middleware as a parameter.
    - Installing: `npm install express --save`

  - Example: express server-1, use express to build a simple server, when get request, return greeting info.
    ```
    var express = require('express'),
        http    = require('http');

    var hostname = 'localhost';
    var port     = 3000;

    var app = express();
    app.use(function(req, res, next) {
      console.log(req.headers);

      res.writeHead(200, {'Content-Type':'text/html'});
      res.end('<html><body><h1>Welcome to Express Server-1</h1></body></html>');
    });

    var server = http.createServer(app);
    server.listen(port, hostname, function(){
      console.log(`Server running at http://${hostname}:${port}`);
    });  
    ```
  - Example: express server-2, serving static files. use middleware 'morgan' which allows us to log information on the server side.
    ```
    var express = require('express'),
        morgan = require('morgan');

    var hostname = 'localhost';
    var port     = 3000;

    var app = express();

    app.use(morgan('dev'));
    app.use(express.static(__dirname + '/public'));

    app.listen(port, hostname, function(){
      console.log(`Server running at http://${hostname}:${port}`);
    });  
    ```

    In browser, do 'http://localhost:3000/index.html' will show the index.html; do 'http://localhost:3000/aboutus.html' will show aboutus.html. If do 'http://localhost:3000/home.html' will return 404 error. And this server only support 'GET' method.

- REST (REpresentational State Transfer)
  - REST is a style of software architechture for distributed hypermedia systems such as the World Wide Web.
  - Introduced in the doctoral dissertation of Roy Fielding, one of the principle authors of the HTTP specification.
  - A collection of network architecture principles which outline how resources are defined and addressed.
  - Four basic design principles:
    - Use HTTP methods explicitly
    - Be stateless : server-side should not track the client state
    - Expose directory structure-like URIs
    - Transfer information using XML, JSON or both
  - REST and HTTP
    - The motivation for REST are to capture the characteristics of the Web that made the web successful
      - URI(Uniform Resource Indicator) Addressable resources
      - HTTP Protocol
      - Make a Request - Receive Response - Display Response
    - Exploits the use of the HTTP protocol beyond HTTP POST and HTTP GET
      - HTTP PUT, HTTP DELETE
      - Preserve Idempotence
      
  - REST concepts: 
    - resources
    - verbs (actions, CRUD Create/Read/Update/Delete --> HTTP POST/GET/PUT/DELETE)
    - representation
    
  - Example : Setting up a REST API
    ```
    var express = require('express');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');

    var hostname = 'localhost';
    var port = 3000;

    var app = express();

    app.use(morgan('dev'));
    app.use(bodyParser.json());

    app.all('/dishes', function(req,res,next) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          next();
    });

    app.get('/dishes', function(req,res,next){
            res.end('Will send all the dishes to you!');
    });

    app.post('/dishes', function(req, res, next){
         res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    });

    app.delete('/dishes', function(req, res, next){
            res.end('Deleting all dishes');
    });

    app.get('/dishes/:dishId', function(req,res,next){
            res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    });

    app.put('/dishes/:dishId', function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + 
                ' with details: ' + req.body.description);
    });

    app.delete('/dishes/:dishId', function(req, res, next){
            res.end('Deleting dish: ' + req.params.dishId);
    });

    app.use(express.static(__dirname + '/public'));

    app.listen(port, hostname, function(){
      console.log(`Server running at http://${hostname}:${port}/`);
    });    
    ```
    
- Express Application Routes
  - routing

    `app.methodName(path, function(req, res, next){...});`

    - app.all
    - app.get
    - app.post
    - app.put,
    - app.delete
  
  - [Body Parser](https://github.com/expressjs/body-parser)
    - Middleware to parse the body of the message
    - Using body parser:
      ```
      var bodyParser = require('body-parser');
      app.use(bodyParser.json());   // parse the JSON in the body
      ```
    - Parses the body of the message and populates the *req.body* property
    
  - Express Router
    - Express router creates a mini-express application:
      ```
      var dishRouter = express.Router();
      dishRouter.use(bodyParser.json());
      
      dishRouter.route('/')
        .all(...);
        .get(...);
        ...
      ```
    - why use this way?
    
  - Example : REST API Using Express Router    
    ```
    var express = require('express');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');

    var hostname = 'localhost';
    var port = 3000;

    var app = express();

    app.use(morgan('dev'));

    var dishRouter = express.Router();

    dishRouter.use(bodyParser.json());

    dishRouter.route('/')
    .all(function(req,res,next) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          next();
    })

    .get(function(req,res,next){
            res.end('Will send all the dishes to you!');
    })

    .post(function(req, res, next){
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);    
    })

    .delete(function(req, res, next){
            res.end('Deleting all dishes');
    });

    dishRouter.route('/:dishId')
    .all(function(req,res,next) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          next();
    })

    .get(function(req,res,next){
            res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    })

    .put(function(req, res, next){
            res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name + 
                ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
            res.end('Deleting dish: ' + req.params.dishId);
    });

    app.use('/dishes',dishRouter);

    app.use(express.static(__dirname + '/public'));

    app.listen(port, hostname, function(){
      console.log(`Server running at http://${hostname}:${port}/`);
    });    
    ```
  
### Articles
- [Understanding Express.js](http://evanhahn.com/understanding-express/)
- [Express APIs](http://expressjs.com/en/4x/api.html)

## Week 02
### Express Generator
- What is express generator
  - Quick scaffolding tool to generate an Express application skeleton
  - Installing Express generator: `npm install express-generator -g`
  
- How to use express generator  

  - `express <App Name>`
  
    It will automatically generate a folder with `<App Name>`, and inside the folder will be a bunch of files that are already scafolded out for you. And it'll be a rudimentary express application.
  
    Another approach would be to first create a folder and then thereafter move into that folder and simply type `express`, and the application will be generated within that folder. 

    Express takes several command line options which you can easily read up in Express Generator documentation.
  
  - move into the `<App Name>` folder, then type `npm install`

    This will enable all the node modules on which your Express application is dependent to be installed locally within the application folder.

### Intro to MongoDB

### Node and MongoDB

### Mongoose ODM
