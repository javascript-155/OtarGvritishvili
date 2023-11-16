//classes in javascript

class Animal {
    constructor(name, age) {
        this.name = name;
        this.name = age;
    }

    speak(sayWhat) {
        console.log(`I am ${this.name} and I am ${this.age} years old and I say ${sayWhat}`);
    }
}
const animal = new Animal('Simba', 3);
animal.speak("Roarrrr");
