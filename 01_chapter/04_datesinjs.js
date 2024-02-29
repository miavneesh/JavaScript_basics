const date = new Date();
// console.log(date)


// ****************  Different methods with Date  *************//

//console.log(date.toDateString())

//console.log(date.toISOString());

//console.log(date.toJSON());

//console.log(date.toLocaleDateString())

//console.log(date.toLocaleTimeString())


const newDate = new Date(2024,0,25)

const newDate2 = new Date(2024,0,25,5,8)

const newDate3 = new Date("2024-01-01")

//console.log(newDate.toDateString());
 
//console.log(newDate2.toLocaleString());

//console.log(newDate3.toDateString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp);
 
// to convert it in seconds we divide our timestamp value from 1000

//console.log(Math.floor(myTimeStamp/1000));


// in the toLocaleString we get many other options

const newDate4 = new Date()
console.log(newDate4.toLocaleString('default', {
    weekday:"long",
    timeZoneName:"long"
    
})); 