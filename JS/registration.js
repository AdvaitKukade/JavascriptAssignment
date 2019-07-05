function gotoHomePage()
{
    window.location ='../index.html';
}


function nameValidation()
{
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var email=document.getElementById("username").value;
    var passwd=document.getElementById("pwd").value;
    var genSelected = document.querySelector('input[name="gender"]:checked').value;
    var addr=document.getElementById("address").value;
    var repass=document.getElementById("repwd").value;
    var letters = /^[A-Za-z]+$/;
    var emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passRex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,15})/;

    if(!(fname.match(letters) && lname.match(letters)))
    {
        window.confirm('Please input alphabet characters only');
        return false;
    }

    if(passwd.length>6 && passwd.length<15)
    {
        if(!(email.match(emailExp)))
        {
            window.confirm("please enter valid email address");
            return false;
        }
    }


    if(!(passwd.match(passRex)))
    {
        window.confirm("password should contain atleast 1 Capital letter, atleast 1 small letter, special symbol and range should between 6 to 15");
        return false;
    }


    if(!(repass===passwd))
    {
        window.confirm('password and reentered password should be same');
        return false;

    }


    

    addUser();





}


function convertProfileImage()
{
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

function addUser()
{   
    var userArray=new Array();
    var passwd=document.getElementById("pwd").value;
    var repass=document.getElementById("repwd").value;


    
    let todo=[];
    var currentUserId=document.getElementById("username").value;
    var getImg=sessionStorage.getItem("profileSessionKey");

    var userObj={
    'firstName':document.getElementById("firstNametxt").value,
    'lastName':document.getElementById("lastNametxt").value,
    'emailAddr':document.getElementById("username").value,
    'pass':document.getElementById("pwd").value,
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
           
        //    else
        //     {
                
        //         userArray.push(userObj);
        //         var stringifyUser=JSON.stringify(userArray);
        //         localStorage.setItem('user',stringifyUser);
        //         window.location = '../html/login.html';
            
    
        //     }
    
    
    }
    
    
        userArray.push(userObj);
        var stringifyUser=JSON.stringify(userArray);
        localStorage.setItem('user',stringifyUser);
        window.location = '../html/login.html';

}


function convertProfileImage()
{
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





