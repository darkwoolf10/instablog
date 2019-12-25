module.export = function (app) {
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
};
