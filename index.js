const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const person = require("./api/routes/person");

mongoose
  .connect(`mongodb+srv://oparadaniv:danieldaniel@task2.mg0ovz1.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Connected to port 7070");
  })
  .catch((err) => {
    console.log("error connection to port 7070 " + err);
  });

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", person);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
