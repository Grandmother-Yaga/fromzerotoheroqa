const Animal = require('./Task_03.03.Animal');

class Bird extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
    super(type, color, weight, height, placeOfOrigin);
    this.isSafeToPet = isSafeToPet;
  }
}

module.exports = Bird;
