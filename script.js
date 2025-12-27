class Animal {
  constructor(species) {
    // Store the species in a "private" backing variable
    this._species = species;
  }

  // Getter to access the species
  get species() {
    return this._species;
  }

  // Shared method for all animals
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  // Unique behavior for Cats
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  // Unique behavior for Dogs
  bark() {
    console.log("woof");
  }
}

// Attach to window so Cypress tests can access them
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;