"use strict";
var $ = function(id) { return document.getElementById(id); };

var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

//when radio button selected, text labels change + text box cleared

var toCelsius = function () //use Node to change labels
{
	if ($("to_celsius").checked) 
	{
	var inputF = $("degree_label_1")
	var outputC = $("degree_label_2")
	inputF.firstChild.nodeValue = "Enter F Degrees:";
	outputC.firstChild.nodeValue = "Degrees Celsius:";
	clearTextBoxes ();
	$("degrees_entered").focus();
	}
}

var toFahrenheit = function () //use Node to change labels
{
	if ($("to_fahrenheit").checked)
	{
	var inputC = $("degree_label_1")
	var outputF = $("degree_label_2")
	inputC.firstChild.nodeValue = "Enter C Degrees:";
	outputF.firstChild.nodeValue = "Degrees Fahrenheit:";	
	clearTextBoxes ()
	$("degrees_entered").focus();
	}
}


var convertTemp = function () //put formulas to convert temps here, if statements
{
	var input = $("degrees_entered").value
		input = parseFloat(input)
	
	//I tried this before; I had the running code as the else; why doesn't something like this work?
	//if (input == NaN)
	//{
	//	alert("You must enter a valid number for degrees.")
	//} [else run the code]
	
	if (input >= 0 | input < 0)
	{
		if($("to_celsius").checked)
		{
			var toCel = $("degrees_entered").value
			toCel = parseFloat(toCel)
			toCel = (toCel-32) * (5/9)			
			toCel = toCel.toFixed(0)
			$("degrees_computed").value = toCel
		}
		
		if ($("to_fahrenheit").checked)
		{
			var toFahr = $("degrees_entered").value
			toFahr = parseFloat(toFahr)
			toFahr = (toFahr*(9/5)) + 32
			toFahr = toFahr.toFixed(0)
			$("degrees_computed").value = toFahr
		}
	}
	
	else
	{
		alert("You must enter a valid number for degrees.")
	}
}

window.onload = function() 
{
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
}