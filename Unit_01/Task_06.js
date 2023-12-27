/*
В try catch конструкцию завернуть код: console.log(a), let a = 3. 
И вывести ошибку – ‘let перед использованием нужно объявить’. 
При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
*/

console.log(`
В try catch конструкцию завернуть код: console.log(a), let a = 3. 
И вывести ошибку – ‘let перед использованием нужно объявить’. 
`);

try {
  console.log(a);
  let a = 3;
} catch (error) {
  if (error.name === 'ReferenceError')
    throw new ReferenceError('let перед использованием нужно объявить');
}

console.log(`
При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
`);

try {
  const result = 1 / 0;

  if (result === Infinity) {
    throw new SyntaxError('на ноль делить нельзя');
  }
} catch (err) {
  console.log(err);
}

// node ./unit_01/task_06.js
