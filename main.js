const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
let playerScore = 0;
let computerScore = 0;

const infoText = document.querySelector(".info-text");

const options = ["piedra", "papel", "tijeras"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection]; 
}

rock.addEventListener('click', () => {
    playRound("piedra", getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound("papel", getComputerChoice())
});

scissor.addEventListener('click', () => {
    playRound("tijeras", getComputerChoice())
});

function winner(playerScore, computerScore) {
    if (Number(playerScore) == 5) {
        infoText.textContent = "El ganador es: Player"
        playerText.textContent = "player: 0";
        computerText.textContent = "computer: 0";
        playerScore = 0;
        computerScore = 0;
        return;
    } else if (Number(computerScore) == 5) {
        infoText.textContent = "El ganador es: Computer"
        playerText.textContent = "player: 0";
        computerText.textContent = "computer: 0";
        playerScore = 0;
        computerScore = 0;
        return;
    }
}

function playRound(playerSelection, computerSelection) {

    if (Number(playerScore) == 5 || Number(computerScore) == 5) {
        return winner(playerScore, computerScore);
    }
        
    if (playerSelection === "tijeras" && computerSelection === "papel") {
        infoText.textContent = "¡Ganaste! Tijeras cortan papel";
        playerScore++;
        playerText.textContent = `player: ${playerScore}`;
        return;
    } else if (playerSelection === "tijeras" && computerSelection === "piedra") {
        infoText.textContent = "¡Perdiste! piedra aplasta tijeras";
        computerScore++;
        computerText.textContent = `computer: ${computerScore}`
        return;
    } 

    if (playerSelection === "papel" && computerSelection === "piedra") {
        infoText.textContent = "¡Ganaste! papel envuelve piedra";
        playerScore++;
        playerText.textContent = `player: ${playerScore}`;
        return;
    } else if (playerSelection === "papel" && computerSelection === "tijeras") {
        infoText.textContent = "¡Perdiste! tijeras cortan papel";
        computerScore++;
        computerText.textContent = `computer: ${computerScore}`;
        return;
    }

    if (playerSelection === "piedra" && computerSelection === "tijeras") {
        infoText.textContent = "¡Ganaste! piedra aplasta tijeras";
        playerScore++;
        playerText.textContent = `player: ${playerScore}`;
        return;
    } else if (playerSelection === "piedra" && computerSelection === "papel") {
        infoText.textContent = "¡Perdiste! papel envuelve piedra";
        computerScore++;
        computerText.textContent = `computer: ${computerScore}`;
        return;
    } 

    infoText.textContent = "¡Empate!";
    return;
}