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


///*********************///// 
// if many arguments are there ->

 function addCartPrice(...num1) {
    return num1
 }

 //console.log(addCartPrice(10,2,34,45,85))
 //in this case we use rest operator which will convert all the values in an array and we can handle this with various methods


//****************//
// handling objects in function

const user = {
    userName:"Avneesh",
    city: "Satna"
}

function handleObject(anyObject) {
//    console.log(`My name is ${anyObject.userName} and I belong to ${anyObject.city}`);
}

//handleObject(user)       // normal way of gettind objects value

handleObject({
    userName:"Avneesh",
    city: "Bhopal"         // Bhopal will overwrite Satna here

})


////****************////
///****Handling Arrays****///
  
const myArray = [100,200,400,800]
 
function handleArray(getArray) {
    return getArray[2]
    
}
console.log(handleArray(myArray));