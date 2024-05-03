let button1 = document.querySelector("#color1");
let button2 = document.querySelector("#color2");
let randomButton = document.querySelector("#random");
let body = document.querySelector("body");
let h3 = document.querySelector("h3"); 

let hexValues = ['0', '1', '2', '3', '4', 
				'5', '6', '7', '8', '9', 
				'A', 'B', 'C', 'D', 'E', 'F'];

function generateRandomHex() {
	return hexValues[Math.floor(Math.random() * 16)];
}

function generateRandomColor() {

	let colorStr = "#"

	for (let i = 0; i < 6; i++)
		colorStr += generateRandomHex();

	return colorStr;
}

function setNewBackground() {
	body.style.background = "linear-gradient(to right, "
	+ button1.value + ", "
	+ button2.value + ")";

	h3.innerText = body.style.background + ";";
}

function setRandomBackground() {

	button1.value = generateRandomColor();
	button2.value = generateRandomColor();
	
	body.style.background = "linear-gradient(to right, "
	+ button1.value + ", "
	+ button2.value + ")";

	h3.innerText = body.style.background + ";";
}

button1.addEventListener("change", setNewBackground);
button2.addEventListener("change", setNewBackground);
randomButton.addEventListener("click", setRandomBackground);
