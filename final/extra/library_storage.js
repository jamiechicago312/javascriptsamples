"use strict";
var getStorage = function(key) {
    //get string from storage or an empty string if nothing in storage
    var storage = localStorage.getItem(key) || "";
    if (storage === "") { 
        return ""; 
    } else {
        return storage;
    }
};

var setStorage = function(key, arr) {
    localStorage.setItem("PLTinput", $("userInput").value);
};

var clearStorage = function(key) {
    localStorage.setItem(key, "");
};
/*
	
	//remove punctuation, etc.
	//string.replace(/regExp/g, '');
	uInput.replace(/./g,"");
	uInput.replace(/,/g,"");
	uInput.replace(/!/g,"");
	uInput.replace(/?/g,"");
	uInput.replace(/'/g,"");
	uInput.replace(/-/g,"");
	uInput.replace(/_/g,"");

	regular expression, remove punctuation
	
	other way, character by character; substring, comes across a period remove that
	chapter 12 or 15 goes over regular expressions; professionally they use alot of reg expression
	look for characters in a specific order or 
	use reg ex to find the PATTERN of an email
	
	web 1 = research on 3 different hosting services, some of these are the same company
	canacelled ipage to fatcow; ended up being the same
	few companies would avoid; NO DREAM HOST
	avoid go daddy because of use interface;
	
	static IP address required;
*/