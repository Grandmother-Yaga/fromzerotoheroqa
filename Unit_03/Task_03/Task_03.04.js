/*
Extend build-in class string with a method called removeSpecialCharacters. 
This method should work for every string created within your js file. 
For example ‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’
*/

const str = 'H!!??!@#$E%^&L*() {}[L]|/-++ -O=/?.>,< 0';

String.prototype.removeSpecialCharacters = function () {
  const regexp = /[a-zA-Z]/gi;
  return this.split('')
    .reduce(function (res, char) {
      regexp.test(char) ? res.push(char) : res;
      return res;
    }, [])
    .join('');
};

const newStr = str.removeSpecialCharacters();

console.log(newStr);

// node ./unit_03/task_03/task_03.04.js
