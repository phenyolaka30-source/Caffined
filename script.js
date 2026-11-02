var accordions = document.getElementsByClassName("accordion-btn");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var closeBtn = document.getElementsByClassName("close-lightbox")[0];
var images = document.getElementsByClassName("lightbox-trigger");

for (var j = 0; j < images.length; j++) {
    images[j].addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src; 
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

var searchInput = document.getElementById("menuSearch");

if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        var filter = searchInput.value.toLowerCase();
        var categories = document.getElementsByClassName("menu-category");

        for (var k = 0; k < categories.length; k++) {
            var items = categories[k].getElementsByTagName("li");
            var matchFound = false;

            for (var l = 0; l < items.length; l++) {
                var text = items[l].textContent.toLowerCase();
                if (text.indexOf(filter) > -1) {
                    items[l].style.display = ""; 
                    matchFound = true;
                } else {
                    items[l].style.display = "none"; 
                }
            }

            if (matchFound) {
                categories[k].style.display = "";
            } else {
                categories[k].style.display = "none";
            }
        }
    });
}

var enquiryForm = document.getElementById("enquiryForm");
var contactForm = document.getElementById("contactForm");

function showError(errorId, inputId) {
    document.getElementById(errorId).style.display = "block";
    document.getElementById(inputId).classList.add("input-error");
}

function hideError(errorId, inputId) {
    document.getElementById(errorId).style.display = "none";
    document.getElementById(inputId).classList.remove("input-error");
}

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        var isValid = true;

        var name = document.getElementById("enqName").value;
        var email = document.getElementById("enqEmail").value;
        var phone = document.getElementById("enqPhone").value;
        var type = document.getElementById("enqType").value;
        var message = document.getElementById("enqMessage").value;

        if (name.trim() === "") {
            showError("enqNameError", "enqName");
            isValid = false;
        } else { hideError("enqNameError", "enqName"); }

        if (email.trim() === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            showError("enqEmailError", "enqEmail");
            isValid = false;
        } else { hideError("enqEmailError", "enqEmail"); }

        if (phone.trim().length !== 10 || isNaN(phone)) {
            showError("enqPhoneError", "enqPhone");
            isValid = false;
        } else { hideError("enqPhoneError", "enqPhone"); }

        if (type === "") {
            showError("enqTypeError", "enqType");
            isValid = false;
        } else { hideError("enqTypeError", "enqType"); }

        if (message.trim() === "") {
            showError("enqMessageError", "enqMessage");
            isValid = false;
        } else { hideError("enqMessageError", "enqMessage"); }

        if (isValid) {
            document.getElementById("formSuccess").style.display = "block";
            document.getElementById("formSuccess").innerText = "Thank you! Your enquiry has been sent successfully.";
            enquiryForm.reset(); 
            
            setTimeout(function() {
                document.getElementById("formSuccess").style.display = "none";
            }, 5000);
        }
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        var isValid = true;

        var name = document.getElementById("contName").value;
        var email = document.getElementById("contEmail").value;
        var subject = document.getElementById("contSubject").value;
        var message = document.getElementById("contMessage").value;

        if (name.trim() === "") {
            showError("contNameError", "contName");
            isValid = false;
        } else { hideError("contNameError", "contName"); }

        if (email.trim() === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            showError("contEmailError", "contEmail");
            isValid = false;
        } else { hideError("contEmailError", "contEmail"); }

        if (subject.trim() === "") {
            showError("contSubjectError", "contSubject");
            isValid = false;
        } else { hideError("contSubjectError", "contSubject"); }

        if (message.trim() === "") {
            showError("contMessageError", "contMessage");
            isValid = false;
        } else { hideError("contMessageError", "contMessage"); }

        if (isValid) {
            document.getElementById("formSuccess").style.display = "block";
            document.getElementById("formSuccess").innerText = "Thank you! Your message has been sent successfully.";
            contactForm.reset(); 
            
            setTimeout(function() {
                document.getElementById("formSuccess").style.display = "none";
            }, 5000);
        }
    });
}