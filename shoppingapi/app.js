var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require("mongoose")
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
mongoose.connect("mongodb://localhost:27017/myshoppingdb")
console.log("Mongodb connected");
var products = require("./model/product")// file name
app.get("/wsproducts", function (request, response) {
  products.find(function (err, data) {
    if (err) {
      throw err
    }
    response.json(data)
  })

})

app.post("/wsproducts", function (request, response) {
  let newproduct = request.body;
  products.create(newproduct, (err, data) => {
    if (err) {
      throw err
    }
    response.json(data)
  })
})

app.delete("/wsproducts/:id", function (request, response) {
  let query = { _id: request.params.id }

  products.remove(query, (err, data) => {
    if (err) {
      throw err
    }
    response.json(data)
  })
})

app.put("/wsproducts/:id", function (request, response) {
  let query = { _id: request.params.id }
  let modifiedproduct = request.body
  let updt = { '$set': { "name": modifiedproduct.name, "price": modifiedproduct.price } }
  let options = { new: true }
  products.findOneAndUpdate(query,updt, options, (err, data)=> {
    if (err) {
      throw err
    }
    response.json(data)
  })
})

app.get("*", (request, response) => {

  response.send("MyShopping Api");
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
