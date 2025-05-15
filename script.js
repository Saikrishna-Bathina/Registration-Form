var uname,email,pnumber,pswd,cnfpswd;

function validateForm() {
    let isValid = true;
    let message = "";
    let pass = 0;
    if (!validateUsername()) {
        message = "❌ Username must start with a letter or underscore.";
        isValid = false;
    } else if (!validateEmail()) {
        message = "❌ Please enter a valid email address.";
        isValid = false;
    } else if (!validatePhoneNumber()) {
        message = "❌ Please enter a valid 10-digit phone number.";
        isValid = false;
    } else if (!matchPasswords()) {
        message = "❌ Passwords don't match.";
        isValid = false;
    } else if (!validatePassword()) {
        pass = 1;
        message = "❌ Password must be at least 8 characters long and include: One uppercase letter , One lowercase letter , One number , One special character";
        isValid = false;
    }

    if (!isValid) {
        if (pass==1){
            $('#msg').css('font-size','0.7rem');
        }
        $('#msg').css('display', 'block');
        $('#msg').html(message);
    }

    return isValid;
}

function validateUsername() {    
    const regex = /^[_a-zA-Z]/;
    if (!regex.test(uname)) {
        return false;
    }
    return true;
}


function validateEmail() {
    console.log("entered validateemail")
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        return false;
    }
    return true;
}

function validatePhoneNumber() {
    const phone = document.getElementById("phoneNumber").value.trim();
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(phone)) {
        return false;
    }
    return true;
}

function validatePassword() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!regex.test(pswd)) {
        return false;
    }
    return true;
}

function matchPasswords(){
    console.log(pswd,cnfpswd);
    return pswd==cnfpswd;
}


$(document).ready(function(){
    $('#submit').click(function(){
    uname = $('#userName').val();
    email = $('#email').val();
    pnumber = $('#phoneNumber').val();
    pswd = $('#password').val();
    cnfpswd = $('#confirmPassword').val();
    if (validateForm()){
        $('.status').css('display','block');
         $('#msg').css('display', 'none');
    }
    else{

    }
})
})

$('#showPassword').change(function () {
    if ($(this).is(':checked')) {
        $('#password, #confirmPassword').attr('type', 'text');
    } else {
        $('#password, #confirmPassword').attr('type', 'password');
    }
});
