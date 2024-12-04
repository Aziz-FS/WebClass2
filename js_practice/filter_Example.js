const numbers = [-1,2,3,4,5,6,7,8,9]

const divisibleByThrees = numbers.filter((number) =>  number%3 === 0);
console.log('divisibleByThrees', divisibleByThrees);

const sumOfNumbers = numbers.reduce(function (accumualator,number) {
    console.log(accumualator, number)
    return accumualator + number;
})
console.log("sumOfNumbers",sumOfNumbers)

const sumOfNumbers1 = numbers.reduce( (accumualator,number) => accumualator + number);
console.log("sumOfNumbers1",sumOfNumbers1)

