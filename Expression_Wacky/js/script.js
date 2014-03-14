// Lenore Mills Wright
//March 13, 2014
//Expression: Wacky

//Calculating the amount of money the Tooth-Fairy will give based on collection at visit.
var tthIncisors = 1 //the cost of front teeth is 5 cents.
var tthMolars= 5 //the cost of your back choppers is 10 cents.
var fairyInput = prompt("Please enter the amount of molars collected from visit ?") //input from Fairy with amount of Molars.
var fairy2ndInput = prompt("Please enter the amount of incisors collected from visit ?") //input from Fairy with the amount of Incisors.
var firstAddUp = fairyInput *= tthMolars; //multiplying the molar fee to the input amount. 
var secAddUp = fairy2ndInput *= tthIncisors; //multiplyinh the incosr fee to the input amount.
var ttlAmtPaid = firstAddUp += secAddUp; //calculating the amount child will receive based on Fairy input.
alert(" You will recieve"+" "+"$"+ttlAmtPaid+ " "+"for the teeth collected!"); //Alert to child 
