function maskEmail(email) {
    let maskedEmail = ""
    maskedEmail = email.slice(0, 1)
    maskedEmail += "*".repeat(email.indexOf("@") - 2)
    maskedEmail += email[email.indexOf("@") - 1]
    maskedEmail += email.slice(email.indexOf("@"))

    return maskedEmail
}

let email = "ah677821@gmail.com"
console.log(maskEmail(email))