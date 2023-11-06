//1. შექმენით პროგრამა, რომელიც შეამოწმებს, არის თუ არა კონკრეტული ცვლადის მნიშვნელობა მასივი.


let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];

let person = {
    eye: "to see",
    mouth: ["to eat", "to speak"],
    nose: "to smell",
};


console.log(Array.isArray(fruits)); //true

console.log(Array.isArray(person)); //false
