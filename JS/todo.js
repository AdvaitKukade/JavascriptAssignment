function checkSession(){
    var seesionValue=sessionStorage.getItem("sessionkey");
    if(seesionValue===null)
    {
        window.location='../index.html';

    }
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function addItem(){
    var todoID=makeid(3);
    var todoTitleID=document.getElementById("itemName").value;
    var categoryId=document.querySelector('input[name="cate"]:checked');
    var dueDate=document.getElementById("todoDueDate").value;
    var setRemainder=document.getElementById("toRemainder").value;
    var isPublic=document.querySelector('input[name="ispublic"]:checked');
    var todoDescription = document.getElementById("description").value;
    let sessionId= sessionStorage.getItem("sessionkey");
    var userArrayItem=new Array();
    let index;
    var todoObj=new Object();

    let startDate=new Date(dueDate);
    let endDate=new Date(setRemainder);

    if(endDate<startDate)
    {
        alert("end date should be greater than start date");
        return false;
    }

    if(categoryId==null)
    {
        categoryId="";

    }
    else{
        categoryId=document.querySelector('input[name="cate"]:checked').value;
    }
    if(isPublic==null)
    {
        isPublic="";
    }
    else{
       isPublic= document.querySelector('input[name="ispublic"]:checked').value;
    }
    todoObj={
        "todoNo":todoID,
        "todoTitle":todoTitleID,
        "todoCategory":categoryId,
        "todoDue":dueDate,
        "remainder":setRemainder,
        "public":isPublic,
        "desc":todoDescription,
        "status":"pending",
            };

    userArrayItem=JSON.parse(localStorage.getItem('user'));


    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            userArrayItem[index].todoItem.push(todoObj);
            var stringfyuserArrayItem=JSON.stringify(userArrayItem);
            localStorage.setItem('user',stringfyuserArrayItem);
        }   
    }

    document.getElementById("toDoForm").reset();




}


function callShowItemFile(){
    window.location = '../html/showTodaList.html';

}

function gotoProfile(){

    window.location = '../html/profile.html';
}

function logout(){
    sessionStorage.clear();
    window.location='../html/login.html';
}

function gotoHome(){
    var home=sessionStorage.getItem("homeSession");
    window.location='../index.html';
}    