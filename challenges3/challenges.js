// challange1
// let myArrCourses = ["course 1", "course 2", "course 3"]

// function loopOverArrary(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// loopOverArrary(myArrCourses)




// challange2 - working with localStorage
// let myValue = 100
// localStorage.setItem("myValue",
//     JSON.stringify(myValue)
// )
// myValue = 0

// myValue = JSON.parse(localStorage.getItem("myValue"))

// console.log(myValue)



// challange2 - working with Node.js
// let myValue = 100
// let storage = {}
// storage.myValue = JSON.stringify(myValue)

// myValue = 0
// myValue = JSON.parse(storage.myValue)

// console.log(myValue)


// challange2 also
// localStorage.setItem("value", "100") // delete and come back later run the code below
// let myValue = localStorage.getItem("value")
// console.log(myValue)



// challange3
// let data = [{
//     player: "Jane",
//     score: 100
// },
// {
//     player: "John",
//     score: 80
// },{
//     player: "Jack",
//     score: 90
// }]

// const logBtn = document.getElementById("logScore")
// logBtn.addEventListener("click", function() {
//     console.log(data[0]["score"])
// })


// challange4
// function generateSentence(desc, arr) {
//     let sen = `The ${desc} are `
//     for (i = 0; i < arr.length; i++) {
//         if (i == arr.length -1) {
//             sen += arr[i] +"."
//         } else {
//             sen += arr[i] + ", "
//         }
        
//     }
//     console.log(sen)
// }

// generateSentence("Largest countries", ["china", "India", "USA"])



// challange5
// const totalPrice = "420.69235632455"
// const btn = document.getElementById("purchas")
// btn.textContent = `Buy $ ${Number(totalPrice).toFixed(2)}`
