/*
Create currencyConvertorAsync function. 
Reimplement the first task with async/await syntax. Use a separate *.js file for this task.
*/

async function currencyConvertor(amountOfMoney, currency) {
  try {
    const url =
      'https://api.currencyapi.com/v3/latest?apikey=9oAYWzH6crUZXguzZJtO3jGCsm3Qv2tnlZl4Yn3H';

    const response = await fetch(url);
    console.log('Request currency...');

    const dataCurrency = await response.json();
    console.log('Prepering currency...');

    const exchangeRate = await dataCurrency.data[currency].value;
    console.log('Exchange...');

    const resultOfExchanging = await (amountOfMoney * exchangeRate);
    console.log('Done');

    console.log(
      `Exchanging rate: ${exchangeRate}, Result: ${resultOfExchanging} ${currency}`
    );
  } catch (err) {
    console.error(err);
  }
}

currencyConvertor(40, 'EUR');

// currencyConvertor(45, 'AED');

// currencyConvertor(25, 'INR');

// node ./Unit_03/Task_04/Task_04.02.js
