function addItem()
{
    
    var todoTitleID=document.getElementById("itemName").value;
    var categoryId=document.querySelector('input[name="cate"]:checked').value;



    var dueDate=document.getElementById("todoDueDate").value;
    var setRemainder=document.getElementById("toRemainder").value;
    var isPublic=document.querySelector('input[name="ispublic"]:checked').value;

    var todoDescription = document.getElementById("description").value;
    let sessionId= sessionStorage.getItem("sessionkey");
    var userArrayItem=new Array();
    let index;

    var todoObj=new Object();

    todoObj={
        "todoTitle":todoTitleID,
        "todoCategory":categoryId,
        "todoDue":dueDate,
        "remainder":setRemainder,
        "public":isPublic,
        "desc":todoDescription
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








}


function callShowItemFile()
{
    window.location = './showTodaList.html';

}