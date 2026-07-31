// Variable and function declarations are
// moved to the top of their containing
// scope during the compilation phase,
// before code execution.

// but variables can't be accessed before initialization (Temporal dead area)

//this will work
workPlease()
function workPlease() {
  console.log('nooo')
}
// ---
console.log(traffic)

const traffic = 'no'

// what happens is that the [const traffic] only is moved to the top and that's why js knows that it is there
// var won't throw an error but undefined