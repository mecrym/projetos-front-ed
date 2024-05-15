document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform validation, e.g., check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Perform registration, e.g., by sending data to server
    // For demonstration purposes, let's just log the registration data
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Registration successful!");
});
