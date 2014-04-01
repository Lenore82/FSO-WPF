//Lenore Mills Wright
//March 29, 2014
//Functions: Wacky

//Check process of candy digestion in kids.  

var candyType =  prompt("Enter the type of candy, Hard or Soft?");
var numberPieces = prompt("How many pieces was found?");
var hardCandy = "Hard"
var softCandy = "Soft"

function avoidSugar(){ //function for warn user about cavities.
	console.log("Check for cavities.");
}

if (candyType = hardCandy){
	avoidSugar(candyType)
		alert("Check for cavities!")
}else if(numberPieces > 3){
	console.log("Head for the hills!")
	alert("Head for the hills!")
}else{ 
	console.log("It's still safe! They only had"+numberPieces+" "+"of"+ candyType)
	alert("It's still safe! They only had"+numberPieces+" "+"of"+ candyType)
	}


