function getComputerChoice() {
    let random_int = Math.floor(Math.random() * 3);

    if (random_int == 0) {
        return 'rock';
    } else if (random_int == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper, or scissors?');

    if (humanChoice.toLowerCase() == 'rock' || humanChoice.toLowerCase() == 'paper' || humanChoice.toLowerCase() == 'scissors') {
        return humanChoice;
    } else {
        return '';
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;
    let computerChoice;



    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log('You lose, paper beats rock');
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log('You win, paper beats rock');
            humanScore++
        } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log('You lose, rock beats scissors');
            computerScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log('You win, rock beats scissors');
            humanScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log('You lose, scissors beats paper');
            computerScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log('You win, scissors beats paper');
            humanScore++;
        } else if (humanChoice == computerChoice) {
            console.log('Tie!')
        } else {
            console.log('Unknown values, please try again')
        }        
    }

    function getGameResults(humanScore, computerScore) {
        console.log(`---------------------------------`)
        console.log('Scores:');
        console.log(`You: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);

        if (humanScore > computerScore) {
            console.log('You win!');
        } else if (computerScore > humanScore) {
            console.log(`Computer wins!`);
        } else {
            console.log(`It's a tie!`);
        }
    }

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    getGameResults(humanScore, computerScore);       

}

playGame();