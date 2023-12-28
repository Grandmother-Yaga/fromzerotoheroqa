const fs = require('fs');

const obj = JSON.parse(
  fs.readFileSync('./Unit_02/Task_05/Task 05 - input.txt', 'utf8')
);

let arr = [];

for (const key in obj) {
  arr.push(typeof obj[key]);
}

fs.writeFileSync('./Unit_02/Task_05/Task 05 - output.txt', arr.join(', '));

// node ./Unit_02/Task_05/Object-values.js
