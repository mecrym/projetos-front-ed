function validation(){
    var email = document.f1.email.value;
    var password = document.f1.password.value;
    var emailError = document.querySelector("#email_error");
    var passwordError = document.querySelector("#password_error");

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;//pelo menos um digito, uma letra minuscula, uma maiuscula e 8 ou mais caracteres

    if(email == ""){
        emailError.innerHTML = "Email is required";
        emailError.style.color = "red";
        return false;
    }
    else{
        emailError.innerHTML = "";
    }
    if(!email_pattern.test(email)){
        emailError.innerHTML = "Invalid email";
        emailError.style.color = "red";
        return false;
    }  else{
        emailError.innerHTML = "";
    }
    if(password == ""){
        passwordError.innerHTML = "Password is required";
        passwordError.style.color = "red";
        return false;
    }
    else{
        passwordError.innerHTML = "";
    }
    if(!password_pattern.test(password)){
        passwordError.innerHTML = "Invalid password";
        passwordError.style.color = "red";
        return false;
    }
    else{
        passwordError.innerHTML = "";
    }
    return true;
}