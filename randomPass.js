function generatePassword(passLen) {
  const myChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let pass = ""
  for (let i = 0; i < passLen; i++) {
    pass += (myChars[Math.floor(Math.random() * passLen)])
  }
  return pass
}

const password = generatePassword(5)
console.log(`Generated password: ${password}`) 