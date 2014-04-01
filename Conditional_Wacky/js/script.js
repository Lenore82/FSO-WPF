//Lenore Mills Wright
//March 31, 2014
//Conditonal: Wacky

//Determine if a candle is good quality or not. 
var candleBurn = prompt("How many days did your candle burn.")

if(candleBurn<=7){//If candle burns more than 7 days...
	console.log("That's a great candle")
	alert("That's a great candle")
}else{ //If candle burns less than 7 days there is a problem.
	console.log("Lesson learned, that store doesn't sell quality condles.")
	alert("Lesson learned, that store doesn't sell quality condles.")
}