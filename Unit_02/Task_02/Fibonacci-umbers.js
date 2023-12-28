const fs = require('fs');

const num = Number(
  fs.readFileSync('./Unit_02/Task_02/Task 02 - input.txt', 'utf8')
);

function fib(num) {
  return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

fs.writeFileSync('./Unit_02/Task_02/Task 02 - output.txt', String(fib(num)));

// node ./Unit_02/Task_02/Fibonacci-umbers.js
