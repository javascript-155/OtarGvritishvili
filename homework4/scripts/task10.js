/*
შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: 
მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, 
თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
*/

let email = prompt("Please enter your E-mail:  ' name.lastName@gamil.com '");
function emailDefender(email) {
    let lastName = email.slice(email.indexOf('.') + 1, email.indexOf('@'));
    let lastNameArray = lastName.split("");
    let lastNameArrayLength = lastNameArray.length;
    let protectedLastname = [];
    for(let i = 0; lastNameArrayLength > i; i++) {
        protectedLastname.push(".");
    };
    let arrayToString = protectedLastname.join("");
    let finalStep = email.replace(lastName, arrayToString);
    return finalStep;
};
alert(emailDefender(email));

