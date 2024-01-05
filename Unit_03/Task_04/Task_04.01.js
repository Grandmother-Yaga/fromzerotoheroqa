/*
Create a currency converter using an exchange rate from https://currencyapi.com/ or https://www.frankfurter.app/. 
A user should be able to pass a currency and amount of money in a function and get the amount of money 
in the desired currency in output. Use “then” syntax to implement the function.

currencyConvertor(40, EUR) ⇒ 35 EUR

URL: https://api.currencyapi.com
API keys: 9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H

Request URL
https://api.currencyapi.com/v3/latest?apikey=9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H
*/

function currencyConvertor(amountOfMoney, currency) {
  const url =
    'https://api.currencyapi.com/v3/latest?apikey=9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H';
  let exchangeRate;
  let resultOfExchanging;

  console.log('Request in progress...');

  return fetch(url)
    .then((response) => {
      console.log('Request currency...');
      return response.json();
    })
    .then((dataCurrency) => {
      console.log('Prepering currency...');
      return (exchangeRate = dataCurrency.data[currency].value);
    })
    .then((exchangeRate) => {
      console.log('Exchange...');
      console.log('Done');
      return (resultOfExchanging = amountOfMoney * exchangeRate);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      console.log(
        `Exchanging rate: ${exchangeRate}, Result: ${resultOfExchanging} ${currency}`
      );
    });
}

currencyConvertor(40, 'EUR');

// currencyConvertor(45, 'AED');

// currencyConvertor(25, 'INR');

// node ./Unit_03/Task_04/Task_04.01.js
