function pairElement(myStr) {
  const myArr = []
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i].toUpperCase() == 'A') {
      myArr.push(["A", "T"])
    } else if (myStr[i].toUpperCase() == 'T') {
      myArr.push(["T", "A"])
    } else if (myStr[i].toUpperCase() == 'C') {
      myArr.push(["C", "G"])
    } else if (myStr[i].toUpperCase() == 'G') {
      myArr.push(["G", "C"])
    }
  }
  return myArr
}

console.log(pairElement('ATCG'))