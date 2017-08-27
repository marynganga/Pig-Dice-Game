//Global Variables
var player1, player2;
//Back-End Logic
//Constructor function for a player
function Player(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}
//Function to disable and enable gaming areas according to which player is active.
function activeUser() {
    if (player1.active === true || player2.active === false) {
        $('.player1Area').children().prop('disabled', false);
        $('.player2Area').children().prop('disabled', true);
    } else {
        $('.player1Area').children().prop('disabled', true);
        $('.player2Area').children().prop('disabled', false);
    };
};
//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    this.diceRoll = randomNo;
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        this.active = false;
        activeUser();
        return alert("Oops you got a 1. Your turn is over!");
    } else {
        this.turnTotal += randomNo;
    };
    return this.diceRoll;
};
//Function on what is to happen when a player holds the game.
Player.prototype.hold = function () {
    activeUser();
    this.overallScore += this.turnTotal;
    if (this.overallScore >= 100) {
        alert("Game Over. You win!!!!");
    } else {
        alert("Your turn is over!");
    }
    this.turnTotal = 0;
    console.log('on adding the turnTotal to the overall score, the turn total becomes: ' + this.turnTotal);
    return this.overallScore;
};
//Function to reset the form input fields.
function resetFields() {
    $("input#player1Name").val("");
    $("input#player2Name").val("");
    $('button#playButton').prop('disabled', true);
};
//Front End Logic
$(document).ready(function () {
    $("#rulesHeader").click(function () { //Makes the 'Rules' title clickeable and the rules themselves hideable.
        $("#rulesDefinitions").toggle();
    });
    //Actions when player enters name
    $("#playerNames").submit(function (event) {
        event.preventDefault();
        //Store the players names in variables.
        var gamer1 = $("#player1Name").val();
        var gamer2 = $("#player2Name").val();
        //Put the names into an object using the constructor Players.
        player1 = new Player(gamer1);
        player2 = new Player(gamer2);
        //Output the names into each appropriate section
        $(".player1NameOutput").text(player1.name);
        $(".player2NameOutput").text(player2.name);
        resetFields(); //Clear the form input fields
    });
    //Display dice roll number and turn total when the roll button is clicked
    $('.roll1').click(function (event) { //roll button for player1
        event.preventDefault();
        //Activate Gaming Area
        player1.active = true;
        player2.active = false;
        player1.roll(); //call the function to generate random numbers
        $('.diceRoll1').text(player1.diceRoll); //display the rolled dice number
        $('.turnScore1').text(player1.turnTotal); //display the turn score (temporary score)
    });
    $('.roll2').click(function (event) { //roll button for player2
        event.preventDefault();
        //Activate Gaming Area
        player2.active = true;
        player1.active = false;
        player2.roll(); //call the function to generate random numbers
        $('.diceRoll2').text(player2.diceRoll); //display the rolled dice number
        $('.turnScore2').text(player2.turnTotal); //display the turn score (temporary score)
    });

    //Display overall score when the hold button is clicked
    $('.hold1').click(function (event) { //hold button for player1
        event.preventDefault();
        //Deactivate Gaming Area
        player1.active = false;
        player2.active = true;
        player1.hold(); //call the function to add the turn score to the overall score
        $('.overallScore1').text(player1.overallScore); //display the overall score
        //Clear turn score and total score
        $('.diceRoll1').text("");
        $('.turnScore1').text("");
    });
    $('.hold2').click(function (event) { //hold button for player2
        event.preventDefault();
        //Deactivate Gaming Area
        player2.active = false;
        player1.active = true;
        player2.hold(); //call the function to add the turn score to the overall score
        $('.overallScore2').text(player2.overallScore); //display the overall score
        //Clear turn score and total score
        $('.diceRoll2').text("");
        $('.turnScore2').text("");
    });

});
