// ************************ EXPRESS CALCULATOR ************************
const express = require("express");
const app = express();

//------------------ EXTERNAL .JS FILES ------------------------
const ExpressError = require("./expressError");
const {
  findMode,
  findMean,
  findMedian,
  convertAndValidateNumsArray,
} = require("./helpers");
// -------------------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//*************************** Routes ***********************************/

//--------------------------- HomePage -------------------------------
app.get("/", (req, res) => {
  return res.send("Homepage");
});
//----------------------------- MODE ------------------------------------
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

//------------------------------ Mean ---------------------------------

app.get("/mean", (req, res, next) => {
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
    operation: "mean",
    result: findMean(nums),
  };

  return res.send(result);
});

//--------------------------- MEDIAN ----------------------------------\
app.get("/median", (req, res, next) => {
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
    operation: "median",
    result: findMedian(nums),
  };

  return res.send(result);
});

//---------------------------- PORT 3000 -------------------------------
app.listen(3000, function () {
  console.log("App on port 3000");
});
