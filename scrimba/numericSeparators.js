const bankBalance = 9_007_199_254_740_991 // biggest num we can put in SAFE calculation // instead we have BigInt()

console.log(bankBalance)
console.log(typeof bankBalance)

const bankBalance2 = 9_007_199_254_740_991_899_898n
console.log(typeof bankBalance2)

const bankb = BigInt(9_007_199_254_740_991_899_898) // diff from othe constructors that no "new"
// BigInt is useful in contexts requiring
// precise handling of large integers, such
// as cryptography, or when interacting
// with databases that use large integer
// identifiers.