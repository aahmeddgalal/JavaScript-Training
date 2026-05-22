let rightResults = 0
let leftResults = 0

document.getElementById("r-result").innerText = rightResults
document.getElementById("l-result").innerText = leftResults

function addOneRight() {
    rightResults++
    document.getElementById("r-result").textContent = rightResults
}
function addOneLeft() {
    leftResults++
    document.getElementById("l-result").textContent = leftResults
}

function addTwoRight() {
    rightResults += 2
    document.getElementById("r-result").textContent = rightResults
}

function addTwoLeft() {
    leftResults += 2
    document.getElementById("l-result").textContent = leftResults
}

function addThreeRight() {
    rightResults += 3
    document.getElementById("r-result").textContent = rightResults
}
function addThreeLeft() {
    leftResults += 3
    document.getElementById("l-result").textContent = leftResults
}