function chunkArrayInGroups(myArr, num) {
  const result = []

  for (let i = 0; i < myArr.length; i += num) {
    result.push(myArr.slice(i, i + num))
  }
  return result
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))