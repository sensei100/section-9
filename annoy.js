var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1 && answer !== "yeah") {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");


