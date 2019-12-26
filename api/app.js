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

const MongoClient = require('mongodb').MongoClient;
const myurl = 'mongodb://localhost:27017';

MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err);
  db = client.db('test');
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});

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

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use("/testAPI", require("./routes/testAPI"));
app.use('/gallery', require("./routes/gallery"));
app.use('/photo', require("./routes/photo"));

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
