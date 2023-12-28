const fs = require('fs');

const keys = fs
  .readFileSync('./Unit_02/Task_04/Task 04 - keys.txt', 'utf8')
  .split(',');

const values = fs
  .readFileSync('./Unit_02/Task_04/Task 04 - values.txt', 'utf8')
  .split(',');

const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

fs.writeFileSync('./Unit_02/Task_04/Task 04 - output.txt', JSON.stringify(obj));

// node ./Unit_02/Task_04/Create-an-object.js
