//Lenore Mills Wright
//Due: March 13, 2013
//Assignment Expression_Personal

//Calculate the amount of payments needed to pay 6mths ahead for childcare. 
var wkCareFee = prompt("Please enter your weekly child care fee."); //User will enter the weekly fee for childcare. 
var amtMonth = prompt("Please enter the amount of months in advance you will like to pay.")//usser will enter the amount of mounths to calculate.
var ttlMthFee = wkCareFee * 4; //fixed variable for tottal amount for 1 month of care. 4 weeks is a month.
var ttlAmt = ttlMthFee * amtMonth; //multiply monthly fee by the amount of months. 
console.log(ttlAmt) //testing calculation
alert("You will need to pay"+" "+ttlAmt+" "+"in advance to become"+" "+amtMonth+"mths"+" "+"head.") //user will be alerted with final result.