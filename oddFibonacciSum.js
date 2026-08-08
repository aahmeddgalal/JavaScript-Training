function sumFibs(num) {
  const fibs = [0, 1]
  while (
    fibs[fibs.length - 1] + fibs[fibs.length - 2] <= num) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
  }
  let oddFibs = 0
  for (let i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 !== 0) {
      oddFibs += fibs[i]
    }
  }
  console.log(fibs)
  return oddFibs
}

console.log(sumFibs(100))  