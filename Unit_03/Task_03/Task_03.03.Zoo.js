class Zoo {
  constructor(address, area, establisheDate, priceForChild, priceForAdult) {
    this.address = address;
    this.area = area;
    this.establisheDate = establisheDate;
    this.priceForChild = priceForChild;
    this.priceForAdult = priceForAdult;
    this.workers = [];
    this.animals = [];
  }

  set setZooAddress(address) {
    this.address = address;
  }

  get getZooAddress() {
    return `Zoo's address is: ${this.address}`;
  }

  set setZooArea(area) {
    this.area = area;
  }

  get getZooArea() {
    return `Zoo's area is: ${this.area}`;
  }

  set setEstablisheDate(establisheDate) {
    this.establisheDate = establisheDate;
  }

  get getEstablisheDate() {
    return `Date of foundation is: ${this.establisheDate} years`;
  }

  set setTicketPrices([priceForChild, priceForAdult]) {
    this.priceForChild = priceForChild;
    this.priceForAdult = priceForAdult;
  }

  get getTicketPrice() {
    return `Ticket's price for child is: ${this.priceForChild} BYN\nTicket's price for adult is: ${this.priceForAdult} BYN`;
  }

  addWorker(name, surname, position) {
    this.workers.push({ name, surname, position });
  }

  removeWorker(name, surname) {
    this.workers.filter((worker, idx) =>
      worker.name === name && worker.surname === surname
        ? this.workers.splice(idx, 1)
        : this.workers
    );
  }

  editWorker(name, surname, position, newName, newSurname, newPosition) {
    this.workers.map((worker, idx) =>
      worker.name === name &&
      worker.surname === surname &&
      worker.position === position
        ? (this.workers[idx] = {
            name: newName,
            surname: newSurname,
            position: newPosition,
          })
        : this.workers
    );
  }

  get showAllWorkers() {
    this.workers.forEach((worker) =>
      console.log(
        `Worker's name: ${worker.name}, Worker's surname: ${worker.surname}, Worker's position: ${worker.position}`
      )
    );
  }

  addAnimal(id, species, age) {
    this.animals.push({ id, species, age });
  }

  removeAnimal(id, species, age) {
    this.animals.filter((animal, idx) =>
      animal.id === id && animal.species === species && animal.age === age
        ? this.animals.splice(idx, 1)
        : this.animals
    );
  }

  editAnimal(id, species, age, newId, newSpecies, newAge) {
    this.animals.map((animal, idx) =>
      animal.id === id && animal.species === species && animal.age === age
        ? (this.animals[idx] = {
            id: newId,
            species: newSpecies,
            age: newAge,
          })
        : this.animals
    );
  }

  get showAllAnimals() {
    this.animals.forEach((animal) =>
      console.log(
        `Animal's id: ${animal.id}, Animal's species: ${animal.species}, Animal's age: ${animal.age}`
      )
    );
  }

  showAnimalById(id) {
    this.animals.find((animal) =>
      animal.id === id
        ? console.log(
            `Animal's id: ${animal.id}, Animal's species: ${animal.species}, Animal's age: ${animal.age}`
          )
        : null
    );
  }
}

module.exports = Zoo;

// node ./unit_03/task_03/task_03.03.Zoo.js
