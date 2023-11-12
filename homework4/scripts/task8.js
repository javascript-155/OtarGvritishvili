/*
შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. 
მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ 
this string is not blank-ს თუ ცარიელი არაა.
*/


let testString = prompt("Please enter some words");
function blankStringChecker(testString) {
    if(testString.length > 0) {
        return "This string is not blank!";
    } else {
        return "This string is blank :)";
    }
};
alert(blankStringChecker(testString));