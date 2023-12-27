/*
Создать 2 объекта: animal и cat, в объект animal добавить свойство move, 
объект cat должен наследовать свойство move, реализовать и через прототипы и через классы.
*/

class Animal {
  move() {
    console.log('I can move');
  }
}

class Cat extends Animal {}

const cat = new Cat();
cat.move();

/*
через прототипы 

let animal = {
    move: 'jump',
};

let cat = {};
cat.__proto__ = animal;

console.log(cat.move);
*/

// node ./unit_01/task_04.js
