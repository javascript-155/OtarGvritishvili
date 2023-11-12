/*
შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები 
იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, 
Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და 
გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
მაგ.
1
2
3 Fizz
4
5 Buzz
6 Fizz
7
8
9 Fizz
10 Buzz
11
12 Fizz
13
14
15 FizzBuzz
… 100-მდე.
*/


// By using the while loop

let count = 1;
function numbers(count) {

    while(count <= 100) {
        if (count % 3 === 0) {
            if (count % 5 === 0) {
                console.log(count + " FizzBuzz");
            } else {
                console.log(count + " Fizz");
            }
        } else if (count % 5 === 0) {
            console.log(count + " Buzz");
        } else {
            console.log(count);
        }

        count++;
    };
    return;
};
numbers(count);


// By using the for loop

let number = 1;
function counts (number) {
    for(number; number <= 100; number++) {
        if (number % 3 === 0) {
            if (number % 5 === 0) {
                console.log(number + " FizzBuzz");
            } else {
                console.log(number + " Fizz");
            }
        } else if (number % 5 === 0) {
            console.log(number + " Buzz");
        } else {
            console.log(number);
        } 
    };
    return;
};
counts(number);
