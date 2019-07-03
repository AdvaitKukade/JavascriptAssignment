

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


function display()
{
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let todoParticularUserArray=[];
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoParticularUserArray=userArrayItem[index].todoItem;
            
            
        }   
    }

    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }




}



function getTOdoOfParticularUser()
{


    let sessionId= sessionStorage.getItem("sessionkey");

    

    let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    let todoParticularUserArray=[];
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoParticularUserArray=userArrayItem[index].todoItem;
            
            break;
            
            
        }   



    }

    return todoParticularUserArray;



}


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






function showItem()
{
    var userTable = document.getElementById("tableId");
    let todoParticularUserArray=getTOdoOfParticularUser();
    var userid=getUserId();


    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }

    

    else
    {
        for (var counter = 0; counter<todoParticularUserArray.length;counter++) 
        {
            var list=document.createElement("tr");
            var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+todoParticularUserArray[counter].todoNo+"></input></td><td>"+ todoParticularUserArray[counter].todoTitle + "</td><td>" + todoParticularUserArray[counter].todoCategory + "</td><td>"+ todoParticularUserArray[counter].todoDue+"</td><td>" + todoParticularUserArray[counter].remainder+"</td><td>" + todoParticularUserArray[counter].public+"</td><td>" + todoParticularUserArray[counter].desc+"</td><td>"+todoParticularUserArray[counter].status+"</td><td> <input type=button value=Edit id=button-"+todoParticularUserArray[counter].todoNo+" onclick=editTodo();></td></tr>";
            list.innerHTML=row;
            let tableHead=document.getElementById("headId");
            tableHead.appendChild(list);
        
        }
    }     
}

function changestatus()
{
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let sessionId= sessionStorage.getItem("sessionkey");
    let deleteArr=document.getElementsByName("deleteTodo");

    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            
            var particulatIndex=index;
            
        }   
    }

    var checkedarray=[];

       
 for(let j=0;j<deleteArr.length;j++)
 {
    let todostring=deleteArr[j].id;
    var todoid=todostring.split("-");
    if(document.getElementById("ch-"+todoid[1]).checked == true)
    {
          checkedarray.push(todoid[1]);
            
			
    }
}
for(var counter=(checkedarray.length)-1;counter>=0;counter--)
    {
        for(let j=0;j<userArrayItem[particulatIndex].todoItem.length;j++)
        {
            if(userArrayItem[particulatIndex].todoItem[j].todoNo == checkedarray[counter])
            {
            userArrayItem[particulatIndex].todoItem[j].status="is done";

        }
    }
    }


    // for(var count=0;count<userArrayItem[particulatIndex].todoItem.length;count++)
    // {
    //     if( document.getElementById("ch-"+count).checked == true)
    //     {
          
            
    //         checkedarray.push(count);
            
			
    //     }
    // }

    // for(var counter=(checkedarray.length)-1;counter>=0;counter--)
    // {
        
    //     userArrayItem[particulatIndex].todoItem[checkedarray[counter]].status="is done";
    // }

    
    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);

    window.location.reload();





}


function deleteTodo()
{
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    let deleteArr=document.getElementsByName("deleteTodo");
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            
            var particulatIndex=index;
            
        }   
    }

    var checkedarray=[];
    
 for(let j=0;j<deleteArr.length;j++)
 {
    let todostring=deleteArr[j].id;
    var todoid=todostring.split("-");
    if(document.getElementById("ch-"+todoid[1]).checked == true)
    {
          checkedarray.push(todoid[1]);
            
			
    }
}
for(var counter=(checkedarray.length)-1;counter>=0;counter--)
    {
        for(let j=0;j<userArrayItem[particulatIndex].todoItem.length;j++)
        {
            if(userArrayItem[particulatIndex].todoItem[j].todoNo == checkedarray[counter])
            {
                   userArrayItem[particulatIndex].todoItem.splice(j,1);
        }
    }
    }

    
    var stringifyUser=JSON.stringify(userArrayItem);
    localStorage.setItem('user',stringifyUser);
    
     window.location.reload();

}





function filterTodo()
{

    document.getElementById("listForCategory").style.display="inline";
 
    document.getElementById("searchBytitle").style.display="inline";

}


function filterByCat()
{

    let sessionId= sessionStorage.getItem("sessionkey");

    

    let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    let todoParticularUserArray=[];
    let index;
    let particularIndex;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoParticularUserArray=userArrayItem[index].todoItem;
            particularIndex=index;
            break;
        }   
    }
    

    if(document.getElementById("listForCategory").value==="bycategory")
    {
        
    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }
    else
    {
        for (var counter = 0; counter<todoParticularUserArray.length;counter++) 
        {
            var list=document.createElement("tr");
            var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ todoParticularUserArray[counter].todoTitle + "</td><td>" + todoParticularUserArray[counter].todoCategory + "</td><td>"+ todoParticularUserArray[counter].todoDue+"</td><td>" + todoParticularUserArray[counter].remainder+"</td><td>" + todoParticularUserArray[counter].public+"</td><td>" + todoParticularUserArray[counter].desc+"</td><td><input type=checkbox name=isDoneTodo id=check-"+counter+" onclick=changestatus();></input></td><td>"+todoParticularUserArray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
            list.innerHTML=row;
            let tableHead=document.getElementById("headId");
            tableHead.appendChild(list);
        
        }
    }     
        
            

    }

        if(document.getElementById("listForCategory").value==="Social")
        {
            var filteredarray=todoParticularUserArray.filter(function(category1){
				return(category1.todoCategory=== "Social")
                })


                let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }      
                
            for (var counter = 0; counter<filteredarray.length;counter++) 
            {
                var list=document.createElement("tr");
                var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ filteredarray[counter].todoTitle + "</td><td>" + filteredarray[counter].todoCategory + "</td><td>"+filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td><input type=checkbox name=isDoneTodo id=check-"+counter+" onclick=changestatus();></input></td><td>"+filteredarray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
                 list.innerHTML=row;
                let tblBody=document.getElementById("headId");
                tblBody.appendChild(list);
        
            }

            

        }



        if(document.getElementById("listForCategory").value==="Office")
        {
            var filteredarray=todoParticularUserArray.filter(function(category1){
				return(category1.todoCategory=== "Office")
                })


                let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }      
                
            for (var counter = 0; counter<filteredarray.length;counter++) 
            {
                var list=document.createElement("tr");
                var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ filteredarray[counter].todoTitle + "</td><td>" + filteredarray[counter].todoCategory + "</td><td>"+filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td><input type=checkbox name=isDoneTodo id=check-"+counter+" onclick=changestatus();></input></td><td>"+filteredarray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
                list.innerHTML=row;
                 list.innerHTML=row;
                let tableHead=document.getElementById("headId");
                tableHead.appendChild(list);
        
            }

                

        }


        if(document.getElementById("listForCategory").value==="Personal")
        {
            var filteredarray=todoParticularUserArray.filter(function(category1){
				return(category1.todoCategory=== "Personal")
                })


                let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }      
                
            for (var counter = 0; counter<filteredarray.length;counter++) 
            {
                var list=document.createElement("tr");
                var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ filteredarray[counter].todoTitle + "</td><td>" + filteredarray[counter].todoCategory + "</td><td>"+filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td><input type=checkbox name=isDoneTodo id=check-"+counter+" onclick=changestatus();></input></td><td>"+filteredarray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
                list.innerHTML=row;
                 list.innerHTML=row;
                let tableHead=document.getElementById("headId");
                tableHead.appendChild(list);
        
            }

                

        }

}


function filterByName()
{
    let getTitle=document.getElementById("searchBytitle").value;
    var particularTodo=getTOdoOfParticularUser();
    var titleArray = [];
    let a=document.getElementById("headId");
    let deleteChild=a.lastElementChild;

    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 


    }


    
    for(var counter=0;counter<particularTodo.length;counter++)
    {
        if(particularTodo[counter].todoTitle==getTitle)
        {
            titleArray.push(particularTodo[counter]);

        }

    }

    while(deleteChild)
    {
        a.removeChild(deleteChild);
        deleteChild=a.lastElementChild;
    }      
                
    for (var counter = 0; counter<titleArray.length;counter++) 
    {
        var list=document.createElement("tr");
        var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ titleArray[counter].todoTitle + "</td><td>" + titleArray[counter].todoCategory + "</td><td>"+titleArray[counter].todoDue+"</td><td>" + titleArray[counter].remainder+"</td><td>" +titleArray[counter].public+"</td><td>" + titleArray[counter].desc+"</td><td><input type=checkbox name=isDoneTodo id=check-"+counter+" onclick=changestatus();></input></td><td>"+titleArray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
        list.innerHTML=row;
        let tableHead=document.getElementById("headId");
        tableHead.appendChild(list);
        
    }


    
}


    


function filterByDate()
{

    var startDateTodo= new Date(document.getElementById("startDate").value);
    var endDateTodo=new Date(document.getElementById("endDate").value);
    var partularArray=getTOdoOfParticularUser();

    if(todoParticularUserArray.length===0)
    {
        let newEle=document.createElement("tr");
        var node=document.createTextNode("no todos");
        newEle.appendChild(node);
        userTable.appendChild(newEle); 
        


    }
    else
    {
    
    var filteredarray=partularArray.filter(function(todoitem){
        return( new Date(todoitem.todoDue).getTime()>=startDateTodo && new Date(todoitem.todoDue).getTime()<=endDateTodo)
     })
    
   let a=document.getElementById("headId");
                let deleteChild=a.lastElementChild;
                while(deleteChild)
                {
                    a.removeChild(deleteChild);
                    deleteChild=a.lastElementChild;
                }  


                for (var counter = 0; counter<filteredarray.length;counter++) 
                {
                    var list=document.createElement("tr");
                    var row= "<tr id=row-"+counter+"><td><input type=checkbox name=deleteTodo id=ch-"+counter+"></input></td><td>"+ filteredarray[counter].todoTitle + "</td><td>" + filteredarray[counter].todoCategory + "</td><td>"+filteredarray[counter].todoDue+"</td><td>" + filteredarray[counter].remainder+"</td><td>" +filteredarray[counter].public+"</td><td>" + filteredarray[counter].desc+"</td><td><input type=checkbox name=isDoneTodo id=check-"+counter+" onclick=changestatus();></input></td><td>"+filteredarray[counter].status+"</td><td> <input type=button value=Edit id=button-"+counter+" onclick=editTodo();></td></tr>";
                    list.innerHTML=row;
                     list.innerHTML=row;
                    let tableHead=document.getElementById("headId");
                    tableHead.appendChild(list);
            
                }        


            }
}



function editTodo()
{
    
    let sessionId= sessionStorage.getItem("sessionkey");
    let userArrayItem=JSON.parse(localStorage.getItem('user'));
    var userId=getUserId();
    var clikedarray;
    var particularTodoCounter;


    for(var count=0;count<userArrayItem[userId].todoItem.length;count++)
    {
        if( document.getElementById("button-"+count).click == true)
        {
          
     
            clickedarray=count;
            
			
        }
    }

    particularTodoCounter=clikedarray-1;

    sessionStorage.setItem('particularTodoCount',particularTodoCounter);

    window.location = '../html/editTodo.html';

}


function goToAddPage()
{
    window.location = '../html/todo.html';
}
