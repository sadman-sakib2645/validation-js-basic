// get elements form html

var userName = document.getElementById("userName")
var userEror = document.getElementById("userEror")

var userEmail = document.getElementById("userEmail")
var emailEror = document.getElementById("emailEror")

var userPass = document.getElementById("userPass")
var passEror = document.getElementById("passEror")

var rePass = document.getElementById("rePass")
var rePassEror = document.getElementById("rePassEror")

// create a function

function subm()
{ 
    // user name
    if(userName.value == ""){
        userName.style.borderColor = "red";
        userName.focus();
        userEror.innerHTML = "Please enter your name";
        return false ;
    }

        // user userEmail
        if(userEmail.value == ""){
            userEmail.style.borderColor = "red";
            userEmail.focus();
            emailEror.innerHTML = "Please enter your Email";
            return false ;
        }

            // user pass
    if(userPass.value == ""){
        userPass.style.borderColor = "red";
        userPass.focus();
        passEror.innerHTML = "Please enter your Password";
        return false ;
    }
        if(userPass.value.length <=5){
            userPass.style.borderColor = "red";
        userPass.focus();
        passEror.innerHTML = "Please insert at list 6 characters";
        return false ;
        }


        // user confirm passs
        if(rePass.value == ""){
            rePass.style.borderColor = "red";
            rePass.focus();
            rePassEror.innerHTML = "Please enter your Confirmed Password";
            return false ;
        }

        if(rePass.value != userPass.value){
            rePass.style.borderColor = "red";
            rePass.focus();
            rePassEror.innerHTML = "Password and confirm Password did not match";
            return false ;
        }
}

// function for remove eror

function errRmv()
{
    // user remove
    if(userName.value != ""){
        userName.style.borderColor = "red";
        userEror.innerHTML = "";
    }

       // user remove
       if(userEmail.value != ""){
        userEmail.style.borderColor = "red";
        emailEror.innerHTML = "";
    }

       // user remove
       if(userPass.value != ""){
        userPass.style.borderColor = "red";
        passEror.innerHTML = "";
    }

       // user remove
       if(rePass.value != ""){
        rePass.style.borderColor = "red";
        rePassEror.innerHTML = "";
    }
}

// events
    userName.addEventListener("blur",errRmv);

    userEmail.addEventListener("blur",errRmv);

    userPass.addEventListener("blur",errRmv);

    rePass.addEventListener("blur",errRmv);

    // =====================================
    var btn = document.getElementById("btn")
    var show = document.getElementById("show")
    var close = document.getElementById("close")

    btn.addEventListener("click",function(){
        show.style.display = "flex" ;
    });
    close.addEventListener("click",function(){
        show.style.display = "none" ;
    });


    // validation ends
   
    
    $(".btn-1").click(function(){
        $('h1').hide();
    });

    $(".btn-2").click(function(){
        $("h1").show();
    });
    $(".btn-3").click(function(){
        $("h2").slideToggle();
    });