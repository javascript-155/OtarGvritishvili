// serTimeout an setInterval

/*
setTimeout(() => {
    console.log("this is a delayed message")
}, 3000);

console.log("this is a massage that will me printed immadiately")
*/


let counter = 0;

let intervalId = setInterval(() => {
    counter ++;
    console.log(`executed every 2 seconds count: ${counter}`);

    if (counter === 5){
        clearInterval(intervalId)
    }
}, 2000);