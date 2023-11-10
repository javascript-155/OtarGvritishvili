// For loops in javascript


/*
for (let count = 0; count < 10; count = count + 1) {
    if (count % 2 === 0) {
    console.log(count);
    };
};
*/

/*
let arrayOfAnimals = ["cat", "dog", "fish", "zebra", "ape", "lion", "tiger", "bear", "alephant", "monkey"];

for (let index = 0; index < arrayOfAnimals.length; index++) {
    if (index % 2 !== 0) {
        console.log(arrayOfAnimals[index]);
    };
}
*/

/*
let longestEnglishWord = "ahshgdhsjdhbfjhdsvbfjdshbfjidhfjhhgvfshd";

for (let index = 0; index < longestEnglishWord.length; index++) {
    console.log(longestEnglishWord[index]);
};
*/

for (let number = 0; number <= 10; number++) {
    if(number % 2 === 0) {
        console.log(number);
        break;
    }
}

for (let number = 0; number <= 10; number++) {
    if(number % 2 === 0) {
        continue;
    }
    console.log(number);
}
