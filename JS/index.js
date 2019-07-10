function checkSession()
{
    var seesionValue=sessionStorage.getItem("sessionkey");
    if(!(seesionValue===null))
    {
        document.getElementById("showTodo").style.display="inline";
        document.getElementById("signBtn").style.display="none";
        document.getElementById("signupBtn").style.display="none";
    }
}

function storeHomeId()
{
    var home=document.getElementById("homeLink");
    sessionStorage.setItem("homeSession",home);
}

function gotologin()
{
    window.location = './html/login.html';
}

function gotoregi()
{
    window.location = './html/registration.html';
}

function showTodo()
{
    window.location = './html/showTodaList.html';
}

