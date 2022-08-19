"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var processEntry = function ()
{
	var income = $("income").value;
	var taxOwed
	
	income = parseFloat(income); //convert user input to a decimal
	taxOwed = parseFloat(taxOwed); //convert tax to decimal
	
	if (income > 0)
	{
		var calculateTax = function(income)
		{
			if (income > 0 && income <= 9225) {
				taxOwed = (income * .1)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
			else if (income > 9225 && income <= 37450) {
				taxOwed = 922.50 + ((income - 9225) * .15)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
			else if (income > 37450 && income <= 90750) {
				taxOwed = 5156.25 + ((income - 37450) * .25)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
			else if (income > 90750 && income <= 189300) {
				taxOwed = 18481.25 + ((income - 90750) * .28)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
			else if (income > 189300 && income <= 411500) {
				taxOwed = 46075.25 + ((income - 189300) * .33)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
			else if (income > 411500 && income <= 413200) {
				taxOwed = 119401.25 + ((income - 411500) * .35)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
			else {
				taxOwed = 119996.25 + ((income - 413200) * .396)
				taxOwed = taxOwed.toFixed(2)
				return taxOwed
			}
		}
	}
	else
	{
		alert("Income must be a valid number greater than zero")
	}
	
	$("tax").value = calculateTax(income)
}


window.onload = function () {
    $("calculate").onclick = processEntry;
	$("income").focus();
};