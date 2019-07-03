function checkValidUser()
{

    var email=document.getElementById("emailId").value;
    var passwd=document.getElementById("pwdId").value;
    var exist=false;
    var userName;
    var emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var passRex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,15})/;



    if(!(email.match(emailExp)))
    {
        window.confirm("please enter valid email address");
        return false;
    }

    if(!(passwd.match(passRex)))
    {
        window.confirm("password should contain atleast 1 Capital letter, atleast 1 small letter, special symbol and range should between 6 to 15");
        return false;
    }
    

    if(localStorage.getItem('user'))
    {
            userArray=JSON.parse(localStorage.getItem('user'));
            var exist=false;
        
        
            for(var counter=0;counter<userArray.length;counter++)
            {
                    if((userArray[counter].emailAddr)==email && (userArray[counter].pass)==passwd)
                    {
                        exist=true;
                        userName=(userArray[counter].firstName);


                    }

            }
     

            if(exist==true)
            {
                
                    window.confirm("Hi  "+userName);
                    
                   
                   sessionStorage.setItem('sessionkey',email);
                   window.location = '../html/showTodaList.html';




            }

            else
            {
                window.confirm("unauthorised user");
            }
    }      



}


function gotoSignupPage()
{
    window.location = '../html/registration.html';

}


function gotoHomePage()
{
    window.location ='../index.html';
}


