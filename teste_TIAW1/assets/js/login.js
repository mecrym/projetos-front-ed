function validation(){
    var email = document.f1.email.value;
    var password = document.f1.password.value;
    var emailError = document.querySelector("#email_error");

    if(email == ""){
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
        return false;
    }
}