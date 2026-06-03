// Loops and arrays manibulation 
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")

console.log("The 5 largest Countries in the World:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log(`- ${largeCountries[i]}`)
}
