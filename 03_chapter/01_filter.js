const numbers = [1,2,3,4,5,6,7,8]
//++++ use case 1 =>
// //const result =   numbers.filter((i)=> i<5 )
// const result =   numbers.filter((i)=> {return i<5} )     // if we use {} this is explicit calling so with {} we must use return keyword

// console.log(result)


// ** map =>
//++++++ use case 2 => 

//const result = numbers.map((i) => i+10)
// const result = numbers.map((i) => { return i+10})
// console.log(result)



//+++++ use case 3 =>
//using both map and filter
// const result = numbers.filter((i)=>i<5).map((i)=>i+10)
// console.log(result)
