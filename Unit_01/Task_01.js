/*
Практические задания для каждого блока должны выполняться в отдельных ветках и предоставляться на проверку в виде pull request. 
Задачи необходимо делать .js файлах. Для вывода информации использовать console.log()
Выполнить сложение различных типов(string + boolean, string + number, number + boolean)
Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
Выполнить деление различных типов(string / boolean, string / number, number / boolean)
Выполнить явное преобразование(number, string, boolean)
*/

const str = '10';
const _boolean = true;
const num = 5;

console.log(
  'Выполнить сложение различных типов(string + boolean, string + number, number + boolean):'
);
console.log(
  `str + _boolean: ${str + _boolean}. Typeof: ${typeof (str + _boolean)}`
);
console.log(`str + num: ${str + num}. Typeof: ${typeof (str + num)}`);
console.log(
  `num + _boolean: ${num + _boolean}. Typeof: ${typeof (num + _boolean)}`
);

console.log(
  'Выполнить умножение различных типов(string * boolean, string * number, number * boolean):'
);
console.log(
  `str * _boolean: ${str * _boolean}. Typeof: ${typeof (str * _boolean)}`
);
console.log(`str * num: ${str * num}. Typeof: ${typeof (str * num)}`);
console.log(
  `num * _boolean: ${num * _boolean}. Typeof: ${typeof (num * _boolean)}`
);

console.log(
  'Выполнить деление различных типов(string / boolean, string / number, number / boolean):'
);
console.log(
  `str / _boolean: ${str / _boolean}. Typeof: ${typeof (str / _boolean)}`
);
console.log(`str / num: ${str / num}. Typeof: ${typeof (str / num)}`);
console.log(
  `num / _boolean: ${num / _boolean}. Typeof: ${typeof (num / _boolean)}`
);

console.log('Выполнить явное преобразование(number, string, boolean):');
console.log(
  `Convert str to Number: ${Number(str)}. Typeof: ${typeof Number(str)}`
);
console.log(
  `Convert _boolean to Number: ${Number(_boolean)}. Typeof: ${typeof Number(
    _boolean
  )}`
);
console.log(
  `Convert num to String: ${String(num)}. Typeof: ${typeof String(num)}`
);
console.log(
  `Convert _boolean to String: ${String(_boolean)}. Typeof: ${typeof String(
    _boolean
  )}`
);
console.log(
  `Convert str to _boolean: ${Boolean(str)}. Typeof: ${typeof Boolean(str)}`
);
console.log(
  `Convert num to _boolean: ${Boolean(num)}. Typeof: ${typeof Boolean(num)}`
);

// node ./Unit_01/Task_01.js
