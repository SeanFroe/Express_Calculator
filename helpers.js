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
}
