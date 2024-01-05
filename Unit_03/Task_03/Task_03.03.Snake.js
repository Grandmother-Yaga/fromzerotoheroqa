const Animal = require('./Task_03.03.Animal');

class Snakes extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
    super(type, color, weight, height, placeOfOrigin);
    this.isPoisonous = isPoisonous;
  }
}

module.exports = Snakes;
