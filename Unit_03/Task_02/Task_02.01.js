/*
Implement a function called pinCodeGenerator. 
This function should take one argument called length and return a randomly generated pin code of a given length. 

For example,  pinCodeGenerator(5) → 73473
*/

function pinCodeGenerator(length) {
  let pin = '';

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  for (let i = 0; i < length; i++) {
    pin += Math.round(random(0, 9));
  }
  console.log(Number(pin));
}

pinCodeGenerator(6);
pinCodeGenerator(4);


// node ./unit_03/task_02/task_02.01.js
