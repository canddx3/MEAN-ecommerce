const express     = require("express");
const port        = process.env.PORT || 8080;
const morgan      = require("morgan");
const mongoose    = require("mongoose");
const bodyParser  = require("body-parser");
const app         = express();
const router      = express.Router();
// const apiRoutes   = require('./app/routes/api')(router);
const path        = require('path');

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
// app.use("/api", apiRoutes);

const db = mongoose
  .connect(
    "mongodb+srv://dbUser:Password1!@cluster0.jcoj3.mongodb.net/mountainbikeinfo",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log("MongoDB connection unsuccessful");
    console.log(err);
  });

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/public/views/index.html'));
})

app.listen(port, function () {
  console.log("running the server on port " + port);
});
