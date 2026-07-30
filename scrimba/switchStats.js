// Switch Statments

function selectItem(item) {
  let price = 0
  switch (item.toLowerCase()) {
    // item === 'coffee'
    case 'coffee':
      price = 2
      break
    case 'sandwitchs':
      price = 5
      break
    case 'salad':
      price = 4
      break
    case 'lemon cake':
      price = 3
      break
    default:
      return `Sorry we don't sell ${item}`
  }

  return `You selected ${item} and that's $${price}`
}

console.log(selectItem("k"))