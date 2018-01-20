# socket.io

- [Official website](https://socket.io/)

## How to use with Express
- Install
```
$ npm install socket.io
```

- Use with Express 3/4
  - Server (app.js)
  ```
  var app = require('express')();
  var server = require('http').Server(app);
  var io = require('socket.io')(server);

  server.listen(80);

  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
  ```
  - Client (index.html)
  ```
  <script src="/socket.io/socket.io.js"></script>
  <script>
    var socket = io.connect('http://localhost');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  </script>  
  ```
  
- Restricting yourself to a namespace
  - Server (app.js)
  ```
  var io = require('socket.io')(80);
  // namespace "chat"
  var chat = io.of('/chat').on('connection', function (socket) {
      socket.emit('a message', {
          that: 'only'
        , '/chat': 'will get'
      });
      chat.emit('a message', {
          everyone: 'in'
        , '/chat': 'will get'
      });
    });
  
  // namespace "news"
  var news = io.of('/news').on('connection', function (socket) {
      socket.emit('item', { news: 'item' });
    });
  ```
  - Client (index.html)
  ```
  <script>
    var chat = io.connect('http://localhost/chat')
      , news = io.connect('http://localhost/news');

    chat.on('connect', function () {
      chat.emit('hi!');
    });

    news.on('news', function () {
      news.emit('woot');
    });
  </script>  
  ```

tutorials
- node.js and socket.io chat tutorial
  - [single room chat](http://psitsmike.com/2011/09/node-js-and-socket-io-chat-tutorial/)
  - [multiroom chat](http://psitsmike.com/2011/10/node-js-and-socket-io-multiroom-chat-tutorial/)
