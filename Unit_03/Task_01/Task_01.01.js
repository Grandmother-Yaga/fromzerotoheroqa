/*
Given an array with an online store user’s data. 
You need to iterate through the array and print in the console only users who registered on October 9 and 10, 2021.
*/

const users = require('./task1-data');

users.forEach(({ firstName, lastName, phone, registrationDate }) =>
  '09.10.2021' === registrationDate || registrationDate === '10.10.2021'
    ? console.log({ firstName, lastName, phone, registrationDate })
    : null
);

// node ./unit_03/task_01/task_01.01.js
