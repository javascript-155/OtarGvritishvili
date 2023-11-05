let array1 = ['George', 'luke', 1998, 15.98, true, false, null, undefined]; // მასივის შექმნა

console.log(array1); //მასივის გამოძახება კონსოლურ სივრცეში
console.log(array1[0]); //მასივის პირველი ელემენტის (ინდექსის) გამოძახება კონსოლურ სივრცეში

array1.push('new value'); //ახალი ელემენტის ჩამატება მასივის ბოლოში

// array1.push(prompt('second value'));
// console.log(array1);

array1.pop(); //ელემენტის წაშლა მასივის ბოლოში
array1.shift(); //ელემენტის წაშლა მასივის თავში
array1.unshift('start value'); // ელემენტის ჩამატება მასივის თავში
console.log(array1);

array2 = ['Tomas', 'Jhon', 'James', 'Luke', 'George', 'Paul', 'Ringo'];

let concatArray = array1.concat(array2); //მასივების გაერიანება კონკატის საშულებით

console.log(concatArray);

let sliceArray = array2.slice(2, 5); // მასივის დაყოფა ნაჭრებად
console.log(sliceArray);

let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
let splicedFruits = fruits.splice(3, 1); // მასივის ფილტრაცია (ელემენტის ამოღება)
console.log(splicedFruits);

console.log(fruits.length); // მასივის სიგრძე