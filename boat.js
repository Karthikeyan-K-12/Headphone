window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if(document.documentElement.scrollTop > 1){
        document.getElementById("h1").className = "homepage";
    }
    if(document.documentElement.scrollTop > 1){
        document.getElementById("h2").className = "homepage";
    } if(document.documentElement.scrollTop > 1){
        document.getElementById("span").className = "homepage";
    } if(document.documentElement.scrollTop > 1){
        document.getElementById("reg").className = "homepage";
    }
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("card_1").className = "slideup";
    }
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("card_2").className = "slideup";
    }
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("card_3").className = "slideup";
    }
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("card_4").className = "slideup";
    }
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("deliver").className = "slide_deliver";
    }
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("deliver_1").className = "slide_deliver_1";
    }
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("payment").className = "slide_payment";
    }
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("payment_1").className = "slide_payment_1";
    }
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("help_1").className = "slide_help";
    }
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("help_2").className = "slide_help_1";
    }
}

function togglemode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function validateEmail(emailId) {
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailId.value.match(mailformat)) {
        document.form1.text1.focus();
        return true;
        
    }
    else {
        alert("Invalid email address.");
        document.form1.text1.focus();
        return false;
    }
    function login() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        if (username == "boat" && password == "boat") {
            alert("Login Successfully");
        }
        else {
            alert("Login Failed");
        }
    }
}





function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "boat" && password == "boat") {
        alert("Registration Successfully Completed");
    }
    else {
        alert("Invalid Username Password");
    }
}

