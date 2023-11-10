/*
switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, 
რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას 
გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
*/

let vegetables = prompt("Carrot or Broccoli");
switch (vegetables) {
case "Carrot":
alert("Hello");
break;
case "Broccoli":
alert("Welcome");
break;
};

/*
თუ ბოსტნეული(vegetables) არც ბროკოლია(broccoli) და არც სტაფილო (carrot) მაშინ გამოიტანეთ არცერთი (“Neither”)
*/

let vegetables2 = prompt("Carrot or Broccoli");
switch(vegetables2) {
    case "Broccoli":
        alert("Hello")
        break;
    case "Carrot":
        alert("Welcome")
        break;
    default:
        alert("Neither")
        break;
}

/*
შენიშვნა: ფოტოებზე არსებული კოდები გადაწერეთ და გამოტოვებული ადგილები შეავსეთ ინსტრუქციის მიხედვით.
*/