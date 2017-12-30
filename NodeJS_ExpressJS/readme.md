# NodeJS and ExpressJS
### favicon
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

# NodeJS mysql
1. Install "mysql" module  
```
npm install mysql
```

2. Create connection to the database  
```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: <host_name>,
  user: <user_name>,
  password: <password>,
  database: <database_name>
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```
