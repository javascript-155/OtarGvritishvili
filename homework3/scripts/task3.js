/*
    3. შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა კონკრეტული რიცხვი მოქცეული მომხმარებლის მიერ შეყვანილ დიაპაზონში,
    ფუნქციამ უნდა მიიღოს სამი პარამეტრი, 1. რიცხვი, 2. დიაპაზონის საწყისი რიცხვი, 3. დიაპაზონის ბოლო რიცხვი.
*/

let num1 = prompt("Enter a number!");
let num2 = prompt("Enter the starting number of the range!");
let num3 = prompt("Enter the final number of the range!");


function Checker(num1, num2, num3) {

    if (num1 > num2 && num3 > num1) {
        return ("The number is within the selected range!");
    } 
    else {
        return ("The number falls within the selected range!");
    };
};
alert(Checker(num1, num2, num3));
