var $ = function (id) { return document.getElementById(id); };

var calculateChange = function() {
	
	var cents = $("cents").value;	
		cents = parseInt(cents);
	var remainder;
	
	
	if (cents >= 0 & cents <= 99)
	{
		//number of quarters
		var quarters
		var quarterCents
		remainder = cents/25
		quarters = Math.floor(remainder)
		$("quarters").value = quarters
		quarterCents = parseInt(quarters)*25
		
		//number of dimes
		var dimes
		var dimeCents
		remainder = cents - (25*quarters)
		remainder = remainder/10
		dimes = Math.floor(remainder)
		$("dimes").value = dimes
		dimeCents = parseInt(dimes)*10
		
		//number of nickels
		var nickels
		var nickelCents
		remainder = cents - quarterCents - dimeCents
		remainder = remainder/5
		nickels = Math.floor(remainder)
		$("nickels").value = nickels
		nickelCents = parseInt(nickels)*5
		
		
		//number of pennies
		var pennies
		
		remainder = cents - quarterCents - dimeCents - nickelCents
		pennies = remainder
		$("pennies").value = pennies
		
		
	}
	
	else {
		alert("Please enter a valid number between 0 and 99");
	}
    
};

window.onload = function () {
    $("calculate").onclick = calculateChange;
};
