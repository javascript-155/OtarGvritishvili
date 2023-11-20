let blogTitle = document.getElementById("blogTitle");
blogTitle.innerHTML = "This is a new blog title";

let comments = document.getElementsByClassName("commentList");
comments[0].innerHTML = "This is a new comment";

let blogDesc = document.getElementsByTagName("p");

let selectWithQuerySelector = document.querySelector("#blogTitle");

let selectWithQuerySelectorAll = document.querySelectorAll(".commentList");

let visitLink = document.querySelector("a");

console.log(blogDesc[0].innerHTML);