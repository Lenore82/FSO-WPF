//Lenore Mills Wright
//March 13, 2014
//Expression: Industry

//Calculating the price to build a website based on $10 per page.
 
var pagePrice = 10; //fixed price per web page.
var imagePrice = 5; // fee per image to load on site.
var amtPage = prompt("Please enter the amount of pages requested."); //user will enter the amount of pages requested.
var amtImage = prompt("Please enter the amount of images you will like to use on site.");
var siteImage = imagePrice *= amtImage; // total cost of images
var sitePage = pagePrice *= amtPage; //using assignment operators to determine the price of website for user via alert. 
var sitePrice = sitePage += siteImage;
console.log(sitePrice) //checking formula
alert ("Your website will cost" + " "+sitePrice+ " "+"to complete."); // informing user total price to create site. 
 