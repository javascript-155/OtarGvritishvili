//functions in js

function sayHello() {
    return "Hello World!";
}

// alert(sayHello());


//calculator function
function calculator(num1, num2, operator="+") {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "invalid operator"
    }
}

console.log(calculator(2, 3, "*"));


//function 
let 