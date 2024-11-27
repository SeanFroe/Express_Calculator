const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const { findMode, convertAndValidateNumsArray } = require("./helpers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Homepage");
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
