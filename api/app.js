const createError = require('http-errors');
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const passport = require('passport');
const session = require('express-session');
// const redisStore = require('connect-redis')(session);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testAPIRouter = require("./routes/testAPI");
const galleryRoute = require("./routes/gallery");
const photo = require("./routes/photo");

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use('/gallery', galleryRoute);
app.use('/photo', photo);

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

// app.use(session({
  // store: new RedisStore({
  //   url: config.redisStore.url
  // }),
  // secret: config.redisStore.secret,
  // resave: false,
  // saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

module.exports = app;
