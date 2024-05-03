let button1 = document.querySelector("#color1");
let button2 = document.querySelector("#color2");
let body = document.querySelector("body");
let h3 = document.querySelector("h3"); 

function setNewBackground() {
	body.style.background = "linear-gradient(to right, "
	+ button1.value + ", "
	+ button2.value + ")";

	h3.innerText = body.style.background + ";";
}

button1.addEventListener("change", setNewBackground);

button2.addEventListener("change", setNewBackground);
