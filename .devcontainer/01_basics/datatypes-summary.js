//Primitive Data Types

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt


//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.


// const score=100
// const scoreValue=100.3
// //The above two defined variables is in Number Type

// const isLoggedIn = false
// const outsideTemp= null // null means empty not zero value

// let userEmail; // If we can't defined any value then it is undefined

// let userData= undefined; // We can manually declared undefined also

// const id = Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);

// const bigNumber = 345622292925266355353n 




// // Reference(Non-Primitive Data Types)
// //All Non-Primitive return types would be Object

// //Array,Objects,Functions

// // Array
// const heros = ["shaktiman", "naagraj","doga"]; // Reference Type or Non- Primitive Type

// // Objects
// //Objects defined in curlyBraces
// let myObj = {
//     name:"devansh",
//     age: 22,

// }

//Functions

// const myFunction =  function(){ //It's type is object Function

//     console.log("Hello World");

//}

//How to find dataType of any value
// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof myFunction);

// console.log(typeof heros);

// console.log(typeof myObj);


//******************************************************************************* */

//1)Stack Memory(Primitive Types)=>Jab bhi stack memeory use hoti hai toh jo bhi humne variable declare kiya hai hume uski copy milti hai.

// 2)Heap Memory(Non-Primitive Types)=> Jab bhi memeory heap ke andar define hoti hai toh uska hume reference(original value ka) diya jata hai, toh jo bhi hum change karenge wo original value me change hoga.

let myYoutubename="devanshsharmadotcom"

let anothername= myYoutubename

anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne={

    email: "user@google.com",
    upi: "user@ybl",


}


let userTwo = userOne

userTwo.email="devansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);