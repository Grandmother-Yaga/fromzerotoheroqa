/*
Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
Преобразовать числовой массив в Boolean
Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
Реализовать цикл, который выводит в консоль простые числа
Реализовать цикл, который выводит в консоль нечетные числа
*/

console.log(`
Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
`);

const movies = ['1+1', 'Green book', 'John Wick'];

movies.forEach((movie) => console.log(movie));

console.log(`
Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
`);

const autoBrands = ['VW', 'Audi', 'BMW'];

console.log(autoBrands.toString().split(','));

console.log(`
Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
`);

const friends = ['Artur', 'Alex', 'Someone'];

const helloFriends = friends.map((friend) => `Hello ${friend}`);

console.log(helloFriends);

console.log(`
Преобразовать числовой массив в Boolean
`);

const numtoConvertToBoolean = [0, -1, 5, 1, -0];

console.log(numtoConvertToBoolean.map((num) => Boolean(num)));

console.log(`
Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
`);

const numToSort = [1, 6, 7, 8, 3, 4, 5, 6];

console.log(numToSort.sort((a, b) => b - a));

console.log(`
Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
`);

console.log(numToSort.filter((num) => num > 3));

console.log(`
Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
`);

function indexOfElem(arr, num) {
  return arr.indexOf(num);
}

console.log(`Index of 5 is: ${indexOfElem(numToSort, 5)}`);

console.log(`
Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
`);

let a = 15;

do {
  console.log(a--);
} while (a >= 10);

console.log(`
Реализовать цикл, который выводит в консоль простые числа
`);

function isPrime() {
  loop: for (let i = 2; i < 150; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue loop;
    }
    console.log(i);
  }
}

isPrime();

console.log(`
Реализовать цикл, который выводит в консоль нечетные числа
`);

function odd() {
  for (let i = 0; i < 15; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

odd();

// node ./unit_01/task_03.js
