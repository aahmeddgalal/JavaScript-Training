function frankenSplice(arr1, arr2, ind) {
  const myNewArr = []
  if (ind == arr2.length) {
    return [...arr2, ...arr1]
  }
  for (let i = 0; i < arr2.length; i++) {
    if (i != ind) {
      myNewArr.push(arr2[i])
    } else {
      myNewArr.push(...arr1)
      myNewArr.push(arr2[i])
    }
  }
  return myNewArr
}

console.log(frankenSplice([1, 2, 3], [4, 5], 2))
