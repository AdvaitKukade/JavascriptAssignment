function addItem()
{
    var userArrayItem=new Array();
    var inputTxt=document.getElementById("addItems").value;
    let index;
    userArrayItem=JSON.parse(localStorage.getItem('user'));


    for(index=0;index<userArrayItem.length;index++)

    {

        userArrayItem[index].todo.push(inputTxt);

        var stringfyuserArrayItem=JSON.stringify(userArrayItem);
        localStorage.setItem('user',stringfyuserArrayItem);




    }








}