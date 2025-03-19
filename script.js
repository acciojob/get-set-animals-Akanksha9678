//complete this code
class Animal {
	constructor(species){
		this.species=species
	}
	getter(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${species} makes a sound`)
	}
}

class Dog extends Animal {
	constructor(){
		super(this.species)
	}
	
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(){
		super(this.species)
	}
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
