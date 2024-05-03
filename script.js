let button1 = document.querySelector("#color1");
let button2 = document.querySelector("#color2");
let body = document.querySelector("body");

function setNewBackground() {
	body.style.background = "linear-gradient(to right, "
	+ button1.value + ", "
	+ button2.value + ")";
}

button1.addEventListener("change", function() {
	setNewBackground();
})

button2.addEventListener("change", function() {
	setNewBackground(); 
})
