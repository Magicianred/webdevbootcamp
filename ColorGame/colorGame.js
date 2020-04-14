var numberOfSquares = 9
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easy");
// var hardButton = document.querySelector("#hard");
var randomHeadingBG = h1.style.backgroundColor = pickColor()
var button = document.querySelectorAll("button")
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ?	numberOfSquares = 6 : numberOfSquares = 9;
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#a324c9";
}

resetButton.addEventListener("click", function() {
	reset();
});


/*
easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numberOfSquares = 9;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(9);
	//pick a new random color frorm array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change the colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	//reset h1 background color
	h1.style.backgroundColor = pickColor();
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
});
*/

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
		var clickedColor = (this.style.backgroundColor);
	//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color
}

function pickColor(){
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
