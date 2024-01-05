class Work {
  constructor() {
    this.worker = [];
  }

  addWorker(name, surname, position) {
    this.worker.push({ name, surname, position });
  }

  removeWorker(name, surname) {
    this.worker.filter((worker, idx) =>
      worker.name === name && worker.surname === surname
        ? this.worker.splice(idx, 1)
        : this.worker
    );
  }

  editWorker(name, surname, position, newName, newSurname, newPosition) {
    this.worker.forEach((worker, idx) =>
      worker.name === name &&
      worker.surname === surname &&
      worker.position === position
        ? (this.worker[idx] = {
            name: newName,
            surname: newSurname,
            position: newPosition,
          })
        : this.worker
    );
  }
}

const worker = new Work();

worker.addWorker('a', 'b', 'c');
worker.addWorker('a', 'd', 'c');
worker.addWorker('a', 'd', 'c');
worker.addWorker('a', 'b', 'c');
worker.removeWorker('a', 'b', 'c');
worker.editWorker('a', 'd', 'c', 'name', 'surname', 'positiion');

console.log(worker.worker);

// node ./unit_03/task_03/test.js
