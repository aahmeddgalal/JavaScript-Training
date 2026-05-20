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