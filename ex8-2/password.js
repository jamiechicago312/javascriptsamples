"use strict";
var $ = function(id) { return document.getElementById(id); };

    //var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@"; 
	//var charsLength = chars.length //so the random max will be the chars amount

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random;
    }
    return random;
};

var generatePassword = function() {
    $("password").value = ""; // clear previous entry
    
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@"; 
	var charsLength = chars.length
	//will need charAt() later
	//will need concat() later
	
	//use properties of strings, determine length, pick random characters from string, concatinate
    
	var passLength = $("num").value //use this to determine how many times to run code
	
	//Check if it's a positive number
	if (passLength <= 0 || isNaN(passLength))
	{
		alert("Please enter a valid number");
	}
	else
	{		

		//$("password").value = getRandomNumber(2)
		
		//do-while loop
		var result = "";
		var i = 0;
		
		do
		{
			i = i + 1
			var piece	//first new character of password
			var num		//random number
			
			num = getRandomNumber(parseInt(charsLength));
			piece = chars.charAt(num);
			result = result.concat(piece);
			$("password").value = result
		}
		while (i < parseInt(passLength));
	}
};

var clearFields = function() {
    $("num").value = "";
    $("password").value = "";
    $("num").focus();
};

window.onload = function() {
    $("generate").onclick = generatePassword;
    $("clear").onclick = clearFields;
    $("num").focus();
};