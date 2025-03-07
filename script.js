//complete this code
class Animal {
	constructor(species){
		this.species=species
	}
	gettter(){
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
		super.makeSound();
	}
}

class Cat extends Animal {
	constructor(){
		super(this.species)
	}
	super.makeSound();
	purr(){
		super.makeSound();
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
