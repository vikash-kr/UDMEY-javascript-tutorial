var player1 = document.getElementById("p1");
var player2 = document.querySelector("#p2");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Dis");
var p2Display = document.getElementById("p2Dis");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var para = document.querySelector("p");
var totalMatch = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

player1.addEventListener("click",function(){
	if(!gameOver){
	p1score ++;
	if(p1score === winningScore){
		gameOver = true;
		p1Display.classList.add("winner");
	}
	p1Display.textContent = p1score;
	}
});

player2.addEventListener("click",function(){
	if(!gameOver){
	p2score ++;
	if(p2score === winningScore){
		gameOver = true;
		p2Display.classList.add("winner");
	}
	p2Display.textContent = p2score;
	}
});

resetButton.addEventListener("click",function(){
	resetIt();
});

function resetIt(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = 0 ;
	p2Display.textContent = 0 ;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};

numInput.addEventListener("change", function(){
	totalMatch.textContent = this.value;
	winningScore = Number(this.value);
	resetIt();
});

resetButton.addEventListener("mouseover", function(){
	resetButton.style.color = "red";
});

resetButton.addEventListener("mouseout", function(){
	resetButton.style.color = "black";
});