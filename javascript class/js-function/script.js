// JavaScript Function Syntax
// ================================================

// function create
function sleep() {
    console.log("Kabir is sleeping form 10pm");
}
sleep()

// function parameter
function sleeps(names) {
    console.log(names +" is sleeping form 11pm");
}
sleeps("Rafio")
sleeps("Kabir")

// function  multiple parameter
function slepp(names,tyme) {
    console.log(names+" is slepping form " +tyme);
}
slepp("Kabir","10pm")
slepp("Rafio","11pm")

// Function Return
function myfunction(a,b) {
    return(a*b)
}
let x=myfunction(3,3)
console.log(x);