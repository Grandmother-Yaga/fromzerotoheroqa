/*
Создать объект car, добавить к нему свойство color со значением 'черный'
1.1 Изменить свойство color объекта car на 'зеленый'
1.2 В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

Напишите функцию вычисления типа аргумента и вывод типа в консоль

Напишите функцию, которая определяет является ли число простым или нет
*/

console.log(`
Создать объект car, добавить к нему свойство color со значением 'черный'
1.1 Изменить свойство color объекта car на 'зеленый'
1.2 В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
`);
const car = {};
car.color = 'black';
console.log(car.color);
car.color = 'green';
console.log(car.color);
car.power = function () {
  console.log(`Horse power is 55`);
};
car.power();

console.log(`
На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
`);
const apples = 10;
const pears = 14;

function sum(a, b) {
  return a + b;
}

console.log(`Sum of fruits: ${sum(apples, pears)}`);

console.log(`
В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
`);
const names = ['Artur', 'Someone'];

function greeting(arr) {
  return arr.map((name) =>
    name === 'Artur' ? `Hello Artur!` : `There is no such username.`
  );
}

console.log(greeting(names));

console.log(`
Напишите функцию вычисления типа аргумента и вывод типа в консоль
`);

const argument = 'false';

function typeOf(argument) {
  console.log(typeof argument);
}

typeOf(argument);

console.log(`
Напишите функцию, которая определяет является ли число простым или нет
`);

const prime = 23;
const notPrime = 9;

function isPrime(num) {
  if (num < 2) return false;

  if (num === 2) return true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(`Prime number: ${isPrime(prime)}`);
console.log(`Not a prime number: ${isPrime(notPrime)}`);

// node ./unit_01/task_02.js
