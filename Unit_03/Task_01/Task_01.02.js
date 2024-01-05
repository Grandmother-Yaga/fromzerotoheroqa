/*
Print numbers from 1 to 100 in the console. 
If the number is divisible by 3 without a remainder, 
then print the “number is divisible by 3” to the console. 
If the number is divisible by 5 without a remainder, 
then print to the console “the number is divisible by 5”. 
If the number is divisible by both 3 and 5 without a remainder, 
then you will output to the console, “the number is divisible by 3 by 5”.
*/

(function printNumbers() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      console.log(`number [${i}] is divisible by 3 and by 5`);
    else if (i % 3 === 0) console.log(`number [${i}] is divisible by 3`);
    else if (i % 5 === 0) console.log(`number [${i}] is divisible by 5`);
    else console.log(i);
  }
})();

// printNumbers();

// node ./unit_03/task_01/task_01.02.js
