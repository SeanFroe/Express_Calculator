/*Build a frenquency counter object from an array
* @param {Array} arr any array

*/

function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;

    return acc;
  });
}
