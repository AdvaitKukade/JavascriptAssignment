function checkValidUser()
{

    var email=document.getElementById("emailId").value;
    var passwd=document.getElementById("pwdId").value;
    var exist=false;
    var userName;

    

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
                    //var userName=userArray[counter].firstName;
                    window.confirm("Hi  "+userName);
                    //console.log(" emailId  already exist");
                   // return false;
                   sessionStorage.setItem('sessionkey',email);
                   window.location = './todo.html';




            }

            else
            {
                window.confirm("unauthorised user");
            }
    }      











}


function gotoSignupPage()
{
    window.location = './registration.html';

}


