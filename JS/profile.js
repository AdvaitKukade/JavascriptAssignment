


function logout()
{
    sessionStorage.clear();
    window.location='../html/login.html';
}

function gotoHome()
{
    var home=sessionStorage.getItem("homeSession");

    
    window.location='../index.html';
   // home.style.display="none";


    
}



function getUserId()
{

    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    
    let index;
    let userId;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            userId=index;
            
            break;
            
            
        }   



    }

    return userId;

}









function showInfo()
{
    
    let sessionId= sessionStorage.getItem("sessionkey");
//let imgSessionKey=sessionStorage.getItem("profileSessionKey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let userid;
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            userid=index;
            break;
            
            
        }   
    }

    


    if((userArrayItem[userid].gen) == "male")
    {
        document.getElementsByName("gender")[0].checked=true;
    }
    else if((userArrayItem[userid].gen)== "female")
    {
        document.getElementsByName("gender")[1].checked=true;

    }
    else{
        document.getElementsByName("gender")[2].checked=true;
    }



    
    
    document.getElementById("imgId").src = userArrayItem[userid].picture;
    document.getElementById("firstNametxt").value=userArrayItem[userid].firstName;
    document.getElementById("lastNametxt").value=userArrayItem[userid].lastName;
    document.getElementById("username").value=userArrayItem[userid].emailAddr;
    document.getElementById("pwd").value=userArrayItem[userid].pass;
    document.getElementById("address").value=userArrayItem[userid].addres;



}


function addTodo()
{
    window.location="../html/todo.html";
}








function editChanges()
{
    document.getElementById("firstNametxt").disabled=false;
    document.getElementById("lastNametxt").disabled=false;
    document.getElementById("username").disabled=false;
    document.getElementById("pwd").disabled=false;
    document.getElementById("address").disabled=false;
    document.getElementById("male").disabled=false;
    document.getElementById("female").disabled=false;
    document.getElementById("other").disabled=false;
    document.getElementById("profileImg").disabled=false;
}

function saveChanges()
{

    let sessionId= sessionStorage.getItem("sessionkey");
    var getImg=sessionStorage.getItem("profileSessionKey");


    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let userid;
    let index;
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var email=document.getElementById("username").value;
    var passwd=document.getElementById("pwd").value;
    var genSelected = document.querySelector('input[name="gender"]:checked').value;
    var addr=document.getElementById("address").value;
    


    

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            userid=index;
            break;
            
            
        }   
    }

    userArrayItem[userid].firstName=fname;
    userArrayItem[userid].lastName=lname;
    userArrayItem[userid].emailAddr=email;
    userArrayItem[userid].pass=passwd;
    userArrayItem[userid].gen=genSelected;
    userArrayItem[userid].addres=addr;
    userArrayItem[userid].picture=getImg;

    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);



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