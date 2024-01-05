/*
There is an array with the most popular last names, but few elements don’t look like valid last names. 
Delete invalid elements of the array.
const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]
*/

const arr = [
  'НПП Прізвище Кіл-ть Приблизно',
  '______________________в_ базіпо_Україні',
  '0-rt-rgfr',
  '8484fjdfkf',
  'МЕЛЬНИК',
  'ШЕВЧЕНКО',
  'БОЙКО',
  'КОВАЛЕНКО',
  'БОНДАРЕНКО',
  'ТКАЧЕНКО',
  'КОВАЛЬЧУК',
  'КРАВЧЕНКО',
  'ОЛІЙНИК',
];

function sortSurname(arr) {
  const regexp = /\s|\w|\d/gi;

  const sortedArr = arr.reduce(function (res, item) {
    regexp.test(item) ? res : res.push(item);
    return res;
  }, []);

  console.log(sortedArr);
}

sortSurname(arr);

// node ./unit_03/task_02/task_02.03.js
