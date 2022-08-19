"use strict";
var $ = function(id) { return document.getElementById(id); };

/*Add local storage to store the user's input ONLY. 
When the browser is re-opened, it should retrieve and display the last input typed by the user.*/

//var transInput = []; //individual elements of the Array; transinput is an array, 
//var transOutput = [];

//retrieve a string from storage, but it's tryng to get an array
var displayTranslationInput = function() {
	//get user input from storage if previously loaded
	return localStorage.getItem("userInput", $("userInput").value);
	$("userInput").focus();	
};

var saveTranslationInput = function() {
	//saves user's input to local storage
	localStorage.setItem("userInput", $("userInput").value);
	$("userInput").focus();	
}

//Create a function that is called when the user clicks the button on your form
var processEntry = function() {
	
	//Create one local variable for the user input and another local variable for the user output.
	var uInput = $("userInput").value;
	var uOutput = $("translation").value;
	
	/*The function should use the DOM to read the user input in the top text area 
	and store it in the user input variable.*/
	
	//Validate the user input.
	if (uInput === "") {
		alert("User must enter valid input");		
	}
	else 
	{
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
}



/*Analyze each individual word in the words array (I recommend using the charAt() method.)
If the first letter is a vowel (A-E-I-O-U), the result is the word + "way". Do nothing more to this word!
If the first letter of the word is a consonant (i.e., not a vowel), or a cluster of consonants, move the consonant(s) to the end of the word and then add "ay".
You may ignore numbers and all punctuation marks such as periods, commas, exclamation points, and hyphens that the user may have typed.*/

/*Assemble all the Pig Latin-ized words back into a string using either the join() or concat() methods. 
(This is to show that you know how to use methods of the String object.) 
Then display this string in the user output text area using the DOM.*/


window.onload = function() {
    $("submit").onclick = saveTranslationInput, processEntry;
	$("userInput").focus();
	displayTranslationInput();
}