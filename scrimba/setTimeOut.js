function displaySth(light) {
  console.log(light)
}

const quiw = setTimeout(displaySth, 3000, "jjk") // (function, time in ms, params...)

displaySth("hj") 

// clearTimeout method // will not work now cuz im as lazy as a$$ to make a new html file 
document.getElementById('stop').addEventListener('click', function() {
  clearTimeout(quiw)
  console.log('Canceling...')
})
