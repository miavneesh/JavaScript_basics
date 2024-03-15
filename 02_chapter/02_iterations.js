//// LOOP   ////

// // Basic=>
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }


//console.log(element);  //  this will throw an error because the we are accessing element out of its scope



// loop inside aother loop

// for (let i = 0; i <5; i++) {
//     //console.log(`for outer loop ${i}`)
//     for (let j = 0; j < 5; j++) {
//        // console.log(`inner loop value is ${j} for outer loop ${i}`);
//        value = i*j
//        console.log(`${i}*${j}= ${value}`);  // we can perform different actions
//     }
    
//}


//accessing array element via for loop
// const cities = ["Delhi","Mumbai","Hydrabad","Pune"]
// console.log(cities.length);
// for (let index = 0; index < cities.length; index++) {
//     const element = cities[index];
//     console.log(element);
    
// }



// Break and Continue

// for (let i = 0; i < 10; i++) {
//     if (i==5) {
//         console.log("5 found");
//         break                              // the loop will terminate from the break statement 
//     }
//    console.log(i);
    
// }
for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("5 found");              // it will skip the value where condition is matched
        continue
    }
   console.log(i);
    
}