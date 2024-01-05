class Animal {
  constructor(type, color, weight, height, placeOfOrigin) {
    this.type = type;
    this.color = color;
    this.weight = weight;
    this.height = height;
    this.placeOfOrigin = placeOfOrigin;
  }

  set setWeight(weight) {
    this.weight = weight;
  }

  set setHeight(height) {
    this.height = height;
  }

  get getAnimalInfo() {
    console.log(
      `Type: ${this.type}\nColor: ${this.color}\nWeight: ${this.weight}\nHieght: ${this.height}\nPlace of origin: ${this.placeOfOrigin}`
    );
  }
}

module.exports = Animal;

// node ./unit_03/task_03/task_03.03.Animals.js
