// const fruits=["apple","orange","banana","mango","kiwi","pineapple"]
// let [firstfrt,secondfrt,thirdfrt,...fourthfrt]=fruits;

// console.log('firstfruit:',firstfrt);
// console.log('secondfruit:',secondfrt);
// console.log('thirdtfruit:',thirdfrt);
// console.log('fourthfruit:',fourthfrt);

//String

// 1.string litral
// let stringname="stringvalue"

// 2.string Object
// let stringname=new String("string literal")
// console.log(stringname)

// String methods:
// 1.concat
const myname="Kousalya"
const profession="Fullstack Developer"

// console.log("My name is " + myname + " My Profession is " + profession);

// Alternative
// `` -> template literals => bak tick symbol
// ${} ->string Interpolation

// console.log(`My name is ${myname} My Profession is ${profession} `);

// 2.charAt

//console.log(profession[1]);
// console.log(profession.charAt(2));

// 3.length

// console.log(profession.length);

//4.underscore

// console.log(profession.__proto__);

// console.log(profession.toLowerCase());
// console.log(profession.toUpperCase());

// 7.substring
// console.log(profession.substring(0,7));

// 8.slice
// console.log(profession.slice(0,6));

// 9.trim
// const myname="Kousalya"
// const profession="      Fullstack Developer    ! "
// console.log(profession);
// console.log(profession.trim());

//10.replace
// console.log(profession.replace('Fullstack','FrontEnd'));

//  11.Include
// console.log(profession.includes('D'));

// console.log(profession.includes('f'));

//  12.Split
// console.log(profession.split(' '));

//13.revrse
console.log(profession.endsWith('Developer'));