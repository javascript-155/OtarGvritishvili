/*
შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. 
შეასრულეთ ეს დავალება ციკლების მეშვეობით.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// By using the while loop

let index = 2;
while (index <= numbers.length) {
    console.log(numbers[index]);

    index = index + 3;
};

// By using the for loop

for (let count = 2; count < numbers.length; count = count + 3) {
    console.log(numbers[count]);
};