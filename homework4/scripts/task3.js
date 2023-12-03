/*
მოცემული მასივიდან
let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. 
შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, 
ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
*/

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];

// By using the while loop
let namesWithoutBob = [];

let count = 0;

while(count < names.length) {
    if(names[count] !== "Bob") {
        namesWithoutBob.push(names[count]);
    }

    count++;
};
console.log(namesWithoutBob);


// By using the for loop

let namesWithoutBob2 = [];

for (let i = 0; i < names.length; i++) {
    if(names[i] != 'Bob') {
        namesWithoutBob2.push(names[i]);
    };
};
console.log(namesWithoutBob2);
