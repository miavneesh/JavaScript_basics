//3 ways of declearing a variable
const myID = 12345;  //once assigned,you can not change the value
var myPlace = "Satna";  // we dont recommed var keyword to use in modern day coding due to isuues of scope
let myName = "Avneesh"; // mostly we use let 
let myPassword;
 

// let myID = 54321;  "We can not change or modify valiable value assigned with const" //


console.log(myID);
console.log(myPlace);
console.log(myName);
console.log(myPassword); // This will show undefined because we have assigned the variable but declearation is not done//

//Another way to show all the values in table form//
 console.table([myID,myName,myPlace,myPassword])
