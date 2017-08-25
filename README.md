# Pig Dice Game
#### A simple dice game with two players. Each player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". The player who first scores 100 or more points wins. 25/08/2017

## Description
This is a simple dice game where two players have the chance to roll the dice to try and achieve a score of 100. Each player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". 

The rules of the game are:
* When a player rolls a 1, their  total score reverts to 0 and it becomes the next player's turn.
* When the player rolls a 2 - 6, the score is added to their turn total and they can continue to play
* When the player chooses to "hold", their turn total is added to their total score, and it becomes the next player's turn.
* The player who first scores 100 or more points wins.

## Specifications
1. It can display the inputted name of the players when 'Play' is clicked.
* Input:

         Player1: Mary
         Player2: Sam
* Output:
         
         Players:   Mary              Sam
 
 2. Player1 can roll the dice and the result displayed as their turn score.
 * Input:
 
        'Roll' button is clicked
 * Output:
  
         Turn Score: 6
  
3. Player1 can hold the dice and their turn total score is added to their total score. Player2 then has the chance to play.
 * Input: 
 
         'Hold' button is clicked.
 * Output:
  
          Turn Score: 3
          Total Score: 9
          
4. Player2 can roll the dice and the result displayed as their turn score.
 * Input:
 
        'Roll' button is clicked
 * Output:
  
         Turn Score: 5
  
5. Player2 can hold the dice and their turn score is added to their total score. Player1 then has the chance to play.
 * Input: 
  
          'Hold' button is clicked.
 * Output:
  
          Turn Score: 4
          Total Score: 9        
          
6. If a player's turn score is a 1, their total score will be reduced to 0.
  * Input:
      
            'Roll' button is clicked
            Turn Scroe: 0
   * Output: 
            
            Previous Total Score: 45
            New Total Score: 0
    
7. It allows a player a maximum of 6 consecutive plays, then moves to the next player.
   * Input: 
    
            Player1: 'Roll' dice 6 consecutive times
   * Output:
 
            Switches to Player2
          
## Setup/Installation
To view the website, click [Pig Dice Game](https://marynganga.github.io/Pig-Dice-Game) or copy (https://marynganga.github.io/Pig-Dice-Game) to your browser and load it.

## Known Bugs
There are no known bugs.

## Technologies Used
* HTML
* CSS
* BOOTSTRAP
* JAVASCRIPT
* JQUERY

## Licence
MIT &copy;2017 [Mary Ng'ang'a](https://github.com/marynganga)
