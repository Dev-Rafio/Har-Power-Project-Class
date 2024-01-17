// JavaScript Function Syntax
// ================================================

// function create
function sleep() {
    console.log("Kabir is sleeping from 10pm");
}
sleep()


// function parameter
function sleeps(names) {
    console.log(names +" is sleeping from 11pm");
}
sleeps("Rafio")
sleeps("Kabir")
sleeps("rumi")

// function  multiple parameter
function slepp(names,tyme) {
    console.log(names+" is slepping form " +tyme);
}
slepp("Kabir","10pm")
slepp("Rafio","11pm")

// Function Return
function myfunction(a,b) {
    console.log(a*b);
   
}
myfunction(3,4)





// ====================================================================
// try it

function printName(firstName, lastName ){
    console.log(firstName+" "+lastName);

}

printName("Rafio","Kabir") //function argument
printName("kabir", "rafio")

// veriable add 
function printNam(firstName, lastName ){
    console.log(firstName+" "+lastName);

}
var first='Rumi';
var last='prokrite';

printNam(first, last)

//user input 


function printNa(firstName, lastName){
    console.log(firstName+' '+lastName);
    
}
let firstName=prompt("Enter Your First Name")
    let lastName=prompt("Enter Your last Name")
printNa(firstName, lastName)



//sum veriable
function sum1(firstNum,lastNum){
    console.log(firstNum + lastNum);
}
let firs=+1;
let las=+2;
sum1(firs,las)


//sum input
function sum(firstNum, lastNum){
    console.log(firstNum+lastNum)

}

let firstNum=+prompt("Enter first number");
let lastNum=+prompt("Enter last number");

sum(firstNum,lastNum)