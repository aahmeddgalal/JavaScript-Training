function pyramid(pattern, rows, bool) {
  let myPyramid = "\n"
  if (!bool) {
    for (let i = 1; i <= rows; i++) {
      myPyramid += " ".repeat(rows - i) + pattern.repeat(i + i - 1) + '\n'
    }
  } else {
    for (let i = rows; i > 0; i--) {
      myPyramid += " ".repeat(rows - i) + pattern.repeat(i + i - 1) + '\n'
    }
  }
  return myPyramid
}

console.log(pyramid("o", 4, false))
console.log(pyramid("p", 5, true)) 