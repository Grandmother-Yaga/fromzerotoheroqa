const fs = require('fs');

let numPositive = [];
let numNegative = [];

const numbers = fs
  .readFileSync('./Unit_02/Task_07/Task 07 - input.txt', 'utf8')
  .split(',')
  .map((num) => (num >= 0 ? numPositive.push(num) : numNegative.push(num)));

fs.writeFileSync(
  './Unit_02/Task_07/Task 07 - output1.txt',
  numPositive.join(', ')
);
fs.writeFileSync(
  './Unit_02/Task_07/Task 07 - output2.txt',
  numNegative.join(', ')
);

// node ./Unit_02/Task_07/Positive-and-negative-arrays.js
