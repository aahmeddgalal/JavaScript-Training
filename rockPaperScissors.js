// rock, Paper, Scissors game
let moves = ["rock", "Paper", "Scissors"]

function play(userMove) {
    let randomNum = Math.floor(Math.random() * 3)
    let computerMove = moves[randomNum]

    if (userMove == "rock" && computerMove == "rock") {
        console.log(`Computer Move: ${computerMove} - Draw`)
    } else if (userMove == "rock" && computerMove == "Paper") {
        console.log(`Computer Move: ${computerMove} - You lost`)
    } else if (userMove == "rock" && computerMove == "Scissors") {
        console.log(`Computer Move: ${computerMove} - You win`)
    } else if (userMove == "Paper" && computerMove == "rock") {
        console.log(`Computer Move: ${computerMove} - You win`)
    } else if (userMove == "Paper" && computerMove == "Paper") {
        console.log(`Computer Move: ${computerMove} - Draw`)
    } else if (userMove == "Paper" && computerMove == "Scissors") {
        console.log(`Computer Move: ${computerMove} - You lost`)
    } else if (userMove == "Scissors" && computerMove == "rock") {
        console.log(`Computer Move: ${computerMove} - You lost`)
    } else if (userMove == "Scissors" && computerMove == "Paper") {
        console.log(`Computer Move: ${computerMove} - You win`)
    } else if (userMove == "Scissors" && computerMove == "Scissors") {
        console.log(`Computer Move: ${computerMove} - Draw`)
    } else {
        console.log("Invalid move")
    }
}

play("rock")