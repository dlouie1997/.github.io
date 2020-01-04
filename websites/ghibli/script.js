/*David Louie*/
"use strict";

/*****************************************dark mode toggle*****************************************/
//toggles dark mode, and changes icon image
var lightMode = true;
var changeMode = function() {
	document.getElementById("wrapper").classList.toggle("darkMode");
	if (lightMode === true) {
		document.getElementById("mode").src="images/lightmode.png";
		lightMode = false;
	} else {
		document.getElementById("mode").src="images/darkmode.png";
		lightMode = true;
	}
}

/*****************************************3 products section*****************************************/
var changeNausicaa = function() {
	//changes image
	document.getElementById("movieItem").src = "images/nausicaaDisplay.jpg";
	//changes name
	document.getElementById("movieTitle").innerHTML = "Nausicaa of the Valley of the Wind";
	//changes synopsis
	document.getElementById("movieDesc").innerHTML = "Far in the future, after an apocalyptic conflict has devastated much of the world's ecosystem, the few surviving humans live in scattered semi-hospitable environments within what has become a \"toxic jungle.\" Young Nausicaä lives in the arid Valley of the Wind and can communicate with the massive insects that populate the dangerous jungle. Under the guidance of the pensive veteran warrior, Lord Yupa, Nausicaä works to bring peace back to the ravaged planet.";
	//changes movie facts
	document.getElementById("release").innerHTML = "<b>Release date:</b> March 11, 1984";
	document.getElementById("director").innerHTML = "<b>Directed By:</b> Hayao Miyazaki";
	document.getElementById("boxOffice").innerHTML = "<b>Box Office:</b> $1.72 million (overseas)";
	//changes smaller images
	document.getElementById("moviePhoto1").src = "images/nausicaa1.jpg";
	document.getElementById("moviePhoto2").src = "images/nausicaa2.png";
	//adds border, removes other movie borders
	document.getElementById("nausicaaIcon").classList.toggle("movieBorder");
	document.getElementById("howlsIcon").classList.remove("movieBorder");
	document.getElementById("mononokeIcon").classList.remove("movieBorder");
}

var changeHowls = function() {
	document.getElementById("movieItem").src = "images/howlsDisplay.jpg";
	document.getElementById("movieTitle").innerHTML = "Howl's Moving Castle";
	document.getElementById("movieDesc").innerHTML = "Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.";
	document.getElementById("release").innerHTML = "<b>Release date:</b> November 20, 2004 (Japan)";
	document.getElementById("director").innerHTML = "<b>Directed By:</b> Hayao Miyazaki";
	document.getElementById("boxOffice").innerHTML = "<b>Box Office:</b> $236 million (worldwide)";
	document.getElementById("moviePhoto1").src = "images/howls1.jpg";
	document.getElementById("moviePhoto2").src = "images/howls2.jpeg";
	document.getElementById("nausicaaIcon").classList.remove("movieBorder");
	document.getElementById("howlsIcon").classList.toggle("movieBorder");
	document.getElementById("mononokeIcon").classList.remove("movieBorder");
}

var changeMononoke = function() {
	document.getElementById("movieItem").src = "images/mononokeDisplay.jpg";
	document.getElementById("movieTitle").innerHTML = "Princess Mononoke";
	document.getElementById("movieDesc").innerHTML = "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.";
	document.getElementById("release").innerHTML = "<b>Release date:</b> July 12, 1997";
	document.getElementById("director").innerHTML = "<b>Directed By:</b> Hayao Miyazaki";
	document.getElementById("boxOffice").innerHTML = "<b>Box Office:</b> $159.4 million (worldwide)";
	document.getElementById("moviePhoto1").src = "images/mononoke1.jpg";
	document.getElementById("moviePhoto2").src = "images/mononoke2.jpg";
	document.getElementById("nausicaaIcon").classList.remove("movieBorder");
	document.getElementById("howlsIcon").classList.remove("movieBorder");
	document.getElementById("mononokeIcon").classList.toggle("movieBorder");
}

/*****************************************form validation*****************************************/
var formValidity = true;

function formValidation() {
	var textElements = document.querySelectorAll(".myForm input[type=text], .myForm textarea");
	var radioElements = document.querySelectorAll(".myForm input[type=radio]");
	var errorPopup = document.getElementById("errorPopup");
	var requiredQ = true;
	var isRadioInvalid = true;
	var numberofQ = textElements.length;
	var radioQ = radioElements.length;
	var currentSelection;
	//check for potential form errors
	try {
		for (var i = 0; i < radioQ; i++) {
			currentSelection = radioElements[i];
			if(currentSelection.checked) {
				isRadioInvalid = false;
				if (currentSelection.value === "phone") {
					document.getElementById("myPhoneText").required = "required";
				}
				if (currentSelection.value === "email") {
					document.getElementById("myEmailText").required = "required";
				}
			} 
		}
		if (isRadioInvalid) {
			var radioLabels = document.querySelectorAll(".radioLabel");
			for (var i = 0; i < radioLabels.length; i++) {
				radioLabels[i].style.color = "red";
			}
		}
		for (var i = 0; i < numberofQ; i++) {
			currentSelection = textElements[i];
			if(currentSelection.value === "" && currentSelection.required) {
				currentSelection.style.background ="#FFE9E9";
				requiredQ = false;
				
			} else {
				currentSelection.style.background = "#FFF";
			}
		}
		if (requiredQ === false || isRadioInvalid === true) {
			throw "<span style = \"color: red\">Please fill out the required fields.</span>";
		}
		errorPopup.style.display = "none";
		errorPopup.innerHTML = "";
	}
	catch (message) {
		errorPopup.style.display = "block";
		errorPopup.innerHTML = message;
		formValidity = false;
	}
}

//create event listeners
function createEventListeners() {
	var myForm = document.getElementsByTagName("form")[0];
	if (myForm.addEventListener) {
		myForm.addEventListener("submit", validateForm, false);
	} else if (form.attachEvent) {
		myForm.attachEvent("onsubmit", validateForm);
	}
}

//validates and submits form popup
function validateForm(evaluation) {
	var radioElements = document.querySelectorAll(".myForm input[type=radio]");
	if (evaluation.preventDefault) {
		evaluation.preventDefault();
	} else {
		evaluation.returnValue = false;
	}
	formValidity = true;
	formValidation();
	if (formValidity === true) {
		if(radioElements[0].checked) {
			alert("First Name: " + document.getElementById("fName").value + "\n" 
			+ "Last Name: " + document.getElementById("lName").value + "\n"  
			+ "Message: " + document.getElementById("myComment").value + "\n" 
			+ "Contact: " + document.getElementById("myPhone").value + "\n" 
			+ "Number: " + document.getElementById("myPhoneText").value + "\n" 
			);
		} else if (radioElements[1].checked) {
			alert("First Name: " + document.getElementById("fName").value + "\n" 
			+ "Last Name: " + document.getElementById("lName").value + "\n"  
			+ "Message: " + document.getElementById("myComment").value + "\n" 
			+ "Contact: " + document.getElementById("myEmail").value + "\n" 
			+ "Email: " + document.getElementById("myEmailText").value + "\n" 
			);
		}
		
		
		
	}
}

if(window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}

/*****************************************on load*****************************************/
window.onload = function() {
	document.getElementById("mode").onclick = changeMode;
	document.getElementById("nausicaaIcon").classList.add("movieBorder");
	document.getElementById("nausicaaIcon").onclick = changeNausicaa;
	document.getElementById("howlsIcon").onclick = changeHowls;
	document.getElementById("mononokeIcon").onclick = changeMononoke;
}