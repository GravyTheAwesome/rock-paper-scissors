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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let computerChoice;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const display = document.querySelector('#display');
    const humanScoreDisplay = document.querySelector('#humanScore');
    const computerScoreDisplay = document.querySelector('#computerScore');

    console.log(humanScoreDisplay.innerHTML);

    function updateScoreDisplay(humanScore, computerScore) {
        humanScoreDisplay.innerHTML = `You: ${humanScore}`;
        computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
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

    function playRound(computerChoice) {
        computerChoice = computerChoice.toLowerCase();

        rock.addEventListener('click', function () {
            switch (computerChoice) {
                case 'paper':
                    display.innerHTML = '\nYou lose, paper beats rock';
                    computerScore++;
                    break;
                case 'scissors':
                    display.innerHTML = '\nYou win, rock beats scissors';
                    humanScore++;
                    break;
                case 'rock':
                    display.innerHTML = '\nTie!';
                    break;
            }

            updateScoreDisplay(humanScore, computerScore, humanScoreDisplay, computerScoreDisplay);
            getGameResults(humanScore, computerScore);
        });   
        
        paper.addEventListener('click', function () {
            switch (computerChoice) {
                case 'scissors':
                    display.innerHTML = '\nYou lose, scissors beats paper';
                    computerScore++;
                    break;
                case 'rock':
                    display.innerHTML = '\nYou win, paper beats rock';
                    humanScore++;
                    break;
                case 'paper':
                    display.innerHTML = '\nTie!';
                    break;
            }

            updateScoreDisplay(humanScore, computerScore, humanScoreDisplay, computerScoreDisplay);
            getGameResults(humanScore, computerScore);
        });    
        
        scissors.addEventListener('click', function () {
            switch (computerChoice) {
                case 'rock':
                    display.innerHTML = '\nYou lose, rock beats scissors';
                    computerScore++;
                    break;
                case 'paper':
                    display.innerHTML = '\nYou win, scissors beats paper';
                    humanScore++;
                    break;
                case 'scissors':
                    display.innerHTML = '\nTie!';
                    break;
            }

            updateScoreDisplay(humanScore, computerScore, humanScoreDisplay, computerScoreDisplay);
            getGameResults(humanScore, computerScore);
        });  
        
    }


    computerChoice = getComputerChoice();

    playRound(computerChoice);   
    

}

playGame();
