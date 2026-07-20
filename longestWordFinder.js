function findLongestWordLength(sen) {
  let longest = 0;
  let start = 0;

  for (let i = 0; i <= sen.length; i++) {
    if (i === sen.length || sen[i] === " ") {
      let length = i - start;

      if (length > longest) {
        longest = length;
      }

      start = i + 1;
    }
  }

  return longest;
}
