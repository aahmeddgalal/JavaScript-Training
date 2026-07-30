export const travels = [{}, {}, {}]
// =>> import {travels} from '/example.js' EXAMPLE (travels())
// OR 
// =>> import { travels as newTravels } from '/example.js' EXAMPLE (newTravels()) 
// --------------
// import { ex1, ex2, ex3} importing more than one from the same file (each => export const ...) 
// OR
// in the end of the file of functions =>>
// export { name1, name2... }

// another way of exporting, The Default export 
export default function getMatchingTrips(arr, keyword) {
  return arr.filter(function(trip) {
    return trip.description.tiLowerCase().includes(keyword)
  })}  // only one defaut