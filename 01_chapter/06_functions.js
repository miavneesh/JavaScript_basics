function addNumbers(num1, num2) {      //function declearation, we give parameters in the bracket
    return num1 + num2 ;               //scope of the function
    console.log("Hello");              // this will not print because it is decleared after return statement
}

// const total = addNumbers(18,12)        //calling the funtion, here we give arguments in the bracket
// console.log(total);                    

// we can do this with other method

//console.log(addNumbers(8,12));

function printMyName(myName = "Ashu"){
    return `My name is ${myName}`
}
// const result = printMyName("Avneesh")
// console.log(result);
 
//console.log(printMyName());  

// if we will not pass the agrument here the result will be 'undefined'. to deal with that we can use the if() else() to check the condition

// to avoid this situation we can pass the value in the parameters (as line no 13 ). 



