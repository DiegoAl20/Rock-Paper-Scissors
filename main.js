const options = ["piedra", "papel", "tijeras"];

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    return options[computerSelection]; 
}

function playerSelection() {
    const playerSelection = prompt("Escriba su opción: (piedra, papel o tijeras)");
    return playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "tijeras" && computerSelection === "papel") {
        return console.log("¡Ganaste! Tijeras cortan papel");
    } else if (playerSelection === "tijeras" && computerSelection === "piedra") {
        return console.log("¡Perdiste! piedra aplasta tijeras ")
    } 

    if (playerSelection === "papel" && computerSelection === "piedra") {
        return console.log("¡Ganaste! papel envuelve piedra");
    } else if (playerSelection === "papel" && computerSelection === "tijeras") {
        return console.log("¡Perdiste! tijeras cortan papel");
    }

    if (playerSelection === "piedra" && computerSelection === "tijeras") {
        return console.log("¡Ganaste! piedra aplasta tijeras");
    } else if (playerSelection === "piedra" && computerSelection === "papel") {
        return console.log("¡Perdiste! papel envuelve piedra");
    } 

    return console.log("¡Empate!");
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(playerSelection(), getComputerChoice());
    }
}

game();