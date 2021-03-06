# NodeJS and ExpressJS
## NodeJS
1. fs : file system module  
`var fs = require('fs');`
- read file
  - async : `fs.readFile(filename, [encoding], [callback])`, e.g.
  
  ```
  fs.readFile('/etc/passwd', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  ```
  - sync : `fs.readFileSync(filename, [encoding])`
  
  ```
  var text = fs.readFileSync('test.md','utf8')
  console.log (text)
  ```
- [Read Files with Node.js](http://stackabuse.com/read-files-with-node-js/)  
  
## [MDN : Express tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
1. [Express Routing](http://expressjs.com/en/guide/routing.html)


## favicon
[serve-favicon](https://github.com/expressjs/serve-favicon)
- `$ npm install serve-favicon`
- use with express
  ```
  var express = require('express')
  var favicon = require('serve-favicon')
  var path = require('path')

  var app = express()
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

  // Add your routes here, etc.

  app.listen(3000)
  ```
- use with connect
  ```
  var connect = require('connect')
  var favicon = require('serve-favicon')
  var path = require('path')

  var app = connect()
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

  // Add your middleware here, etc.

  app.listen(3000)
  ```


