/*
6. ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა
*/

let action = "move";

switch (action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping");
        break;
    case "run":
        alert("You're running!");
        break;
    default:
        alert("Invalid action");
        break;
}