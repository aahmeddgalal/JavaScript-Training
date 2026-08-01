function largestOfAll(arrays) {
  const myNewArr = []
  for (let i = 0; i < arrays.length; i++) {
    let biggest = arrays[i][0]
    for (let num = 0; num < arrays[i].length; num++) {
      if (arrays[i][num] > biggest) {
        biggest = arrays[i][num]
      }
    }
    myNewArr.push(biggest)
  }
  return myNewArr
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))