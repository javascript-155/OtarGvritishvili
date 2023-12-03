/*
შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. 
მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
*/

// By using the while loop

let count = 10;
while (count > 0) {
    console.log(count);

    count = count - 1;
};


// By using the for loop

for(let number = 10; number >= 1; number = number - 1) {
    console.log(number);
};