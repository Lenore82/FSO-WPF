//Lenore Mills Wright
//March 27, 2014
//Assignment: Functions: Personal

//Calculate the required budget for a Christmas list.

var budgetMin = prompt("Please enter your spending limit minimum."); 
var budgetMax = prompt("Please enter your maximum spending limit.");
var itemTotal = prompt("Please enter total amount of purchase. ");

function fixBudget(){//create function that will generate a result of how much amount to remove from purchase only if budget is over. 
	var correctExpense = itemTotal - budgetMax; //user total purchase amount minus budget max.
	return correctExpense //result to be printed within conditions.
	
}
var tip = fixBudget() //variable assigned to function for budget correction.


if(itemTotal>budgetMax){ //if total purchase exceed budget function will be invoked.
	fixBudget()	
	console.log("To stay within means remove"+" "+"$"+tip+" "+" from your purchase total.") 
}else{ 
console.log("Good Job! your are within your budget")
}
