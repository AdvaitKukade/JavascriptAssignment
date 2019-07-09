function checkSession()
{
    var seesionValue=sessionStorage.getItem("sessionkey");
    if(!(seesionValue===null))
    {
        document.getElementById("showTodo").style.display="inline";
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

