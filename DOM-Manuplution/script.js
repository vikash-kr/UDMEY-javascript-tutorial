// alert("Hello");

var tag = document.getElementById("highlight");

tag.classList.add("class_random");

//=====================
//Toggle background

var background = document.querySelector("button");

//method 1
// var isBlue = false;
// background.addEventListener("click", function(){
// 		if(isBlue){
// 			document.body.style.background = "white";
// 			isBlue = !isBlue;
// 		} else {
// 			isBlue = !isBlue;
// 			document.body.style.background = "#4286f4";
// 		}
		
// })

//method 2
background.addEventListener("click", function(){
	document.body.classList.toggle("background");
});