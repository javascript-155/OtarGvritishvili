function Animal (name, age){
        this.name = name;
        this.name = age;
}

Animal.prototype.speak = function (sayWhat) {
    let birthYear = 2023 - this.age

    console.log(`I am ${this.name} and I am ${this.age} years old and I say ${sayWhat}`);
    console.log(`I was born in ${birthYear}`);
}
const animal = new Animal('Simba', 3);
animal.speak("Roarrrr");