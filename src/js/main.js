"use strict"
const reset = function () {
    let span = document.getElementsByTagName("span");
    span.style.display = "none";
}
const validate = function () {
    var firstname = document.getElementById("fName").value;
    var lastname = document.getElementById("lName").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var span = document.getElementsByTagName("span");

    // check for empty values
    if (firstname == "") {
        span[0].style.display = "block";
        span[0].innerHTML = "Please Enter First Name";
        return false;
    } else {
        span[0].style.display = "none";
    }
    if (lastname == "") {
        span[1].style.display = "block";
        span[1].innerHTML = "Please Enter Last Name";
        return false;
    } else {
        span[1].style.display = "none";
    }
    if (username == "") {
        span[2].style.display = "block";
        span[2].innerHTML = "Please Enter UserName";
        return false;
    } else {
        span[2].style.display = "none";
    }
    if (email == "") {
        span[3].style.display = "block";
        span[3].innerHTML = "Please Enter Email";
        return false;
    } else {
        span[3].style.display = "none";
    }
    if (password == "") {
        span[4].style.display = "block";
        span[4].innerHTML = "Please Enter Password";
        return false;
    } else {
        span[4].style.display = "none";
    }
    if (confirmPassword == "") {
        span[5].style.display = "block";
        span[5].innerHTML = "Please Confirm Password";
        return false;
    } else {
        span[5].style.display = "none";
    }


    //validate password length
    if (password.length < 6) {
        span[4].style.display = "block";
        span[4].innerHTML = "Password Should be atleast 6 characters";
        return false;
    } else {
        span[4].style.display = "none";
        if (password != confirmPassword) {
            span[5].style.display = "block";
            span[5].innerHTML = "Passwords do not match";
        } else {
            span[5].style.display = "none";
            window.location.href = "reg.html"
            return true;
        }
    }
}

var pass = function () {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword")
    var eye = document.getElementById("eye");
    if (password.type == "password") {
        password.type = "text";
        confirmPassword.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else {
        if (password.type == "text") {
            password.type = "password";
            confirmPassword.type = "password";
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
    }
}

/* if (validate() = true) {
    window.location.href = "reg.html"
} */