// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Inside the function:




// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.

var humanScore = 0;
var computerScore = 0;
var rock = "rock";
var scissors = "scissors";
var paper = "paper";

function play (humanPlay, computerPlay) {
  console.log(" You Played " + humanPlay + " The bot played " + computerPlay);

  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )
  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )
    if (humanPlay === computerPlay) {
      console.log ("You Tied");
    } else if (humanPlay === "paper" && computerPlay === "rock" ||
    humanPlay === "rock" && computerPlay === "scissors" ||
    humanPlay === "scissors" && computerPlay ==="paper") {

      console.log("You win!");
      humanScore += 1;

    } else {
      console.log("You lose!");
      computerScore +=1;
    }
    console.log ("You have " + humanScore + " points" );
    console.log ("The bot has " + computerScore + " points");
}
  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"

play('rock','paper');
play('rock','scissors');
play('rock','rock');
play('scissors','paper');
play('scissors', 'scissors');

// BONUS:
// Create a "best of 3" version
console.log ("best of 3")



// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
function playRandom(humanPlay) {
  var rand = Math.random();
  var choices = [rock, paper, scissors];
  var length = choices.length;
  var index = Math.floor(rand * length); // should be 0, 1, or 2
  var computerPlay = choices[index];

  play(humanPlay, computerPlay);
}

console.log('--- Playing a randomized computer ---');
playRandom(rock);
playRandom(rock);
playRandom(rock);
playRandom(rock);
playRandom(rock);
