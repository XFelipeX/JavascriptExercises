var button = document.querySelector(".button");
var body = document.querySelector("body");
var cores = ["red", "green", "black", "yellow", "pink", "blue", "brown", "grey"];

button.addEventListener("click",
    changeBackground);

function changeBackground() {
    var cor = parseInt(Math.random() * cores.length);

    body.style.background = cores[cor];
}