// class inheritance

//base class

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`I am ${this.name}`)
    }
}

// Derived class (inherits from Animal) //  მემკვიდრეობით მიიღებს Animal-დან მონაცემებს

class Dog extends Animal {
    constructor(name, bread) {
        // საწყისი კლასის(Animal) კონსტრუქტორის გამოძახება
        super(name);
        this.bread = bread;
    }

    bark() {
        console.log("Woof! Woof!");
    }

    //Animal-კლასში არსებული speak მეთოდის თავზე გადაწერა

    speak() {
        console.log(`I am ${this.name} the ${this.bread}`);
    }
}

//creating instances

const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog('Rex', 'Golden Retriever');

genericAnimal.speak();
myDog.speak();
myDog.bark();