function formValidate() {
    const name = document.getElementById("txtName").value;
    const email = document.getElementById("txtEmail").value;
    const password = document.getElementById("txtPassword").value;
    const confirmPassword = document.getElementById("txtConfirm").value;

    let isValid = true;

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name cannot be less than 3 characters.";
        isValid = false;
    } else if (/\d/.test(name)) {
        document.getElementById("nameError").innerText = "Name cannot contain digits.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation (using HTML5 email validation)
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password cannot be less than 6 characters.";
        isValid = false;
    } else if (password.length > 10) {
        document.getElementById("passwordError").innerText = "Password cannot be more than 10 characters.";
        isValid = false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        document.getElementById("passwordError").innerText = "Password must contain at least one digit, one lowercase letter, and one uppercase letter.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Confirm Password validation
    if (confirmPassword !== password) {
        document.getElementById("confirmError").innerText = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById("confirmError").innerText = "";
    }

    if (isValid) {
        alert("Registration Process Completed");
    }

    return isValid; // Prevent form submission if not valid
}
