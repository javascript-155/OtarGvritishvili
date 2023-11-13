// array cloning methode

// slice
const originalArray = ['apple', 'orange', 'banana', 'mango', 'grapes'];
const copiedArray1 = originalArray.slice();

copiedArray1.pop();

console.log(originalArray);
console.log(copiedArray1);

//spred
let copiedArray2 = [...originalArray];
copiedArray2.shift();
console.log(copiedArray2);

//from
let copiedArray3 = Array.from(originalArray);

//concat
let copiedArray4 = [].concat(originalArray);
copiedArray4.pop();
console.log(copiedArray4);


//ამოწმებს კონკრეტული მონაცემი მასივია თუ არა
let isDataArray = Array.isArray(originalArray);
console.log(isDataArray);

 
