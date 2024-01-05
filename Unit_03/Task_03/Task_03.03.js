/*
  You need to create a Zoo catalog, where we will keep all animals from this Zoo.
* You need to create a Zoo class which. See the structure in the attachment. You should implement the following methods:
- get/set zoo’s address
- get/set zoo’s area
- get established date
- get/set ticket’s price
- add/remove/edit worker
- add/remove/edit animal
- show all animals
- show animal by id (id should be a property of every animal)
- show all workers
* Create Animal class. See structure in the attachment. Implement the following methods:
- get animal info
- set weight
- set height
* Create child classes for some kinds of animals. See structure in the attachment. 
  Implement the possibility to set the properties of child classes.
*/

const Zoo = require('./Task_03.03.Zoo');
const Snake = require('./Task_03.03.Snake');
const CatLike = require('./Task_03.03.CatLike');
const Bird = require('./Task_03.03.Bird');
const Worker = require('./Task_03.03.Worker');

const zooGrodno = new Zoo(
  'Timirayzeva str. 11, Grodno',
  '5,35 hectares',
  1927,
  4,
  6
);

console.log(
  '-----------------------------------------------------------------'
);
console.log(zooGrodno.getZooAddress);
console.log(zooGrodno.getZooArea);
console.log(zooGrodno.getEstablisheDate);
console.log(zooGrodno.getTicketPrice);
zooGrodno.setTicketPrices = [6.5, 8.5];
console.log(zooGrodno.getTicketPrice);
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.addWorker('Artur', 'SANKO', 'Junior');
zooGrodno.addWorker('Petr', 'Petrov', 'Middle');
zooGrodno.addWorker('Ivan', 'Ivanov', 'Senior');
zooGrodno.addWorker('Petr', 'Ivanov', 'Middle');
zooGrodno.showAllWorkers;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.removeWorker('Petr', 'Ivanov');
zooGrodno.showAllWorkers;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.editWorker('Artur', 'SANKO', 'Junior', 'Artur', 'Sanko', 'Middle');
zooGrodno.showAllWorkers;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.addAnimal(253, 'Wolf', 5);
zooGrodno.addAnimal(556, 'Wolf', 7);
zooGrodno.addAnimal(557, 'Wolf', 7);
zooGrodno.addAnimal(754, 'Bear', 10);
zooGrodno.addAnimal(153, 'Tiger', 7);
zooGrodno.addAnimal(372, 'Lion', 13);
zooGrodno.showAllAnimals;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.removeAnimal(557, 'Wolf', 7);
zooGrodno.showAllAnimals;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.editAnimal(153, 'Tiger', 7, 153, 'Tiger', 8);
zooGrodno.showAllAnimals;
console.log(
  '-----------------------------------------------------------------'
);
zooGrodno.showAnimalById(556);
console.log(
  '-----------------------------------------------------------------'
);
console.log(zooGrodno);
console.log(
  '-----------------------------------------------------------------'
);

const viperaBerus = new Snake(
  'Vipera berus',
  'Melanistic colour patterns',
  '10 kg',
  '2 metres',
  'Western Europe',
  true
);
viperaBerus.getAnimalInfo;
console.log(viperaBerus);
console.log(
  '-----------------------------------------------------------------'
);

const tiger = new CatLike(
  'Amur tiger',
  'Orange with black stripes',
  '110 cm',
  '200 kg',
  'Russian Far East',
  false
);
tiger.getAnimalInfo;
console.log(tiger);
console.log(
  '-----------------------------------------------------------------'
);

const sparrow = new Bird(
  'Old world sparrow',
  'Colourful',
  '13.4 grams',
  '18 cm',
  'Northern Europe',
  true
);
sparrow.getAnimalInfo;
console.log(sparrow);
console.log(
  '-----------------------------------------------------------------'
);

const sanko = new Worker('Artur', 'Sanko', '+375(00)0 00 00 00');
console.log(sanko);
console.log(
  '-----------------------------------------------------------------'
);

// node ./unit_03/task_03/task_03.03.js
