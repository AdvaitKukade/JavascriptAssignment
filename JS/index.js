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
