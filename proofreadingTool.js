function isPalindrome(word) {
  const pal = []
  for (const char of word) {
    pal.splice(0, 0, char)
  }
  return word.toLowerCase() == pal.join("").toLowerCase()
}

console.log(isPalindrome("acecar"))

function findPalindromeBreaks(words) {
  const myArr = []
  if (words.length === 0) {
  return [];
  }
  for (const i in words) {
    if (!isPalindrome(words[i])) {
      myArr.push(Number(i))
    }
  }
  return myArr
}

console.log(findPalindromeBreaks(["hi", "level", "guest", "level"]))

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return []
  }
  let views = new Set()
  const phrases = []
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength)
    phrases.push({
      index: i,
      phrase
    }) 
  }

  for (let i = 0; i < phrases.length; i++) {
    for (let j = 0; j < phrases.length; j++) {
      if (phrases[i].phrase.join("|") == phrases[j].phrase.join("|") && i != j) {
        views.add(phrases[i].index)
        views.add(phrases[j].index)
      } 
    }
  }

  return [...views]

}

// console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2))

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
  return [];
  }
  
  const myObjects = []
  for (const item of texts) {
    myObjects.push({
      repeatedPhrases: findRepeatedPhrases(item, phraseLength),
      palindromeBreaks: findPalindromeBreaks(item, phraseLength)
    })
  }
  return myObjects
}