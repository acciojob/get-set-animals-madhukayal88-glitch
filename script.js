class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  // Getter for species
  get species(): string {
    return this._species;
  }

  // Method to make sound
  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  // Cat-specific method
  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  // Dog-specific method
  bark(): void {
    console.log("woof");
  }
}
