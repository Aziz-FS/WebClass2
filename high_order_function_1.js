//again with more examples
function sayA() {
    console.log("A")
}

function sayB() {
    console.log("B")
}

function sayWhatever(cool) {
    cool();
}
// sayA()
// sayB()
sayWhatever(sayA)
sayWhatever(sayB)

sayWhatever(function () {
    console.log("I am on the fly A")
})

function addTwoNumbers(n1, n2) {
    return n1+n2;
}
function addThreeNumbers(n1, n2, n3) {
    console.log('add three numbers', n1, n2, n3)
    return n1+n2+n3;
}

function subtractN1FronN2(n1, n2) {
    return n2-n1;
}
function square(n1) {
    return n1*n1;
}
function pie() {
    return 3.142;
}

console.log("addition is ", addTwoNumbers(3,5))
console.log("subtractN1FronN2 is ", subtractN1FronN2(3,5))
console.log("square is ", square(3,3))


function doMath(mcsdMathOperation, n1,n2) {
    return mcsdMathOperation(n1,n2)
}
console.log(doMath(addTwoNumbers, 3,5))
console.log(doMath(subtractN1FronN2, 3,5))
console.log(doMath(square, 3))
console.log(doMath(pie))
console.log(doMath(addThreeNumbers, 3,4,5))
