//Lenore Mills Wright
//March 26, 2014
//Function: Worksheet


//Calculate the Circumference of a circle.
//c=(2*3.14)r

var circumference= calCircum(5);
function calCircum(radius){ //the parameter for circumference
	var circle = (2*3.14) * radius; //declared variable to pass radius thru.
	return  circle
}
console.log("The circumference of the circle is"+" "+ circumference)



//Calculate how many bee stings are needed to kill an animal in a function.

var beeStings = function(deathWght){
	var death = 8.666667 * deathWght; //the amount on sting to the weight of animal.
	return death; //The amount needed kill animal.
}
var d= beeStings(40) //invoking based on weight being 40lbs.
console.log("It takes"+" "+ d +" "+"bee stings to kill this animal.")