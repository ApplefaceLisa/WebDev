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
  
    `server.listen(port[,...]);`
    
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



### Introduction to Express


## Week 02
