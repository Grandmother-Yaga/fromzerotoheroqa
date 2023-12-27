const { expect } = require('chai');
const calculator = require('../../app/calculator');

describe('Verify multiply function:', () => {
  const data = [
    { a: 5, b: 4, result: 20 },
    { a: 5, b: -4, result: -20 },
    { a: -5, b: 0, result: 0 },
  ];

  data.forEach(({ a, b, result }) =>
    it(`should return ${result} as multiplying of ${a} and ${b}`, () => {
      expect(calculator.multiply(a, b)).to.be.equal(result);
    })
  );

  it(`should return the Error due to wrong variable`, () => {
    const str = '5';
    const callWithError = () => calculator.multiply(str, 5);
    expect(callWithError).to.throw(
      'Use number type of variable for calculation'
    );
  });
});
