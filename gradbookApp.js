function getAverage(scores) {
  let avg = 0
  for (let i = 0; i < scores.length; i++) {
    avg += scores[i]
  }
  return avg / scores.length
}

function getGrade(stuScore) {
  if (stuScore == 100) {
    return "A+"
  } else if (stuScore >= 90) {
    return "A"
  } else if (stuScore >= 80) {
    return "B"
  } else if (stuScore >= 70) {
    return "C"
  } else if (stuScore >= 60) {
    return "D"
  } else {
    return "F"
  }
}

function hasPassingGrade(stuScore) {
  if (getGrade(stuScore) == 'F') {
    return false
  } else {
    return true
  }
}

function studentMsg(scores, stuScore) {
  if (hasPassingGrade(stuScore)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(stuScore)}. You passed the course.`
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(stuScore)}. You failed the course.`
  }
}


console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))