function mutation(words) {
  const word1 = words[0].toLowerCase()
  const word2 = words[1].toLowerCase()

  for (let i = 0; i < word2.length; i++) {
    if (word1.includes(word2[i])) {
      continue
    } else {
      return false
    }
  }
  return true
}
console.log(mutation(["hello", "Hello"]))