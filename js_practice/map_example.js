const numbers = [1,2,3,4,5,6,7,8,9]

//typical approach would be create a new array, iterate on numbers, swuare each number, and save in new array
// map can map each element of numbers to it's square and create a new array
//Calls a defined callback function on each element of an array, and returns an array that contains the results.


// const squareOfNumbers = numbers.map(function (number) {
//     console.log("map is called with ", number)
//     // return 43
//      return number * number
//     })
// console.log(squareOfNumbers)
//above is for explanation. Below is the right way. Which is concise
const mySquares = numbers.map(numFromMyArray =>numFromMyArray * numFromMyArray)
console.log(mySquares)

const myDoubles = numbers.map(numFromMyArray =>numFromMyArray * 2)
console.log(myDoubles)
const cities = ['Auckland', 'Nelson', 'Hamilton', 'Wellington', 'Queenstown']
console.log(cities.map(cityName => 'The '+cityName))

