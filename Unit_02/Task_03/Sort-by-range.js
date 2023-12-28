const fs = require('fs');

const numbers = fs
  .readFileSync('./Unit_02/Task_03/Task 03 - input1.txt', 'utf8')
  .split(',');

const range = fs
  .readFileSync('./Unit_02/Task_03/Task 03 - input2.txt', 'utf8')
  .split(',');

const from = Number(range[0]);
const to = Number(range[1]);

function rangeFiltering(array, from, to) {
  return array.reduce(function (res, num) {
    from <= num && num <= to ? res.push(num) : res;

    return res;
  }, []);
}

// function rangeFiltering(array, from, to) {
//   return array.filter((item) => from <= item && item <= to);
// }

fs.writeFileSync(
  './Unit_02/Task_03/Task 03 - output.txt',
  rangeFiltering(numbers, from, to).join(', ')
);

// node ./Unit_02/Task_03/Sort-by-range.js
