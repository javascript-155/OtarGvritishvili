// high order functions

// filet method

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let moreThanFive = arrayOfNumbers.filter((number) => number > 5);
console.log(moreThanFive);

// map method
//v1
let multipiedArray = arrayOfNumbers.map((number) => number * 2);
//v2
let multipiedArrayV2 = arrayOfNumbers.map(function (number) {
    return number * 2;
});

console.log(multipiedArray);
console.log(multipiedArrayV2);

//reduce method
//v1
let sumOfNumbers = arrayOfNumbers.reduce((accumlator, currentValue) => {return accumlator + currentValue});

//v2
let sumOfNumbersV2 = arrayOfNumbers.reduce(function (accumlator, currentValue) {
    return accumlator + currentValue;
});

console.log(sumOfNumbers);
console.log(sumOfNumbersV2);

// forEach method

arrayOfNumbers.forEach((number) => {
    if(number > 5) {
    console.log(number);
    }
});

//analog of
for(let number of arrayOfNumbers) {
    // console.log(number);
    if (number > 5) {
        console.log(number);
    }
}