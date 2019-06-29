
function showItem()
{
    var hst = document.getElementById("highscores");
    let sessionId= sessionStorage.getItem("sessionkey");

    // var highScores = [
    //     {name: "Maximillian", score: 1000},
    //     {name: "The second guy", score: 700},
    //     {name: "The newbie", score: 50},
    // ];

    // localStorage.setItem("highscores", JSON.stringify(highScores));

     let userArrayItem=JSON.parse(localStorage.getItem('user'));
     

    let todoUser=[];
    let index;

    for(index=0;index<userArrayItem.length;index++)

    {
        if((userArrayItem[index].emailAddr)==sessionId)
        {
            todoUser=userArrayItem[index].todoItem;

            //var stringfyuserArrayItem=JSON.stringify(userArrayItem);
            //localStorage.setItem('user',stringfyuserArrayItem);
        }   



    }

    //console.log(todoUser);
    //var retrievedScores = JSON.parse(localStorage.getItem('user'));

    for (var i = 0; i <todoUser.length; i++) {
        hst.innerHTML += "<tr><td>" + todoUser[i].todoTitle + "</td><td>" + todoUser[i].todoCategory + "</td><td>"+ todoUser[i].todoDue+"</td><td>" + todoUser[i].remainder+"</td><td>" + todoUser[i].public+"</td><td>" + todoUser[i].desc+"</td></tr>" ;
    }

}