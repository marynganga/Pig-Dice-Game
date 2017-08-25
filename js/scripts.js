//Back-End Logic
//Constructor function for a player
function Player(name, turnTotal, totalScore) {
    this.name = name;
    this.turnTotal = 0;
    this.totalScore = 0;
}

//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1);
    return randomNo;
    this.turnTotal += randomNo;
    this.turnTotal;
    
//     if (randomNo > 1) {
//     this.totalScore += this.diceRoll;
//      console.log(this.totalScore);
//  } else {
//      this.totalScore = 0;
//     console.log(this.totalScore);
//    alert("Oops you got a 1. Your turn is over");
//    
//};
};
//function findTotalScore(){
//    if (randomNo > 1) {
//        this.totalScore += this.diceRoll;
//        alert(this.totalScore);
//        return this.totalScore;
//        console.log(this.totalScore);
//    } else {
//        this.totalScore = 0;
//        return this.totalScore;
//        console.log(this.totalScore);
//        alert("Oops you got a 1. Your turn is over.");
//
//    }
//}

//Reset the fields
function resetFields() {
    $("input#player1Name").val("");
    $("input#player2Name").val("");
}


//Front End Logic
$(document).ready(function () {
    //Makes the 'Rules' title clickeable and the rules themselves hideable.
    $("#rulesHeader").click(function () {
        $("#rulesDefinitions").toggle();
    });
    //Actions when player enters name
    $("#playerNames").submit(function (event) {

        event.preventDefault();
        //Store the players names in variables and output them.
        var gamer1 = $("#player1Name").val();
        console.log(gamer1);
        var gamer2 = $("#player2Name").val();
        console.log(gamer2);
        //Put the names into an object using the constructor Players
        var player1 = new Player(gamer1);
        var player2 = new Player(gamer2);
        console.log(player1, player2);
        //Output the names into each appropriate section
        $(".player1NameOutput").text(player1.name);
        $(".player2NameOutput").text(player2.name);
        //Clear the input fields
        resetFields();
        //});

        $('.roll').click(function (event) {
            event.preventDefault();
            //call the function to generate random numbers
            //display the turn score
     $('.diceroll1').text(player1.roll());
        console.log(player1.roll());

            //display the total score
//            $('.totalScore1').text(player1.totalScore);
//         console.log(player1.totalScore);
      });

    });


});
