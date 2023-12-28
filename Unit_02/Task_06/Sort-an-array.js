const fs = require('fs');

const numbers = fs
  .readFileSync('./Unit_02/Task_06/Task 06 - input.txt', 'utf8')
  .split(',')
  .sort((a, b) => b - a)
  .join(', ');

fs.writeFileSync('./Unit_02/Task_06/Task 06 - output.txt', numbers);

// node ./Unit_02/Task_06/Sort-an-array.js
