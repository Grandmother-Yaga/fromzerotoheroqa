/*
There is an array of prices of goods in the receipt. 
In the console, you need to display the sum of all prices and the average price of the product.

Total: 8495 hryvnias, average price of goods 700 hryvnias - an example of a message in the console
*/

const prices = require('./task3-data');

function totalAndAveragePrice(prices) {
  const sum = prices.reduce((sum, price) => sum + price, 0);
  const avg = sum / prices.length;
  return `Total sum is: $${sum}. Average price of goods is: $${avg}`;
}

console.log(totalAndAveragePrice(prices));

// node ./unit_03/task_01/task_01.03.js
