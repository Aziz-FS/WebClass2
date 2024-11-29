cl("This  a play ground")

function cl(variable, value) {
    console.log("value of "+variable+" is", value)
}

function ourAdd(number1, number2) {
    return number1+number2
}

function printLine() {
    console.log("-----------------------------------------")
}

var a = 2;
cl("a", a)
printLine()
a=3
cl("a", a)
printLine()

let c = 5;
cl("c", c)


c = 6;
cl("c", c)

{
    let a = 4;
    cl("a", a)
    ourTotal = ourAdd(a, c)

    cl ("inscope ourTotal", ourTotal)
}


ourTotal = ourAdd(a, c)
cl ("ourTotal", ourTotal);

let A = "BigA"
cl ("A", A);

let addition = ourAdd
let ourTotal1 = addition(a, c)
cl ("ourTotal", ourTotal);


