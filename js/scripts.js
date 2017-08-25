//Back-End Logic

//Constructor function for the player's names
function Players (player1,player2){
    this.player1 = player1;
    this.player2 = player2;
}
//
//Players.prototype.printNames = function(this){
//function printNames(someNames){
//var name1=$(".player1NameOutput").text(someNames.player1);
//   var name2 = $(".player2NameOutput").text(someNames.player2);
//    return name1 + name2;
//    
//}


//Front End Logic
$(document).ready(function(){
    //Makes the 'Rules' title clickeable and the rules themselves hideable.
    $("#rulesHeader").click(function(){
        $("#rulesDefinitions").toggle();
    });
    
     $("#playerNames").submit(function(event){
         console.log("1");
        event.preventDefault();
         
        //Store the players names in variables and output them.
        var gamer1 = $("#player1Name").val();
           console.log(gamer1);
         var gamer2 = $("#player2Name").val();
           console.log(gamer2);
        
        var gamers = new Players(gamer1,gamer2);
   console.log(gamers);
    console.log(gamers.player1 + gamers.player2);
    $(".player1NameOutput").text(gamers.player1);
    $(".player2NameOutput").text(gamers.player2);     
    })
    
    
})