///// FOR EACH  /////////

const days= ["Monday","Tuesday","Wednesday","Sunday"]


//with a normal callback function
// days.forEach(function (item){
// //    console.log(item);
// })

// //with an arrow function 

// days.forEach((value) =>{
// //    console.log(value);
// });




// passing another function in for each


// function printIt(item){
//     console.log(item);
// }

// days.forEach(printIt)   // here we just gave the refrence of the function 


// so this for each does not only give us the item of the array but the index and it can give the whole array as an output

// days.forEach((item, index, arr)=>{
//     console.log(item, index, arr);

// })



//***********getting access from objects in array *********//
const teamCaptains = [
    {
        team:"India",
        captain:"Rohit Sharma"
    },
    {
        team:"Australia",
        captain:"Pat Cummins"
    },
    {
        team:"England",
        captain:"Ben Stockes"
    }
]
teamCaptains.forEach((item)=>{
    console.log(item.team);
    //console.log(item.captain);

})
