/*
შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს 
და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, 
მაგ. 5! => 2*3*4*5 = 120, 
*/

let number = Number(prompt("Enter a number"));

function factorialCalculator(number) {

    if (number == 1) {
        let result = 1;
        return result;
    } else if( number !== 1) {
        let result = 1
        let count = 1;
        while (count <= number) {
            result = result * count;
            count ++;
         };
         return result;
    };
};
console.log(factorialCalculator(number));
