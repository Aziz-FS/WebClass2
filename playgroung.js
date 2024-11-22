cl("This  a play ground")

function cl(variable, value) {
    console.log("value of "+variable+" is", value)
}

function add(number1, number2) {
    total = number1+number2
    return total;
}

var a = 2;
cl("a", a)
a=3
cl("a", a)

let c = 5;
cl("c", c)
c = 6;
cl("c", c)

{
    let a = 4;
    cl("a", a)
    ourTotal = add(a, c)

cl ("inscope ourTotal", ourTotal)

}
ourTotal = add(a, c)

cl ("ourTotal", ourTotal)
