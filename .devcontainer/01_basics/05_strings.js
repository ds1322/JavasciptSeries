const name = "devansh"
const repoCount = 50

//console.log(name+repoCount+" Value"); // This syntax is outdated

//console.log(`Hello my name is ${name} and my repo count is 
//${repoCount}`); // String Interpolation 

const gameName = new String('devansh-sh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.lastIndexOf());
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-9,-6)

//console.log(anotherString);

const newStringOne = "   hitesh    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://devansh.com/devansh%20sharma"

console.log(url.replace("%20",'-'));

console.log(url.includes("devansh"));
console.log(gameName.split('-'));