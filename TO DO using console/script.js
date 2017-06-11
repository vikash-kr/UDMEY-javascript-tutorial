alert("new OR list OR del OR quit");


var todo = ["BUY NEW MIKE"];
var input = prompt("What woud you like to do ?");


while(input !== "quit"){

	if (input=== "list"){
			console.log("*********");
			todo.forEach(function(todos, i){
				console.log(i + ": " + todos);
			}); 
		}
	else if(input === "new"){
		var newTodo = prompt("Enter new todo.");
		todo.push(newTodo);
		console.log("Added");
	}
	else if(input = "del"){
		var index = prompt("Enter index of item");
		todo.splice(index, 1);
		console.log("Deleted");
	}

	input = prompt("What woud you like to do ?");
}
console.log("OKK, Bye !!!");


// var body = document.querySelector("body");
// var isBlue = false;
// setInterval(function(){
// 		if(isBlue){
// 			document.body.style.background = "white";
// 		} else {
// 			document.body.style.background = "#4286f4";
// 		}
// 		isBlue = !isBlue;
// 	}, 1000 );


