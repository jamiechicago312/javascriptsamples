"use strict";
//variables related to pig latin
		/*	var vowels = ["a", "e", "i", "o", "u"]
			var cluster2 = ["pl", "pr", "bl", "br", "tr", "dr", "cl", "cr", "gl", "gr", "fl", "fr", "sk", "sl", "sm", "sn", "sp", "st", "sw", "tw", "dw", "qu", "gw"]
			var cluster3 = [ "thr", "shr", "scr", "spl", "spr", "str", "squ"];
		*/	
		
			//characters to analyze
			var first = word.substring(0,1);
			var two = word.substring(0,2);
			var three = word.substring(0,3);
			
		pass1 = function(word) {
			if (first == 'a') {
				word.slice(0,1);
				word.concat("way");
				transOutput.push(word);
			} 
			else if (first == "e") {
				word.slice(0,1);
				word.concat("way");
				transOutput.push(word);
			}  
			else if (first == "i") {
				word.slice(0,1);
				word.concat("way");
				transOutput.push(word);
			}  
			else if (first == "o") {
				word.slice(0,1);
				word.concat("way");
				transOutput.push(word);
			}  
			else if (first == "u") {
				word.slice(0,1);
				word.concat("way");
				transOutput.push(word);
			} 
			else if (two == "pl") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "pr") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "bl") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "br") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "tr") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "dr") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "cl") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "cr") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "gl") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "gr") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "fl") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "fr") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "sk") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "sl") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "sm") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "sn") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "sp") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "st") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "sw") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "tw") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			} 
			else if (two == "dw") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			}
			else if (two == "qu") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			}
			else if (two == "qw") {
				var Two = two
				word.slice(0,2);
				word.concat(Two, "ay");
				transOutput.push(word);				
			}
			else if (three == "thr") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else if (three == "shr") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else if (three == "scr") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else if (three == "spl") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else if (three == "spr") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else if (three == "str") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else if (three == "squ") {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else 
			{
				var First = first
				word.slice(0,1);
				word.concat(First, "ay")
				transOutput.push(word);
			}
				
					
					
					
					
					
					
							var cluster3 = [ "thr", "shr", "scr", "spl", "spr", "str", "squ"];


			else if (three == cluster3) {
				var Three = three
				word.slice(0,3);
				word.concat(Three, "ay");
				transOutput.push(word);
			}
			else {
				var First = first
				word.slice(0,1);
				word.concat(First, "ay")
				transOutput.push(word);