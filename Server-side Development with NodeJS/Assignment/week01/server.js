var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('dev'));

var dishRouter = require('./routes/dishRouter');
app.use('/dishes',dishRouter);

var promoRouter = require('./routes/promoRouter');
app.use('/promotions', promoRouter);

var leaderRouter = require('./routes/leaderRouter');
app.use('/leadership', leaderRouter);

app.use(express.static(__dirname + '/public'));

var hostname = 'localhost';
var port = 3000;
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});