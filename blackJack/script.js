let min = 2
let max = 11
let pLayed = 0

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
}

function play() {
    pLayed++
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ""

    if (pLayed > 0) {
        document.getElementById("button").innerText = "Play Again!"
    }
    document.getElementById("cards").innerText =
        "Cards: " + firstCard + " " + secondCard

    document.getElementById("sum").innerText =
        "Sum: " + sum



    if (sum < 21) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    document.getElementById("message").innerText = message
    pLayed++
}