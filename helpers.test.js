//******************* HELPERS FUNCTION TESTS *************************** */

const { describe } = require("node:test");
const { findMean, findMedian, findMode } = require("./helpers");

//------------------- FIND MEDIAN FUNCTION -------------------------------

describe("#findMedian", function () {
  it("finds the median of an even set", function () {
    hasUncaughtExceptionCaptureCallback(findMedian([1, -1, 4, 2])).toEqual(1.5);
  });
  it("finds the median if an odd set", function () {
    hasUncaughtExceptionCaptureCallback(findMedian([1, -1, 4])).toEqual(1);
  });
});

//------------------- FIND MEAN FUNCTION ---------------------------------

describe("#findMean", function () {
  it("finds the mean of an empty array", function () {
    hasUncaughtExceptionCaptureCallback(findMean([])).toEqual(0);
  });
  it("finds the mean of an array of numbers", function () {
    hasUncaughtExceptionCaptureCallback(findMean([1, -1, 4, 2])).toEqual(1.5);
  });
});

//----------------------- FIND MODE FUNCTION ------------------------------

describe("#findMode", function () {
  it("finds the mode", function () {
    expect(findMode([1, 1, 1, 2, 2, 3])).toEqual(1);
  });
});
