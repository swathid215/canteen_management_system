function validation(){
    var name = document.getElementById('NAME').value;
    var email = document.getElementById('EMAIL').value;
    var number = document.getElementById('PHONE').value;
    var password = document.getElementById('PASSWORD').value;
    var cpassword = document.getElementById('CPASSWORD').value;

    var namecheck = /^[A-Za-z ]{2,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    
    if(!namecheck.test(name)){
        document.getElementById('error-name').innerHTML = "Use only Alphabets";
        return false;
    }

    if(!emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = "Invalid Email Syntax. Ex: abc@gmail.com";
        return false;
    }
   

    if(!numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = "Use 10 digit valid mobile number";
        return false;
    }
  

    if(!passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML = "Use alphabets, number & special characters. Min: 8, Max: 16";
        return false;
    }

    if(!cpassword.match(password)){
        document.getElementById('error-c-password').innerHTML = "Password doesn't match";
        return false;
    }
   
}


