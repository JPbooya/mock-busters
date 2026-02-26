// The billing form 
const billingForm = document.getElementById("billing-form");

// The input elements part of the billing form.
const firstNameElement = document.getElementById("fname");
const lastNameElement = document.getElementById("lname");
const addressElement = document.getElementById("aname");
const cityElement = document.getElementById("cname");
const stateElement = document.getElementById("sname");
const zipCodeElement = document.getElementById("zname");
const creditCardElement = document.getElementById("credit-name");
const expirationDateElement = document.getElementById("exname");
const extensionElement = document.getElementById("extension-name");
const deliveryElement = document.getElementById("dtd-name");

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

    address = addressElement.value.trim();
    if (!address) {
        isValid = false;
        document.getElementById("err-aname").style.display = "block";
    }

    city = cityElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-cname").style.display = "block";
    }
    state = stateElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-sname").style.display = "block";
    }
    zipcode = zipCodeElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-zname").style.display = "block";
    }
    creditcard = creditCardElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-credit-name").style.display = "block";
    }
    expiration = expirationDateElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-exname").style.display = "block";
    }
    excode = extensionElement.value.trim();
    if (!lastName) {
        isValid = false;
        document.getElementById("err-extension-name").style.display = "block";
    }
    // Except for delivery
    // Although do we even want a delivery button? We already have to deliver..?

    // delivery = deliveryElement.value.trim();
    // if (!lastName) {
    //     isValid = false;
    //     document.getElementById("err-delivery").style.display = "block";
    // }

    return isValid;
};

// Clears all the errors
function clearErrors() {
    for (let i = 0; i < allErrors.length; i++) {
        allErrors[i].style.display = "none";
    }
}