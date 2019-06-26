

function required()
{
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;
    var uname=document.getElementById("username").value;
    var paswd=document.getElementById("pwd").value;
    

if(fname == "" && lname == "" && uname=="" && paswd=="" )
 {
 
 return false;
 }
  
}


function validation()
{
    required();
    var fname=document.getElementById("firstNametxt").value;
    var lname=document.getElementById("lastNametxt").value;

   
      var letters = /^[A-Za-z]+$/;
      if(fname.match(letters) && lname.match(letters))
      {
      
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      
      

}
}