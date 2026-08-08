function sumAll(myArr) {
  let sum = 0
  let n = myArr[0]
  let m = myArr[1]

  if (n == m) {
    return n * 2
  }
  if (n < m) {
    while (n <= m) {
      sum += n
      n++
    }
    return sum
  } else if (n > m) {
    while (m <= n) {
      sum += m
      m++
    }
    return sum
  }
}

console.log(sumAll([1, 4]))