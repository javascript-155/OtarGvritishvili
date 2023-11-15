/*
შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მომხმარებლის მიერ შეყვანილ სტრიქონში. (გამოიყენეთ prompt()-მონაცემების შესაყვანად.)
*/

let string = prompt("Please enter some words and I will return to you which of them is the longest");
let stringToArray = string.split(" ");
let main = [" "];
let equalMain = [];


let finder = stringToArray.forEach(function (index) {

    if (index.length > main[0].length) {
        main.push(index);
        main.shift();
    } else if (index.length = main[0].length){
        equalMain.push(index);
    };

});


let finder2 = equalMain.forEach(function (index) {
    if (index.length === main[0].length) {
        main.push(index);
    }
})
alert("Longest word(s): " + main.join(' , '));
