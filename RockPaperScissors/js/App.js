var userScore = 0;
var computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById("hand-rock");
const paperDiv = document.getElementById("hand-paper");
const scissorDiv = document.getElementById("hand-scissor");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(2).sub();
    const smallComputerWord = 'computer'.fontsize(2).sub();
    const userChoiceDiv = document.getElementById('hand-' + userChoice);
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallComputerWord} you win!`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => {
        userChoiceDiv.classList.remove('green-glow');
    }, 500)
}

function lose(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(2).sub();
    const smallComputerWord = 'computer'.fontsize(2).sub();
    const userChoiceDiv = document.getElementById('hand-' + userChoice);
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallComputerWord} you lost...!`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() => {
        userChoiceDiv.classList.remove('red-glow');
    }, 500);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(2).sub();
    const smallComputerWord = 'computer'.fontsize(2).sub();
    const userChoiceDiv = document.getElementById('hand-' + userChoice);
    resultP.innerHTML = `${computerChoice}${smallComputerWord} equals ${userChoice}${smallUserWord} its a draw...`;
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(() => {
        userChoiceDiv.classList.remove('gray-glow');
    },500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(userChoice, computerChoice);
            break;
        case 'paperrock':
        case 'rockpaper':
        case 'scissorrock':
            lose(userChoice, computerChoice);
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorscissor':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', function () {
        game("rock");
    })

    paperDiv.addEventListener('click', function () {
        game("paper");
    })

    scissorDiv.addEventListener('click', function () {
        game("scissor");
    })
}

main();