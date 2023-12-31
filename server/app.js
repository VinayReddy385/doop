var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var coors=require('cors');//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var mongoose=require('mongoose');//
var empRouter=require('./routes/employee');//
var userRouter=require('./routes/user');
mongoose.connect('mongodb+srv://meghavinayreddy:Pvinay%40143@dolla0.x7n6myv.mongodb.net/Employees-details');//
mongoose.connection.on('connected',()=>{//
  console.log("Database connected");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//added
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);//user/${id}
app.use('/emp',empRouter );//emp/${id}
app.use(coors());
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
