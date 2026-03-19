// Validates form data on the server side before processing.
export function validateForm(data) {
  console.log("Server side validation happens here");
  console.log(data);


const errors = [];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate first name
  if (data.fname.trim() == "") {
    errors.push("First name is required.");
    
  }

  console.log(errors);

  // Validates last name 
  if (data.lname.trim() == "") {
    errors.push("Last name is required.");
  }

   // Validates email 
  if (data.email.trim() == "" || !emailRegex.test(data.email)) {
    errors.push("Email is required.");
  }

   // Validates city name 
  if (data.cname.trim() == "") {
    errors.push("City is required.");
  }

   // Validates state
  if (data.sname.trim() == "") {
    errors.push("State is required.");
  }

   // Validates zip code
  if (data.zname.trim() == "") {
    errors.push("Zip code is required.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

