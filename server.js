var express       = require("express");
var port          = process.env.PORT || 8080;
var morgan        = require("morgan");
var mongoose      = require("mongoose");
var bodyParser    = require('body-parser');
var app           = express();
var apiRoutes     = require('./app/routes/api')(router);

app.use(express.json());
app.use(morgan("dev"));
mongoose.set('useNewUrlParser', true);

const db = mongoose
  .connect(
    "mongodb+srv://dbUser:Password1!@cluster0.jcoj3.mongodb.net/mountainbikeinfo",
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true 
    })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("MongoDB connection unsuccessful");
    console.log(err);
  });


app.listen(port, function () {
  console.log("running the server on port " + port);
});
