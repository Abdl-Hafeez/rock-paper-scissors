const array = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*3)
    return array[randomIndex]
}

function getUserChoice() {
    const userInput = prompt("Rock , Paper or Scissors?");
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanChoice= getUserChoice();
    const  computerChoice = getComputerChoice();
    if(humanChoice=== computerChoice) {
        console.log("It's a tie! Let's go again!");
        console.log('Your Score: ' + humanScore);
        console.log('Computer Score: ' + computerScore);
        return;
    } else if((humanChoice === 'rock' && computerChoice=== 'scissors') || (humanChoice=== 'paper' && computerChoice=== 'rock') || (humanChoice=== 'scissors' && computerChoice=== 'paper')) {
        console.log("You won! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        console.log('Your Score: ' + humanScore);
        console.log('Computer Score: ' + computerScore);
        return;
    } else if((humanChoice=== 'rock' && computerChoice=== 'paper') || (humanChoice=== 'paper' && computerChoice=== 'scissors') || (humanChoice=== 'scissors' && computerChoice=== 'rock')) {
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        console.log('Your Score: ' + humanScore);
        console.log('Computer Score: ' + computerScore);
        return;
    }  
}

function play() {
    for(let i = 1; i <= 5; i++) {
        playRound();
    }
    if(humanScore > computerScore) {
        console.log('You won the Game!');
    } else if (humanScore < computerScore) {
        console.log('You lost the Game!')
    } else {
        console.log('It ends in a tie!')
    }
}

play();

