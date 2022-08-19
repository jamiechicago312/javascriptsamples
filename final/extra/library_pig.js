"use strict";

var translateToPig = function(uInput) {
	
	//transInput.toLowerCase();
	/* for loop, for in loop, to lower case for every element in an array*/
	
	//transLowerCase = transInput.toLowerCase(),split("|");
	transOutput = []
	
	/*make string all lower case*/
	uInput.toLowerCase();
	
	//Turn string into Array
	var transInput = uInput.split("|");
	
	var vowels = ["a", "e", "i", "o", "u"]
	var cluster2 = ["pl", "pr", "bl", "br", "tr", "dr", "cl", "cr", "gl", "gr", "fl", "fr", "sk", "sl", "sm", "sn", "sp", "st", "sw", "tw", "dw", "qu", "gw"]
	var cluster3 = [ "thr", "shr", "scr", "spl", "spr", "str", "squ"];
	
	var first = transInput.substring(0,1);
	var two = transInput.substring(0,2);
	var three = transInput.substring(0,3);
	
	if (first == vowels) {
		transInput.slice(0,1);
		transOutput = transInput.concat("way");
		
	}
	else if (two == cluster2) {
		var Two = two
		transInput.slice(0,2);
		transOutput = transInput.concat(Two, "ay");		
	}
	else if (three == cluster3) {
		var Three = three
		transInput.slice(0,3);
		transOutput = transInput.concat(Three, "ay");
	}
	else {
		var First = first
		transInput.slice(0,1);
		transOutput = transInput.concat(First, "ay")
	};
	
	transOutput.join(" ");
}