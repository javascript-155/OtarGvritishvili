function one() {
    let numberOne = document.getElementById("one").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberOne;
};
function two() {
    let numberTwo = document.getElementById("two").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberTwo;
};
function three() {
    let numberThree = document.getElementById("three").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberThree;
};
function four() {
    let numberFour = document.getElementById("four").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberFour;
};
function five() {
    let numberFive = document.getElementById("five").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberFive;
};
function six() {
    let numberSix = document.getElementById("six").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberSix;
};
function seven() {
    let numberSeven = document.getElementById("seven").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberSeven;
};
function eight() {
    let numberEight = document.getElementById("eight").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberEight;
};
function nine() {
    let numberNine = document.getElementById("nine").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberNine;
};
function zero() {
    let numberZero = document.getElementById("zero").innerHTML;
    let oldScreenValue = document.getElementById("display").value;
    document.getElementById("display").value = oldScreenValue + numberZero;
};
function point() {
    let symbolPoint = document.getElementById("point").innerHTML;
    let oldScreenValue = document.getElementById("display").value;

    if(oldScreenValue == "") {
        return;
    };

    count = 0;
    for(let symbol of oldScreenValue) {
        if(symbol == ".") {
            count++;
        }
    }

    if(count > 0) {
        return;
    }

    document.getElementById("display").value = oldScreenValue + symbolPoint;
};
function annul() {
    document.getElementById("display").value = "";
};

function plus() {
    let symbolPlus = document.getElementById("plus").innerHTML;
    let oldScreenValue = document.getElementById("display").value;

    if(oldScreenValue == "") {
        return;
    }

    count = 0;
    for(let symbol of oldScreenValue) {
        if (symbol == "+") {
            count++;
            return console.log(count);
        }
    }

    if(count > 0) {
        return;
    }

    document.getElementById("display").value = oldScreenValue + symbolPlus;
}

function minus() {
    let symbolMinus = document.getElementById("minus").innerHTML;
    let oldScreenValue = document.getElementById("display").value;

    if(oldScreenValue == "") {
        return;
    }

    count = 0;
    for(let symbol of oldScreenValue) {
        if (symbol == "-") {
            count++;
        }
    }

    if(count > 0) {
        return;
    }

    document.getElementById("display").value = oldScreenValue + symbolMinus;
}

function multiply() {
    let symbolMultiply = document.getElementById("multiply").innerHTML;
    let oldScreenValue = document.getElementById("display").value;

    if(oldScreenValue == "") {
        return;
    }

    count = 0;
    for(let symbol of oldScreenValue) {
        if (symbol == "*") {
            count++;
        }
    }

    if(count > 0) {
        return;
    }

    document.getElementById("display").value = oldScreenValue + symbolMultiply;
}

function divide() {
    let symbolDivide = document.getElementById("divide").innerHTML;
    let oldScreenValue = document.getElementById("display").value;

    if(oldScreenValue == "") {
        return;
    }

    count = 0;
    for(let symbol of oldScreenValue) {
        if (symbol == "/") {
            count++;
        }
    }

    if(count > 0) {
        return;
    }

    document.getElementById("display").value = oldScreenValue + symbolDivide;
}


function equal() {
    // let symbolEqual = document.getElementById("equal").innerHTML;
    let oldScreenValue = document.getElementById("display").value;

    if(oldScreenValue.includes("+")) {
        let oldScreenValueToArray = oldScreenValue.split('+');
        let sum = 0;
        for (let number of oldScreenValueToArray) {
            sum = sum + Number(number);
        };
        document.getElementById("display").value = sum;
    } else if(oldScreenValue.includes("-")) {
        let oldScreenValueToArray = oldScreenValue.split('-');
        let difference = oldScreenValueToArray[0];
        for(let i = 1; i < oldScreenValueToArray.length; i++) {
            difference = difference - parseInt(oldScreenValueToArray[i]);
        }
        document.getElementById("display").value = difference;
    } else if(oldScreenValue.includes("*")) {
        let oldScreenValueToArray = oldScreenValue.split('*');
        let multiply = 1;
        for(let number of oldScreenValueToArray) {
            multiply = multiply * Number(number);
        }
        document.getElementById("display").value = multiply;
    } else if(oldScreenValue.includes("/")) {
        let oldScreenValueToArray = oldScreenValue.split('/');
        let division = oldScreenValueToArray[0];
        for(let i = 1; i < oldScreenValueToArray.length; i++) {
            division = division / parseInt(oldScreenValueToArray[i]);
        }
        document.getElementById("display").value = division;
    }
};


