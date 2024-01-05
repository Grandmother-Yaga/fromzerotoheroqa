/*
 * There is a JSON file with a price list. All prices there are in dollars. You need to:
 * - convert all prices to euros (use a static exchange rate).
 * - add a currency field to the source and output objects
 * - save both objects into variables and log them into the console.
 */

const fs = require('fs');

const exchangeRate = 0.9;

const priceList = fs.readFileSync('./Unit_03/Task_03/task1-data.json', 'utf8');

const usdPriceList = JSON.parse(priceList);
usdPriceList['data'].forEach((item) => {
  item['Prices']['Currency'] = 'USD';
});

const eurPriceList = JSON.parse(priceList);
eurPriceList['data'].forEach(function (item) {
  item['Prices']['Currency'] = 'EUR';

  item['Prices']['Price'] =
    Math.round(item['Prices']['Price'] * exchangeRate * 100) / 100;
  item['Prices']['Retail Price'] =
    Math.round(item['Prices']['Retail Price'] * exchangeRate * 100) / 100;
  item['Prices']['Wholesale Price'] =
    Math.round(item['Prices']['Wholesale Price'] * exchangeRate * 100) / 100;
});

fs.writeFileSync(
  './unit_03/task_03/usdPriceList.json',
  JSON.stringify(usdPriceList),
  'utf-8'
);
fs.writeFileSync(
  './unit_03/task_03/eurPriceList.json',
  JSON.stringify(eurPriceList),
  'utf-8'
);

// node ./unit_03/task_03/task_03.01.js
