"use strict";
var $ = function(id) { return document.getElementById(id); };

var saveReservation = function() {
    
	sessionStorage.setItem("name", $("name").value);
	sessionStorage.setItem("phone", $("phone").value);
	sessionStorage.setItem("email", $("email").value);
	sessionStorage.setItem("arrivalDate", $("arrival_date").value);
	sessionStorage.setItem("nights", $("nights").value);
	
	//adults, value set
	var adults = $("adults").value
	if (adults == 1) {
		sessionStorage.setItem("adults", 1);
	}
	if (adults == 2) {
		sessionStorage.setItem("adults", 2);
	}
	if (adults == 3) {
		sessionStorage.setItem("adults", 3);
	}
	if (adults == 4) {
		sessionStorage.setItem("adults", 4);
	}
	
	//children, value Set
	var children = $("children").value
	if (children == 0) {
		sessionStorage.setItem("children", 0);
	}	
	if (children == 1) {
		sessionStorage.setItem("children", 1);
	}	
	if (children == 2) {
		sessionStorage.setItem("children", 2);
	}	
	if (children == 3) {
		sessionStorage.setItem("children", 3);
	}
	if (children == 4) {
		sessionStorage.setItem("children", 4);
	}
	
	//Setting Roomtype
	if ($("standard").checked) {
		sessionStorage.setItem("roomType", "standard");
	}
	if ($("business").checked) {
		sessionStorage.setItem("roomType", "business");
	}
	if ($("suite").checked) {
		sessionStorage.setItem("roomType", "suite");
	}
	
	//Bed Type
	var king = $("king")
	var doubledouble = $("double")
	
	if (king.checked) {
		sessionStorage.setItem("bedType", "king");
	}
	if (doubledouble.checked) {
		sessionStorage.setItem("bedType", "double double");
	}
	
	
	//smoking
	var smoking = $("smoking")
	if (smoking.checked) {
		sessionStorage.setItem("smoking", "yes");
	} 
	else {
		sessionStorage.setItem("smoking", "no");
	}
	
    // submit form
    $("reservation_form").submit();
	};

window.onload = function() {
    $("submit_request").onclick = saveReservation;
    $("arrival_date").focus();
}