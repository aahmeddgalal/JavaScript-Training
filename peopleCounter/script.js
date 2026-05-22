let peopleCount = 0;

function increment() {
    peopleCount++;
    document.getElementById("counter").innerText = peopleCount;
}



function decrement() {
    peopleCount--;
    if (peopleCount < 0) {
        peopleCount = 0; 
        window.alert("People count cannot be negative!");
    }
    document.getElementById("counter").innerText = peopleCount;
}

function save() {
    let results = document.getElementById("results");
    results.textContent += peopleCount + " - ";
}

function reset() {
    peopleCount = 0;
    document.getElementById("counter").innerText = peopleCount;
    document.getElementById("results").textContent = "latest: ";
}

