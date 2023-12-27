class Calculator {
  add(a, b) {
    this._isNumber(a, b);
    return a + b;
  }

  multiply(a, b) {
    this._isNumber(a, b);
    return a * b;
  }

  _isNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Use number type of variable for calculation');
    }
  }
}

module.exports = new Calculator();
