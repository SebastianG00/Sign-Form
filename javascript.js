const pass1 = document.querySelector("#user_password");
const pass2 = document.querySelector("#user_password2");
const phoneNumberInput = document.querySelector("#phone_number");
const createbutton = document.querySelector(".create");

function validatePassword(x1, x2) {
    const password1 = x1.value;
    const password2 = x2.value;
    if (password1.length != password2.length) {
        alert("Passwords not same");
    } else {
        for(let i = 0; i < password1.length; i++) {
            if(password1[i] != password2[i]) {
                alert("Passwords not same");
                return false;
            }
        }
        return true;
        // alert("Redirecting to New account");
    }
    

}

// function validatePhoneNumber(input) {
//     const pattern = /^\d{3}-\d{3}-\d{4}$/;
//     return pattern.test(input.value);
// }

// createbutton.addEventListener('click', function() {
//     validatePassword(pass1,pass2);
// });

// createbutton.addEventListener('click', function() {
//     validatePhoneNumber(input);
// });

createbutton.addEventListener('click', function(event) {
    const isPasswordValid = validatePassword(pass1, pass2);
    const isPhoneNumberValid = validatePhoneNumber(phoneNumberInput);

    // if (!isPhoneNumberValid) {
    //     alert("Phone number format is incorrect. Use format: 713-837-9873");
    //     event.preventDefault(); // Prevent form submission if phone number is not valid
    //     return;
    // }
    
    if (!isPasswordValid) {
        event.preventDefault(); // Prevent form submission if passwords are not valid
        return;
    }

    
    alert("Form is valid. Redirecting to new account");
});
