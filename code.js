

function playGame() {

    function getComputerChoice() {
        let random_int = Math.floor(Math.random() * 3);

        if (random_int == 0) {
            return 'rock';
        } else if (random_int == 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    };

    let humanScore = 0;
    let computerScore = 0;
    let computerChoice = getComputerChoice();
    let roundCount = 0;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const display = document.querySelector('#display');
    const humanScoreDisplay = document.querySelector('#humanScore');
    const computerScoreDisplay = document.querySelector('#computerScore');

    function updateScoreDisplay(humanScore, computerScore) {
        humanScoreDisplay.innerHTML = `You: ${humanScore}`;
        computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
    };

    function checkRoundOver() {
        if (roundCount > 4) {
            getGameResults(humanScore, computerScore);
            if (humanScore > computerScore) {
                display.innerHTML = 'You win!'
            } else if (computerScore > humanScore) {
                display.innerHTML = 'Computer wins!'
            } else {
                display.innerHTML = 'It\'s a tie!'
            }
        } else {
            updateScoreDisplay(humanScore, computerScore);
            roundCount++;
        };
    };

    function incrementScore(scorer) {
        if (roundCount < 4) {
            if (scorer == computerScore) {
                computerScore++;
            } else {
                humanScore++;
            }
        };
    };

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
        };
    };

    function playRound(computerChoice) {

        rock.addEventListener('click', function () {
            switch (computerChoice) {
                case 'paper':
                    display.innerHTML = '\nYou lose, paper beats rock';
                    incrementScore(computerScore);
                    computerChoice = getComputerChoice();
                    break;
                case 'scissors':
                    display.innerHTML = '\nYou win, rock beats scissors'
                    incrementScore(humanScore);
                    computerChoice = getComputerChoice();
                    break;
                case 'rock':
                    display.innerHTML = '\nTie!';
                    computerChoice = getComputerChoice();
                    break;
            }

            checkRoundOver();
        });   
        
        paper.addEventListener('click', function () {
            switch (computerChoice) {
                case 'scissors':
                    display.innerHTML = '\nYou lose, scissors beats paper';
                    incrementScore(computerScore);
                    computerChoice = getComputerChoice();
                    break;
                case 'rock':
                    display.innerHTML = '\nYou win, paper beats rock';
                    incrementScore(humanScore);
                    computerChoice = getComputerChoice();
                    break;
                case 'paper':
                    display.innerHTML = '\nTie!';
                    computerChoice = getComputerChoice();
                    break;
            }

            checkRoundOver();
        });    
        
        scissors.addEventListener('click', function () {
            switch (computerChoice) {
                case 'rock':
                    display.innerHTML = '\nYou lose, rock beats scissors';
                    incrementScore(computerScore);
                    computerChoice = getComputerChoice();
                    break;
                case 'paper':
                    display.innerHTML = '\nYou win, scissors beats paper';
                    incrementScore(humanScore);
                    computerChoice = getComputerChoice();
                    break;
                case 'scissors':
                    display.innerHTML = '\nTie!';
                    computerChoice = getComputerChoice();
                    break;
            }

            checkRoundOver();
        });  
        
    };

    playRound(computerChoice);   
    

};

playGame();
