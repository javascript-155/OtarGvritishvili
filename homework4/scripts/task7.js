/*
შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს 
მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
*/

let textType = "javascript";

//#1
let replaceString = textType.replace("j", "J");
console.log(replaceString);

//#2
function upperCase(textType) {
    return (textType[0].toUpperCase() + textType.slice(1, textType.length));
};
console.log(upperCase(textType));