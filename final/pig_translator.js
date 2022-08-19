"use strict";
var $ = function(id) { return document.getElementById(id); };
 

var displayInput = function() {
	//get user input from storage if previously loaded
	$("userInput").value = localStorage.getItem("userInput");
	$("userInput").focus();	
};

var saveInput = function() {
	//saves user's input to local storage
	localStorage.setItem("userInput", $("userInput").value);
	$("userInput").focus();	
}

//Create a function that is called when the user clicks the button on your form
var processEntry = function() {
	
	saveInput();
	
	//Create one local variable for the user input and another local variable for the user output.
	var uInput = $("userInput").value;
	
	/*The function should use the DOM to read the user input in the top text area 
	and store it in the user input variable.*/
	
	//Validate the user input.
	if (uInput === "") {
		alert("User must enter valid input");		
	}
	else 
	{
		
		
		var transOutput = []
		
		/*make string all lower case*/
		uInput.toLowerCase();
		
		//Turn string into Array
		var transInput = uInput.split(" ");
		
		
		for (var i=0; i < transInput.length; i++)
		{
			//turn each element into a string to be analyzed
			var word = transInput[i].toString();
			
			//characters to analyze
			var first = word.substring(0,1);
			var two = word.substring(0,2);
			var three = word.substring(0,3);
			
			//analyze if vowel
			var Word = "";
			
			if (first == 'a') {
				Word = word.slice(1);
				Word = Word.concat("way");
				transOutput.push(Word);
			} 
			else if (first == "e") {
				Word = word.slice(1);
				Word = Word.concat("way");
				transOutput.push(Word);
			}  
			else if (first == "i") {
				Word = word.slice(1);
				Word = Word.concat("way");
				transOutput.push(Word);
			}  
			else if (first == "o") {
				Word = word.slice(1);
				Word = Word.concat("way");
				transOutput.push(Word);
			}  
			else if (first == "u") {
				Word = word.slice(1);
				Word = Word.concat("way");
				transOutput.push(Word);
			} 
			//analyze if double consonant
			else if (two == "pl") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "pr") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "bl") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "br") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "tr") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "dr") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "cl") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "cr") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "gl") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "gr") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "fl") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "fr") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "sk") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "sl") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "sm") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "sn") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "sp") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "st") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "sw") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "th") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "tw") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			} 
			else if (two == "dw") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			}
			else if (two == "qu") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			}
			else if (two == "qw") {
				var Two = two
				Word = word.slice(2);
				Word = Word.concat(Two, "ay");
				transOutput.push(Word);				
			}
			//analyze if triple consonant
			else if (three == "thr") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			else if (three == "shr") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			else if (three == "scr") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			else if (three == "spl") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			else if (three == "spr") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			else if (three == "str") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			else if (three == "squ") {
				var Three = three
				Word = word.slice(3);
				Word = Word.concat(Three, "ay");
				transOutput.push(Word);
			}
			//then must be single consonant
			else 
			{
				var First = first
				Word = word.slice(1);
				Word = Word.concat(First, "ay")
				transOutput.push(Word);
			}
				

		};
		//make array into string, put string into answer box
		var stringOutput = "";
		stringOutput = transOutput.join(" ");
		$("translation").value = stringOutput;
	};
	};


window.onload = function() { //one element per event per handlers
    $("submit").onclick = processEntry; //event listener; animation for like a mouse as an EX
	$("userInput").focus();
	displayInput();
}