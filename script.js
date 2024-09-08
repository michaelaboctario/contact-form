const form = document.getElementById("contact-form");
const successMessage = document.getElementById('success-message');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("");
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const queryType = document.querySelector("input[name='query-type']:checked");
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("consent").checked;

    const formAlert = document.querySelectorAll(".form-alert");

    let isValid = true;

    // First Name Validation
    const firstNameElmError = document.getElementsByClassName("first-name form-alert")[0]; 
    if(!isValidName(firstName)) {
        isValid = false;    
        firstNameElmError.textContent = "Enter a valid name";
        firstNameElmError.style.display = "block";
        document.querySelector("#first-name").style.border = "1px solid var(--red)";
    } else {
        firstNameElmError.style.display = "none";
        document.querySelector("#first-name").style.border = "1px solid var(--medium-grey)";
    }

    const lastNameElmError = document.getElementsByClassName("last-name form-alert")[0]; 
    if(!isValidName(firstName)) {
        isValid = false;    
        lastNameElmError.textContent = "Enter a valid name";
        lastNameElmError.style.display = "block";
        document.querySelector("#last-name").style.border = "1px solid var(--red)";
    } else {
        firstNameElmError.style.display = "none";
        document.querySelector("#last-name").style.border = "1px solid var(--medium-grey)";
    }
    
    const emailElmError = document.getElementsByClassName("email form-alert")[0]; 
    if(!isValidEmail(email)) {
        isValid = false;
        emailElmError.style.display = "block";
        document.querySelector("#email").style.border = "1px solid var(--red)";        
    } else {
        emailElmError.style.display = "none";
        document.querySelector("#email").style.border = "1px solid var(--medium-grey)";
    }

    // Query Validation
    const queryElmError = document.getElementsByClassName("query-type form-alert")[0]; 
    if(!queryType) {
        isValid = false;
        queryElmError.style.display = "block";
    } else {
        queryElmError.style.display = "none";
    }
  
    // Message Validation 
    const messageElmError = document.getElementsByClassName("message form-alert")[0]; 
    if(message === "") {
        isValid = false;
        messageElmError.style.display = "block";
        messageElmError.style.border = "1px solid var(--red)";
    } else {
        messageElmError.style.display = "none";
        messageElmError.style.border = "1px solid var(--medium-grey)";
    }

    // Consent Validation 
    const consentElmError = document.getElementsByClassName("check-consent__alert form-alert")[0]; 
    if(!consent) {
        isValid = false;
        consentElmError.style.display = "block";
    } else {
        consentElmError.style.display = "none";
    }

    // Form is Valid 
    if(isValid) {
        successMessage.style.display = "block";
       /*  form.reset();  */
        setTimeout(function() {
            location.reload();
        }, 2000);
        
    }
})

function isValidName(str) {
    //test if name contains special characters
    const specialCharRegex = /[^\w\s]/gi;
    return !(str ==='' || specialCharRegex.test(str));
} 

// Email Validation 
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email !== '' && emailRegex.test(email);
}