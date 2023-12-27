const { expect } = require('chai');
const calculator = require('../../app/calculator');

describe('Verify add function:', () => {
  const data = [
    { a: 5, b: 4, result: 9 },
    { a: 5, b: -4, result: 1 },
    { a: -5, b: 4, result: -1 },
  ];

  data.forEach(({ a, b, result }) =>
    it(`should return ${result} as sum of ${a} and ${b}`, () => {
      expect(calculator.add(a, b)).to.be.equal(result);
    })
  );

  it(`should return the Error due to wrong variable`, () => {
    const str = '5';
    const callWithError = () => calculator.add(str, 5);
    expect(callWithError).to.throw(
      'Use number type of variable for calculation'
    );
  });
});
