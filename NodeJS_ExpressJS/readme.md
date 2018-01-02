# NodeJS and ExpressJS
## [MDN : Express tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

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


