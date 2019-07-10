function checkSession(){
    var seesionValue=sessionStorage.getItem("sessionkey");
    if(seesionValue===null)
    {
        window.location='../index.html';

    }
}

function gotoHomePage(){
    window.location ='../index.html';
}

function gotoLoginPage(){
    window.location='../html/login.html';
}

function nameValidation(){

    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var email=document.getElementById("username").value;
    var passwd=document.getElementById("pwd").value;
    var genSelected = document.querySelector('input[name="gender"]:checked').value;
    var addr=document.getElementById("address").value;
    var repass=document.getElementById("repwd").value;
    let firstNameError=document.getElementById("error_firstName");
    let lastNameError=document.getElementById("error_lastName");
    let emailError=document.getElementById("error_email");
    let passError=document.getElementById("error_pass");
    let rePassError=document.getElementById("error_confirmPass");
    var letters = /^[A-Za-z]+$/;
    var emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passRex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,15})/;

    if(!(fname.match(letters)))
    {
        firstNameError.textContent="please enter alphabet characters only";
        return false;
    }
    else
    {
        firstNameError.innerHTML="";
    }

    if(!(lname.match(letters)))
    {
        lastNameError.textContent="please enter alphabet characters only";
        return false;
    }
    else
    {
        lastNameError.innerHTML="";
    }

    if(!(email.match(emailExp)))
    {
        emailError.textContent="please enter valid email address";
        return false;
    }
    else
    {
        emailError.innerHTML="";
    }
    
    if(!((passwd.match(passRex)&&(passwd.length>6 && passwd.length<15))))
    {
        passError.textContent="password should contain atleast 1 Capital letter, atleast 1 small letter, special symbol and range should between 6 to 15";
        return false;
    }
    else
    {
        passError.innerHTML="";
    }

    if(!(repass===passwd))
    {
        rePassError.textContent="pasword and confirm password should be same";
        return false;
    }
    else{
        rePassError.innerHTML="";
    }
    
    addUser();
}

function convertProfileImage(){
    let image = document.getElementById("profileImg").files[0];

    getimgbase64(image);

    function getimgbase64(image)
    {
        let readImg = new FileReader();
        readImg.readAsDataURL(image);

        readImg.onload = function () {
            let profileUrl = readImg.result;
            sessionStorage.setItem("profileSessionKey",profileUrl);
            document.getElementById("imgId").src = sessionStorage.profileSessionKey;
        };

        readImg.onerror = function (error) {
        };
    }
}

function addUser(){   
    var userArray=new Array();
    var passwd=document.getElementById("pwd").value;
    let encryptedPass;
    let todo=[];
    var currentUserId=document.getElementById("username").value;
    var getImg=sessionStorage.getItem("profileSessionKey");
    encryptedPass=window.btoa(passwd);

    var userObj={
    'firstName':document.getElementById("firstNametxt").value,
    'lastName':document.getElementById("lastNametxt").value,
    'emailAddr':document.getElementById("username").value,
    'pass':encryptedPass,
    'gen':document.querySelector('input[name="gender"]:checked').value,
    'addres':document.getElementById("address").value,
    'todoItem':todo,
    'picture':getImg};
    
    if(localStorage.getItem('user'))
    {
        userArray=JSON.parse(localStorage.getItem('user'));
        var exist=false;
        
        for(var counter=0;counter<userArray.length;counter++)
        {
            if((userArray[counter].emailAddr)==currentUserId)
            {
                exist=true;
            }

        }
        
        if(exist==true)
        {
            window.confirm(" emailId  already exist");
            return false;

        }
    }

    userArray.push(userObj);
    var stringifyUser=JSON.stringify(userArray);
    localStorage.setItem('user',stringifyUser);
    window.location = '../html/login.html';
}


