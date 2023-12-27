/*
Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: 
буква 'a', любой символ, буква 'b'
Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
Получить день, месяц и год текущей даты и по отдельности вывести в консоль
*/

console.log(`
Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: 
буква 'a', любой символ, буква 'b'
`);

const str = 'ahb acb aeb aeeb adcb axeb';

console.log(str.match(/a.b/g));

console.log(`
Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
`);

const _string = '2+3 223 2223';

console.log(_string.match(/2\+3/g));

console.log(`
Получить день, месяц и год текущей даты и по отдельности вывести в консоль
`);

const today = new Date().toLocaleDateString();

console.log(today);
console.log(new Date().getDay());
console.log(new Date().getDate());
console.log(new Date().getMonth() + 1);
console.log(new Date().getFullYear());

// node ./unit_01/task_05.js
