/*
შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. 
მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
*/
let testString = prompt("Please enter string 'Hello World'")
function stringToArray(testString) {
    return (testString.split(" "));
}
console.log(stringToArray(testString));
alert(stringToArray(testString));
