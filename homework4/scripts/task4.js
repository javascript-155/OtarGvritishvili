/*
ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული 
რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და 
პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ 
უნდა დააბრუნოს 5*5*5 ანუ 125.
*/


let number = Number(prompt("Enter the number!"));
let power = Number(prompt("enter the power!"));

function numberPower (number, power) {
    if (power == 0) {
        let result = 1;
        return result;
    } else if (power !== 0) {
        let result = 1;

// By using while loop

        // count = 0;
        // while(count < power) {
        //     result = result * number;
        //     count++;
        // };

// By using for loop

        for(let count = 0; count < power; count++) {
            result = result * number;
        };
        return result;
    };
};

alert(numberPower(number, power));