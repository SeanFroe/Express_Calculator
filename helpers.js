// ********************** HELPER FUNCTIONS *********************

//----------------------- CREATE FREQUENCY COUNTER ----------------------
/*Build a frenquency counter object from an array
* @param {Array} arr any array

*/

function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;

    return acc;
  }, {});
}
//----------------------------  FIND MODE FUNCTION -------------------
function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;

      count = freqCounter[key];
    }
  }

  return +mostFrequent;
}
//-------------  CONVERT AND VALIDATE NUMS ARRAY FUNCTION ----------
// Attempt to convert an array of strings to an array of numbers
// @param {Array} numsAsStrings array of strings
// @return {Array|Error} an array or an error object

function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }

  return result;
}

//--------------------------- FIND MEAN -------------------------------
function findMean(nums) {
  if (nums.length === 0) return 0;

  return (
    nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
  );
}

//---------------------------- FIND MEDIAN -------------------------

function findMedian(nums) {
  // sort and get the middle element

  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = nums[middleIndex] + nums[middleIndex - 1] / 2;
  } else {
    median = nums[middleIndex];
  }

  return median;
}

module.exports = {
  findMode,
  findMean,
  findMedian,
  convertAndValidateNumsArray,
  createFrequencyCounter,
};
