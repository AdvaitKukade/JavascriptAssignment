function checkSession(){
    var seesionValue=sessionStorage.getItem("sessionkey");
    if(seesionValue===null)
    {
        window.location='../index.html';

    }
}

function getUserId(){
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

function showParticularTodo(){
    checkSession();
    let userid;
    let particularTodoCounter;
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    userid=getUserId();
    let particularTodo;
    
    particularTodo=sessionStorage.getItem('todoid');

    for(let j=0;j<userArrayItem[userid].todoItem.length;j++)
        {
            if(userArrayItem[userid].todoItem[j].todoNo == particularTodo)
            {
                particularTodoCounter=j;
                break;
            }
        }

    document.getElementById("itemName").value=userArrayItem[userid].todoItem[particularTodoCounter].todoTitle;
    document.getElementById("todoDueDate").value=userArrayItem[userid].todoItem[particularTodoCounter].todoDue;
    document.getElementById("toRemainder").value=userArrayItem[userid].todoItem[particularTodoCounter].remainder;
    document.getElementById("isPublic").value=userArrayItem[userid].todoItem[particularTodoCounter].public;
    document.getElementById("description").value=userArrayItem[userid].todoItem[particularTodoCounter].desc;
}

function saveItem(){
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let userid=getUserId();
    var particularTodoCounter;
    var todoTitleID=document.getElementById("itemName").value;
    var categoryId=document.querySelector('input[name="cate"]:checked').value;
    var dueDate=document.getElementById("todoDueDate").value;
    var setRemainder=document.getElementById("toRemainder").value;
    var isPublic=document.querySelector('input[name="ispublic"]:checked').value;
    var todoDescription = document.getElementById("description").value;

    let startDate=new Date(dueDate);
    let endDate=new Date(setRemainder);

    if(endDate<startDate)
    {
        alert("End date should be grater than start date");
        return false;
    }

    let particularTodo;
    
    particularTodo=sessionStorage.getItem('todoid');

    for(let j=0;j<userArrayItem[userid].todoItem.length;j++)
        {
            if(userArrayItem[userid].todoItem[j].todoNo == particularTodo)
            {
                particularTodoCounter=j;
                break;
            }
        }
    
    userArrayItem[userid].todoItem[particularTodoCounter].todoTitle=todoTitleID;
    userArrayItem[userid].todoItem[particularTodoCounter].todoCategory=categoryId;
    userArrayItem[userid].todoItem[particularTodoCounter].todoDue=dueDate;
    userArrayItem[userid].todoItem[particularTodoCounter].remainder=setRemainder;
    userArrayItem[userid].todoItem[particularTodoCounter].public=isPublic;
    userArrayItem[userid].todoItem[particularTodoCounter].desc=todoDescription;
    
    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);

    document.getElementById("toDoForm").reset();

}

function goBack(){
    sessionStorage.removeItem("particularTodoCount");
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
    home.style.display="none";
}