const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
// fixed length of 20 characters

function generate() {
    document.getElementById("password1").innerText = ""
    document.getElementById("password2").innerText = ""
    for (let i = 0; i < 20; i++) {
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        
        document.getElementById("password1").innerText += characters[randomChar1]
        document.getElementById("password2").innerText += characters[randomChar2]
    }
}