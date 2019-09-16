var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var db = require('./database/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var exphbs  = require('express-handlebars');
app.use(cors());
// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '/views/layouts/'),
  partialsDir: path.join(__dirname, '/views/partials/')
}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/assets')));


// attach database through middleware
app.use(function(req, res, next) {
  req.db = db;
  next();
});
app.use('/api', indexRouter);
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});
app.use('/', express.static(path.join(__dirname, 'build')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
