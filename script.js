//complete this code
class Animal {
	constructor(species){
		this.species=species
	}
	getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	// constructor(species){
	// 	super(species)
	// }
	// super.makeSound();
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	// constructor(species){
	// 	super(species)
	// }
	// super.makeSound();
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
