"use strict";

var transList = [];

var getTransaction = function(index) {
	
	var transaction = localStorage.getItem(transList) || "";
	if (transaction === "")
	{
		return [];
	} else
	{
		return transaction.split("|")
	}
	
    
};

var addTransaction = function (type, amount, date) {
   
};

var calculateBalance = function (type, amount, total) {
    
};