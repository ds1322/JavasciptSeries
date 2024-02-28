// console.log(3>2);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

// console.log(null>0);       /*
// console.log(null==0);       We can avoid these type of compariosns
// console.log(null>=0);     */

/*************** Reason for the above code Snippets *******************/
/*
The reason is that an equality check == and comparison > <>= <=
work differently.
Comparisons convert null to a number,treating as 0.
That's why(3) null>=0 is true and (1) null>0 is false.  
*/

// console.log(undefined>0);    /*
We can avoid these type of compariosns
// console.log(undefined==0);   */
// console.log(undefined<0);
// console.log(undefined>=0);

// === => strict check
//The strict equality operator === , also known as triple equals, compares both the value and the type of its operands. It is a binary operator, and it uses the algorithm defined in the JavaScript specification for the IsStrictlyEqual abstract operation to compare values to check if they are equal.

console.log("2"===2);