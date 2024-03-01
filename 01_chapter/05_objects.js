const mySem = Symbol()

const user =
 {
    name: "Avneesh",
    email:"avneesh@gmail.com",
    age:28,
    isLoggedIn:false,
    [mySem]:"key1",
    "full name":"Avneesh K Mishra"

 }

console.log(user.name)   //this is the common way of prinitng the value

console.log(user.isLoggedIn)

console.log(user.age)


//the other way of getting the value 

 console.log(user["name"]);

console.log(user["full name"]);

//in these cases, getting the value by the previous method is not possible


//to access symbol->

console.log(user[mySem])

console.log(typeof(mySem))