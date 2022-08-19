"use strict";
var $ = function(id) { return document.getElementById(id); };

/*Add local storage to store the user's input ONLY. 
When the browser is re-opened, it should retrieve and display the last input typed by the user.*/

var transInput = [];
var transOutput = [];

var displayTranslationInput = function() {
	//get user input from storage if previously loaded
	if (transInput.length === 0) {
		var storage = localStorage.getItem("PLTinput") || "";
		if (storage === "") { 
			return []; 
		} else {
			return storage.split("|");
		}
	transInput = getStorage("PLTinput");
	}
	
	//set focus on user input box
	$("userInput").focus();	
};

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
		if (Array.isArray(arr)) {
			var storageString = arr.join("|"); 
			localStorage.setItem("PLTinput", storageString);
		}
};
	}


/*Analyze each individual word in the words array (I recommend using the charAt() method.)
If the first letter is a vowel (A-E-I-O-U), the result is the word + "way". Do nothing more to this word!
If the first letter of the word is a consonant (i.e., not a vowel), or a cluster of consonants, move the consonant(s) to the end of the word and then add "ay".
You may ignore numbers and all punctuation marks such as periods, commas, exclamation points, and hyphens that the user may have typed.*/

/*Assemble all the Pig Latin-ized words back into a string using either the join() or concat() methods. 
(This is to show that you know how to use methods of the String object.) 
Then display this string in the user output text area using the DOM.*/


window.onload = function() {
    $("submit").onclick = processEntry;
	$("userInput").focus();
	displayTranslationInput();
}