function validation(){
    if(document.Formfill.fName.value==""){
        document.getElementById("error").innerHTML="Enter First Name";
        return false;
    }
    else if(document.Formfill.lName.value==""){
        document.getElementById("error").innerHTML="Enter Last Name";
        return false;
    }
    else if(document.Formfill.email.value==""){
        document.getElementById("error").innerHTML="Enter Email Address";
        return false;
    }
    else if(document.Formfill.password.value==""){
        document.getElementById("error").innerHTML="Enter Password";
        return false;
    }
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("error").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.password.value!==document.Formfill.cPassword.value){
        document.getElementById("error").innerHTML="Password doesn't match!";
        return false;
    }
    else if(document.Formfill.password.value==document.Formfill.cPassword.value){
        alert("You are Successfully Registered");
        window.location.href = "login.html";
        return false;
    }
}

function save(){
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("cPassword").value;

    var firstName = localStorage.setItem("fName", fName);
    var lastName = localStorage.setItem("lName", lName);
    var em = localStorage.setItem("email", email);
    var pwd = localStorage.setItem("password", password);
    var cpwd = localStorage.setItem("cPassword", cPassword);
    
    
}