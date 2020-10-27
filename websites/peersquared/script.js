//Try PeerSquared Form popup on home page
function openTryPeerSquaredForm() {
    var email = document.getElementById("client-email");
    var psEmail = document.getElementById("ps-email");
    psEmail.value = email.value;
    document.getElementById("try-peersquared-form").style.display = "grid";
}
function closeTryPSForm() {
    document.getElementById("try-peersquared-form").style.display = "none";
}
function closeHover() {
    document.getElementById("x-image").src="images/x-button-hover.png";
}
function closeUnhover() {
    document.getElementById("x-image").src="images/x-button.png";
}

//Try PeerSquared Form popup on any other page
function openTryPeerSquaredFormOther() {
    var email = document.getElementById("client-email");
    var psEmail = document.getElementById("ps-email");
    document.getElementById("try-peersquared-form").style.display = "grid";
}
function closeTryPSForm() {
    document.getElementById("try-peersquared-form").style.display = "none";
}
function closeHover() {
    document.getElementById("x-image").src="images/x-button-hover.png";
}
function closeUnhover() {
    document.getElementById("x-image").src="images/x-button.png";
}

//Contact Form
function openContactForm() {
    document.getElementById("contact-form").style.display = "grid";
}
function closeContactForm() {
    document.getElementById("contact-form").style.display = "none";
}

//Private Tutoring Form
function openPrivateTutoringForm() {
    document.getElementById("private-tutoring-form").style.display = "grid";
}
function closePrivateTutoringForm() {
    document.getElementById("private-tutoring-form").style.display = "none";
}

//Petition Form 
function openPetitionForm() {
    document.getElementById("petition-form").style.display = "grid";
}
function closePetitionForm() {
    document.getElementById("petition-form").style.display = "none";
}

//Form Completition 
function displayCompletion() {
    alert("We'll be in contact shortly! Look out for an email from success@peer-squared.com.");
}


//open hamburger menu
function openHamburgerMenu() {
    var mobileMenu = document.getElementById("drop-down-menu");
    var mobileMenuClose = document.getElementById("hamburger-menu-icon");
    if (mobileMenu.style.display === "grid") {
        mobileMenu.style.display = "none";
        mobileMenuClose.src="images/hamburger-menu.png";
    } else {
        mobileMenu.style.display = "grid";
        mobileMenuClose.src="images/x-button-transparent.png";
    }
}
//open sub menu
function openSubMenu() {
    var subMenu =  document.getElementById("sub-menu");
    var subMenuClose = document.getElementById("dropdown-button");
    if (subMenu.style.display === "grid") {
        subMenu.style.display = "none";
        subMenuClose.src="images/dropdown-button.png";
    } else {
        subMenu.style.display = "grid";
        subMenuClose.src="images/dropdown-button-up.png";
    }
}


//open index collapsible
var toggleCollapsible = document.getElementsByClassName("collapsible-button");
var collapseOpen = document.getElementsByClassName("dropdown-button-collapsible");
var i;

for (i = 0; i < toggleCollapsible.length; i++) {
    toggleCollapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var button = content.nextElementSibling;
        console.log(this.childNodes[1].childNodes[1]);

        if (content.style.display === "grid") {
            content.style.display = "none";
            //access child h2 to img
            this.childNodes[1].childNodes[1].src="images/dropdown-button.png";
        } else {
            content.style.display = "grid";
            this.childNodes[1].childNodes[1].src="images/dropdown-button-up.png";
        }
    });
}

//open FAQ collapsible
var toggleFAQ = document.getElementsByClassName("collapsible-faq");
var collapseFAQ = document.getElementsByClassName("dropdown-button-collapsible");
var i;

for (i = 0; i < toggleFAQ.length; i++) {
    toggleFAQ[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var button = content.nextElementSibling;
        console.log(this.childNodes[1].childNodes[2]);

        if (content.style.display === "grid") {
            content.style.display = "none";
            //access child h2 to img
            this.childNodes[1].childNodes[2].src="images/dropdown-button-yellow.png";
        } else {
            content.style.display = "grid";
            this.childNodes[1].childNodes[2].src="images/dropdown-button-up-yellow.png";
        }
    });
}




//slideshow 
var slideIndex = 1;
showSlides(slideIndex);
//arrow controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//thumbnail image controls 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//move slideshow
function showSlides(n) {
    var i;
    console.log("yo");
    var slides = document.getElementsByClassName("testimonial-container");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log("slide1");
    }
    slides[slideIndex-1].style.display = "grid";
}


//slideshow 2
var slideIndex = 1;
showSlidesP(slideIndex);
//arrow controls
function plusSlidesP(n) {
    showSlidesP(slideIndex += n);
}
//thumbnail image controls 
function currentSlide(n) {
    showSlidesP(slideIndex = n);
}
//move slideshow
function showSlidesP(n) {
    var i;
    var slides = document.getElementsByClassName("partner-testimonial-container");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
}






//form select check
function tryPsCheck() {
    if (document.getElementById("try-form-who").value == "parent" || document.getElementById("try-form-who").value == "student") {
        document.getElementById("selected-parent-student").style.display = "grid";
    } else {
        document.getElementById("selected-parent-student").style.display = "none";
    }

    if (document.getElementById("try-form-who").value == "teacher" || document.getElementById("try-form-who").value == "school-administrator" || document.getElementById("try-form-who").value == "ngo") {
        document.getElementById("selected-teacher-school-ngo").style.display = "grid";
    } else {
        document.getElementById("selected-teacher-school-ngo").style.display = "none";
    }
    console.log("bottom");
}


