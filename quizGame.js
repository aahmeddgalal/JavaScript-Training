const questions = [
    {
        category: "geo",
        question: "Where is the house of the examiner's mum?",
        choices: ["In the school", "In hell", "Under the white house"],
        answer: "In hell",
    },
    {
        category: "geo",
        question: "Where is the house of the examiner's mum?",
        choices: ["In the school", "In hell", "Under the white house"],
        answer: "In hell",
    },
    {
        category: "geo",
        question: "Where is the house of the examiner's mum?",
        choices: ["In the school", "In hell", "Under the white house"],
        answer: "In hell",
    },
    {
        category: "geo",
        question: "Where is the house of the examiner's mum?",
        choices: ["In the school", "In hell", "Under the white house"],
        answer: "In hell",
    },
    {
        category: "geo",
        question: "Where is the house of the examiner's mum?",
        choices: ["In the school", "In hell", "Under the white house"],
        answer: "In hell",
    },
    {
        category: "geo",
        question: "Where is the house of the examiner's mum?",
        choices: ["In the school", "In hell", "Under the white house"],
        answer: "In hell",
    }
]

function getRandomQuestion(arrQuestions) {
    return arrQuestions[Math.floor(Math.random() * arrQuestions.length)]
}

function getRandomComputerChoice(arrChoices) {
    return arrChoices[Math.floor(Math.random() * arrChoices.length)]
}

function getResults(questionObj, compChoice) {
    if (questionObj.answer == compChoice) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`
    }
}