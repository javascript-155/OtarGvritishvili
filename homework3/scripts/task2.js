/* 
 2. შექმენით ფუნქცია, რომელიც ცელსიუსში მიწოდებულ ტემპერატურას გადაიყვანს ფერენჰეიტში,
    1°C ტოლია 33.8°F -ის. (1°C × 9/5) + 32 = 33.8°F.
*/

let celsius = prompt("Enter celsius");

function fahrenheit(celsius) {
    return((celsius * 9/5) + 32);
}
alert(fahrenheit(celsius) + " °F");