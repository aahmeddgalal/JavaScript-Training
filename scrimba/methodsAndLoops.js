// for in loop
const char1 = {
  title: 'Ninga',
  emoji: '😶‍🌫️',
  powers: ['hj', 'lk', 'kj']
}

for (let prop in char1) {
  console.log(prop)
  console.log(char1[prop])
}

// for ... of vs for ... in

//   They both iterate over object data structures
//   Arrays are objects too!

// for ... in
//  iterates over all enumerable
//  property keys of an object

// for ...of
//  iterates over the values of an iterable object.
//  (examples of iterable objects include arrays, strings)


// .forEach()
// A js method for iterating over arrays
// characters.forEach(function(character) {
//  console.log(character) or character.title  
// })

Characters.forEach(function(character) {
  character.powers.forEach(function(power) {
      console.log(power)
  })
})

// .includes() a method for checking if an array holds a given value

if (shoppingList.includes(itemInput.value)) {
  itemInput.value = ''
} else {
  shoppingList.push(itemInput.value)
  render()
  itemInput.value = ''
}