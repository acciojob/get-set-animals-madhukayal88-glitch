class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the animal's sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    // Pass species to the parent Animal constructor
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species) {
    // Pass species to the parent Animal constructor
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

// Example usage to verify:
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();      // woof