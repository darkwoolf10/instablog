const createError = require('http-errors');
const express = require('express');
const bodyParser= require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use("/testAPI", require("./routes/testAPI"));
app.use('/gallery', require("./routes/gallery"));
app.use('/photo', require("./routes/photo"));
app.use('/static', express.static('public'));
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
