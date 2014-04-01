//Lenore Mills Wright
//March 31,2014
//Conditional: Industry

//Determine the processing timeframe for a hosting service to propergate your service.


var bandWidth = prompt("Please enter requested bandwidth.");
var packageType = prompt("Please enter package amount.");
 

if(bandWidth <= 8){ //any bandwidth less than 8GB of resource will be avail no quicker than an hour. 
	console.log("Your hosting service will be available in 1 hour based on the" +bandWidth+"GB of services ordered.")
	alert("Your hosting service will be available in 1 hour based on the" +bandWidth+"GB of services ordered.")
}else if(packageType >= 1000) { //Any packaged priced at 1TB or more will process less than a hour based on expedition.
	console.log("Service will available in 15mins with Business solution service.");
	alert("Service will available in 15mins with Business solution service.");
}else{ //If user select anything less than what is offered, will be prompt to re order service.
	console.log("Please re-enter your order.");
	alert("Please re-enter your order.");
}