//Lenore Mills Wright
//March 31, 2014
//Conditional: Personal

//Determine how long it will take a toddler to go to sleep. 

var toddler = prompt("How old is your toddler?");
var timeOfLastNap = prompt("What was the time of his last nap?");

if(toddler<= 3 || timeOfLastNap >= 3){ //if toddler has not slept in 3 hrs or under 3 yrs
	console.log("Toddle will fall asleep with a good movie and a full belly.")
	alert("Toddle will fall asleep with a good move and a full belly.")
}else{ //if older than 3 yrs old or have slept with in the last 3 hrs.
	console.log("Your in for a long night!")
	alert("Your in for a long night!");
}