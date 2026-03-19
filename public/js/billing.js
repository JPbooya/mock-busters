const ValidEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// The billing form 
const billingForm = document.getElementById("billing-form");

// The input elements part of the billing form.
const firstNameElement = document.getElementById("fname");
const lastNameElement = document.getElementById("lname");
const emailElement = document.getElementById("email");
const cityElement = document.getElementById("cname");
const stateElement = document.getElementById("sname");
const zipCodeElement = document.getElementById("zname");

// All the error elements on the page.
const allErrors = document.getElementsByClassName("err");

// When the billing form is submit
billingForm.onsubmit = () => {
    let isValid = true;
    // Clear the existing errors
    clearErrors();

    // This is a form to collect billing information, 
    // realistically, none of this should be blank
    firstName = firstNameElement.value.trim();
    if (!firstName) {
        isValid = false;
        document.getElementById("err-fname").style.display = "block";
    }

    lastName = lastNameElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-lname").style.display = "block";
    }

    email = emailElement.value.trim();
    if (!email) {
        isValid = false;
        document.getElementById("err-email").style.display = "block";
    }

    city = cityElement.value.trim();
    if (!city) {
        isValid = false;
        document.getElementById("err-cname").style.display = "block";
    }
    state = stateElement.value.trim();
    if (!state) {
        isValid = false;
        document.getElementById("err-sname").style.display = "block";
    }
    zipcode = zipCodeElement.value.trim();
    if (!zipcode) {
        isValid = false;
        document.getElementById("err-zname").style.display = "block";
    }

    return isValid;
};

// Clears all the errors
function clearErrors() {
    for (let i = 0; i < allErrors.length; i++) {
        allErrors[i].style.display = "none";
    }
}