// Base Animal class
class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  // Getter for species
  get species(): string {
    return this._species;
  }

  // Method to make a sound
  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat subclass
class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  // Cat-specific behavior
  purr(): void {
    console.log("purr");
  }
}

// Dog subclass
class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  // Dog-specific behavior
  bark(): void {
    console.log("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected: The Siamese makes a sound
myCat.purr();      // Expected: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected: The Golden Retriever makes a sound
myDog.bark();      // Expected: woof