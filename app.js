const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Homepage");
});

app.get;

app.listen(3000, function () {
  console.log("App on port 3000");
});
