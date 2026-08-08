function uniteUnique(...myArrs) {
  const newArr = []
  for (const arr of myArrs) {
    newArr.push(...arr)
  }
  return [...new Set(newArr)]
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]))