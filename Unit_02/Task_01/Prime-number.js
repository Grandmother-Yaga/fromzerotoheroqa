const fs = require('fs');

const num = Number(
  fs.readFileSync('./Unit_02/Task_01/Task 01 - input.txt', 'utf8')
);

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

fs.writeFileSync('./Unit_02/Task_01/Task 01 - output.txt', String(isPrime(num)));

// node ./Unit_02/Task_01/Prime-number.js
