function getUserId()
{
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





function showParticularTodo()
{
    var userid;
    var particularTodoCounter;
    
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    var userid=getUserId();
    
    var particularTodoCounter;

    particularTodoCounter=sessionStorage.getItem('particularTodoCount');


    document.getElementById("itemName").value=userArrayItem[userid].todoItem[particularTodoCounter].todoTitle;
    document.getElementById("todoDueDate").value=userArrayItem[userid].todoItem[particularTodoCounter].todoDue;
    document.getElementById("toRemainder").value=userArrayItem[userid].todoItem[particularTodoCounter].remainder;
    document.getElementById("isPublic").value=userArrayItem[userid].todoItem[particularTodoCounter].public;
    document.getElementById("description").value=userArrayItem[userid].todoItem[particularTodoCounter].desc;


}


function saveItem()
{

    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let userid=getUserId();
    var particularTodoCounter=sessionStorage.getItem('particularTodoCount');

    var todoTitleID=document.getElementById("itemName").value;
    var categoryId=document.querySelector('input[name="cate"]:checked').value;
    var dueDate=document.getElementById("todoDueDate").value;
    var setRemainder=document.getElementById("toRemainder").value;
    var isPublic=document.querySelector('input[name="ispublic"]:checked').value;
    var todoDescription = document.getElementById("description").value;


    userArrayItem[userid].todoItem[particularTodoCounter].todoTitle=todoTitleID;
    userArrayItem[userid].todoItem[particularTodoCounter].todoCategory=categoryId;
    userArrayItem[userid].todoItem[particularTodoCounter].todoDue=dueDate;
    userArrayItem[userid].todoItem[particularTodoCounter].remainder=setRemainder;
    userArrayItem[userid].todoItem[particularTodoCounter].public=isPublic;
    userArrayItem[userid].todoItem[particularTodoCounter].desc=todoDescription;



    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);


}



function goBack()
{
    sessionStorage.removeItem("particularTodoCount");
    window.location = '../html/showTodaList.html';



}



function gotoProfile()
{

    window.location = '../html/profile.html';


}


function logout()
{
    sessionStorage.clear();
    window.location='../html/login.html';
}

function gotoHome()
{
    var home=sessionStorage.getItem("homeSession");

    
    window.location='../index.html';
    home.style.display="none";


    
}