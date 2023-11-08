// switch cases 

let isDoorOpened = prompt("Is the door opened?");

switch (isDoorOpened) {
    case "yes":
        alert("I'll go out");
        break;
    case "no":
        alert("I'll stay home.");
        break;
    default:
        alert("Please answer yes or no");
        break;
}

let guessTheNumber = prompt("Guess the number:");
let numbers = [1, 2, 3, 4, 5, 6];

switch(numbers.includes(Number(guessTheNumber))) {
    case true:
        alert("you guess the number!");
        break;
    case false:
        alert("you didn't yuess the number :(");
        break;
    default:
        alert("please enter a number.");
        break;
}