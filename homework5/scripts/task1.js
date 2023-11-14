/*
შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მომხმარებლის მიერ შეყვანილ სტრიქონში. (გამოიყენეთ prompt()-მონაცემების შესაყვანად.)
*/

let string = "i love gam";
let stringToArray = string.split(" ");
let main = [];
let mainMain= [];


console.log(stringToArray);

let finder = stringToArray.filter(function (index) {
    // console.log(index.length);
    if (index.length > index.length) {
        main.unshift(index);
    }
});
console.log(main);
// console.log(recycle);




// else if (index.length === 0) {
//     return alert("please enter some words!");
// } else if (index.length > main[0].length && index.length === index.length) {
//     main.unshift(index);
//     main.pop();
// } else if (index.length === main[0].length) {
//     main.unshift(index);
// } 







// function finder () {
//     count = 0;
//     while (count < stringToArray.length) {
//         let eachArrayes = stringToArray[count];
//         let eachArrayLengthes = eachArrayes.length;
//         console.log(eachArrayLengthes);

//         count = count + 1;
//     }
// }
//     finder();


