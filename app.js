const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const { findMode, convertAndValidateNumsArray } = require("./helpers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Homepage");
});

app.get("/mode", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError(
      `You must pass a query key of nums with a comma-seperated list of numbers.`,
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  // check if anything bad was put in
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: "mode",
    result: findMode(nums),
  };

  return res.send(result);
});
app.listen(3000, function () {
  console.log("App on port 3000");
});
