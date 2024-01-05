/*
Given an array of objects. Every object is an identity card of a person. 
We need to keep only unique values in this array. Implement a function that will do this work.
*/

const fs = require('fs');

const personCards = JSON.parse(
  fs.readFileSync('./Unit_03/Task_03/task2-data.json', 'utf8')
);

function unique(personCards) {
  return personCards.reduce(function (res, person) {
    res.find((obj) => obj.name === person.name) ? res : res.push(person);
    return res;
  }, []);
}

fs.writeFileSync(
  './unit_03/task_03/sortedPersonCards.json',
  JSON.stringify(unique(personCards)),
  'utf-8'
);

// node ./unit_03/task_03/task_03.02.js
