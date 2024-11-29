//first one. 

function addTwoNumbers(num1, num2) {
    return num1+num2;
}
console.log(addTwoNumbers(5,2))

function subtract(from, subtractee) {
    return from-subtractee;
}
console.log(subtract(5,2))
console.log(subtract(addTwoNumbers(2,3),2))

function addTwoNumbers(num1, num2) {
    return num1+num2;
}
function subtract(from, subtractee) {
    return from-subtractee;
}
function doMath(num1,num2, operation) {
    return operation(num1, num2)
}

console.log(doMath(3,2, addTwoNumbers))

console.log(doMath(3,2, subtract))

console.log(doMath(3,2, function (num1, num2) {
    console.log(num1, num2)
    return (num1 +" "+ num2)
}))


