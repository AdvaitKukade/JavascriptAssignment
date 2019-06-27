
 function nameValidation()
 {
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var email=document.getElementById("username").value;
    var passwd=document.getElementById("pwd").value;
    var genSelected = document.querySelector('input[name="gender"]:checked').value;
    var addr=document.getElementById("address").value;
    


    
      var letters = /^[A-Za-z]+$/;
      if(fname.match(letters) && lname.match(letters))
      {
      
      addUser();
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      
      }
    }

function addUser()
{   
    var userArray=[];
    var exist=0;
    var userObj={firstName:document.getElementById("firstNametxt").value,
    lastName:document.getElementById("lastNametxt").value,
    emailAddr:document.getElementById("username").value,
    pass:document.getElementById("pwd").value,
    gen:document.querySelector('input[name="gender"]:checked').value,
    addres:document.getElementById("address").value};

    userArray=JSON.parse(localStorage.getItem('user'));
    

     if(userArray)
     {
         //userArray=[];
         for(var counter=0;userArray.length<=1;counter++)
         {
            if(userArray[emailAddr][counter]==(document.getElementById("username").value))
            {
                exist++;

            }

        }
     }

    if(exist>1)
    {
        return false;

    }
    else
    {
    userArray.push(userObj);
    var stringifyUser=JSON.stringify(userArray);
    
    localStorage.setItem('user',stringifyUser);
    
    
    }
    


    //alert(stringifyUser);
    
    //alert(userArray.length);
} 

