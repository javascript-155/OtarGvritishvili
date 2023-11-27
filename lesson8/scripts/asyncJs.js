const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Async data";
            resolve(data);
        }, 2000);
    });
};

fetchData().then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})

console.log("I am the first!!!");