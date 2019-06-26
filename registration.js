

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
 else{
// alert(fname);
return true;
} 
}



