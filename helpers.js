/*Build a frenquency counter object from an array
* @param {Array} arr any array

*/

function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;

    return acc;
  }, {});
}

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

function findMean(nums) {
  if (nums.length === 0) return 0;

  return (
    nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
  );
}
module.exports = {
  findMode,
  findMean,
  convertAndValidateNumsArray,
};
