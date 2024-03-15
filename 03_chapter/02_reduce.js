const myArray = [1,2,3,4,5]

// const result = myArray.reduce( function(acc, curvalue) {
//     return acc + curvalue;
// },0)

// console.log(result);


// const result = myArray.reduce( function(accumulator , current_value){
//     console.log(`value of accumulator is ${accumulator} and value of current value is ${current_value}`);
//     return accumulator * current_value
// },1)
// console.log(result);


// const result1 = myArray.reduce( function(accumulator , current_value){
//     console.log(`value of accumulator is ${accumulator} and value of current value is ${current_value}`);
//     return accumulator + current_value
// },0)
// console.log(result1);


//+++++ with an array function =>
const result = myArray.reduce((acc,cur_value) => (acc + cur_value),0)
console.log(result);
