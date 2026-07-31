function checkUsername(userName) {
  if (userName) {
    console.log(userName)
  } else {
    console.log('I execute')
    throw new Error('Username not found!') // throw will stop anything after(u can use console.log if u don't want)
    console.log('I dont execute')
  }
}

checkUsername()


// constructors of normal data types
String()
Number()
Array()
Object()
Boolean()