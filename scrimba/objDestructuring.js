// Object destructuring: enables us to extract props from objects into distinct vars
// DRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

const favMovie = {
  title: "Top gun",
  year: '1982',
  genre: 'action',
}

const { title, year, genre } = favMovie

console.log(`my fav movie is ${title}, ${year}, ${genre}`)