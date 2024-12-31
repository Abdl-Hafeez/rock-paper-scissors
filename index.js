const selectionBtn = document.querySelectorAll('.selectionBtn');
const result = document.querySelector('.result');

const array = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*3)
    return array[randomIndex];
}

function getUserChoice(event) {
    const userInput = event.target.value;
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(e) {
    const humanChoice = getUserChoice(e);
    const computerChoice = getComputerChoice();
    result.textContent = '';
    if(humanChoice === computerChoice) {
        const par1 = document.createElement('p');
        par1.textContent = `It's a tie! Let's go again!`;
        const par2 = document.createElement('p');
        par2.textContent = `Your Score:  ${humanScore}`;
        const par3 = document.createElement('p');
        par3.textContent = `Computer Score:  ${computerScore}`;
        result.append(par1, par2, par3);
    } else if((humanChoice === 'Rock' && computerChoice=== 'Scissors') || (humanChoice=== 'Paper' && computerChoice=== 'Rock') || (humanChoice=== 'Scissors' && computerChoice=== 'Paper')) {
        const par1 = document.createElement('p');
        par1.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
        const par2 = document.createElement('p');
        humanScore++;
        par2.textContent = `Your Score:  ${humanScore}`;
        const par3 = document.createElement('p');
        par3.textContent = `Computer Score:  ${computerScore}`;
        result.append(par1, par2, par3);
    } else if((humanChoice=== 'Rock' && computerChoice=== 'Paper') || (humanChoice=== 'Paper' && computerChoice=== 'Scissors') || (humanChoice=== 'Scissors' && computerChoice=== 'Rock')) {
        const par1 = document.createElement('p');
        par1.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`;
        const par2 = document.createElement('p');
        computerScore++;
        par2.textContent = `Your Score:  ${humanScore}`;
        const par3 = document.createElement('p');
        par3.textContent = `Computer Score:  ${computerScore}`;
        result.append(par1, par2, par3);
    }  
}

function play(e) {
    if(humanScore === 5 || computerScore === 5) {
        return;
    }
    playRound(e);
    if(humanScore === 5 || computerScore === 5) {
        const finalResult = document.createElement('div');
        if(humanScore === 5) {
            finalResult.textContent = `You won the Game!`;
        } else if (computerScore === 5) {
            finalResult.textContent = `You lost the Game!`;
        } 
        result.appendChild(finalResult);
        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Restart';
        restartBtn.addEventListener('click', resetGame);
        result.appendChild(restartBtn);

    } 
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    result.textContent = '';
}

selectionBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        play(event);
    });
})

