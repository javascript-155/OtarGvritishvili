//js event listener

let submitBtn = document.getElementById("myBtn");

submitBtn.addEventListener("click", function () {
    document.getElementById("result").innerHTML = "Button clicked"
});

submitBtn.addEventListener("click", buttonClick);
function buttonClick() {
    document.getElementById("result").innerHTML = "button clicked"
};