// local storage in javascript

//add new data to loacal storage

localStorage.setItem('user', 'Hanry');

//get data from local storage
let user = localStorage.getItem('user');
console.log(user);

//remove data form local storage\
localStorage.removeItem('blah');

// clear all data from local storage
// localStorage.clear();

//-------------------------------------------------------------------------------//

//add new data to session storage

sessionStorage.setItem('user', 'Hanry');

//get data from session storage
let user1 = sessionStorage.getItem('user');
console.log(user1);

//remove data form local storage\
sessionStorage.removeItem('blah');

// clear all data from session storage
// sessionStorage.clear();