// Ternary Operators

const playerGuess = 9
const correctAnswer = 6

const message = playerGuess === correctAnswer ? "Correct" : 
playerGuess > correctAnswer ? "Too High" : "Too Low"



console.log(message)