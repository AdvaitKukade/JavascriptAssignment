function checkSession(){
    var seesionValue=sessionStorage.getItem("sessionkey");
    if(seesionValue===null)
    {
        window.location='../index.html';

    }
}

function logout(){
    sessionStorage.clear();
    window.location='../html/login.html';
}

function gotoHome(){
    var home=sessionStorage.getItem("homeSession");
    window.location='../index.html';
}

function showTodo(){
    window.location="../html/showTodaList.html";
}

function getUserId(){

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

function showInfo(){

    checkSession();
    
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let userid=getUserId();
    
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

function addTodo(){
    window.location="../html/todo.html";
}

function editChanges(){

    document.getElementById("firstNametxt").disabled=false;
    document.getElementById("lastNametxt").disabled=false;
    document.getElementById("username").disabled=false;
    document.getElementById("pwd").disabled=false;
    document.getElementById("address").disabled=false;
    document.getElementById("male").disabled=false;
    document.getElementById("female").disabled=false;
    document.getElementById("other").disabled=false;
    document.getElementById("profileImg").disabled=false;
    document.getElementById("btnedit").style.display="none";
    document.getElementById("btnsave").style.display="inline";
}

function saveChanges(){

    let sessionId= sessionStorage.getItem("sessionkey");
    var getImg=sessionStorage.getItem("profileSessionKey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let userid=getUserId();
    let index;
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var email=document.getElementById("username").value;
    var passwd=document.getElementById("pwd").value;
    var genSelected = document.querySelector('input[name="gender"]:checked').value;
    var addr=document.getElementById("address").value;
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
    
    userArrayItem[userid].firstName=fname;
    userArrayItem[userid].lastName=lname;
    userArrayItem[userid].emailAddr=email;
    userArrayItem[userid].pass=passwd;
    userArrayItem[userid].gen=genSelected;
    userArrayItem[userid].addres=addr;
    userArrayItem[userid].picture=getImg;

    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);
    document.getElementById("firstNametxt").disabled=true;
    document.getElementById("lastNametxt").disabled=true;
    document.getElementById("username").disabled=true;
    document.getElementById("pwd").disabled=true;
    document.getElementById("address").disabled=true;
    document.getElementById("male").disabled=true;
    document.getElementById("female").disabled=true;
    document.getElementById("other").disabled=true;
    document.getElementById("profileImg").disabled=true;
    document.getElementById("btnedit").style.display="inline";
    document.getElementById("btnsave").style.display="none";
    document.getElementById("saved").textContent="saved successfully!"
    showInfo();
}

