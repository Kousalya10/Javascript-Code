// Write a program to display the user's complete mailing address. 
// Accept user’s name, city, street, pin and house no.and store it in a variable and display it.

// const userName = prompt("enter your name");
// const userCity = prompt("enter your city");
// const userstreet=prompt("Enter your Street");
// const userPin = Number(prompt("enter your pin"));
// const userhouseNo = prompt("enter your houseNo");

// const mailingAddress = `
// Name    : ${userName} 
// City    : ${userCity} `
// Street  : ${userstreet}
// Pin     : ${userPin}
// HouseNo : ${userhouseNo}
// `; 

// console.log("complete mailing address: \n " + mailingAddress)

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and 
// converts upper case letters to lower case, and lowercase letters to uppercase.
// swapcase = function swapcase(str) {
//     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//         return chr ? match.toUpperCase() : match.toLowerCase();
//     });
// }
// console.log(swapcase('AaBbc'));

// 

// function truncate(str)
// {
//     return str.slice(0,19)
// }
// console.log(truncate("The quick brown fox jumps over the lazy dog"));

// function word(str)
// {
//      str.trim()
// }
// console.log(word("    The quick brown fox jumps over the lazy dog   "));


// var p = '225468';

// var regex = /([02468])([02468])/gim

// console.log(p.replace(regex, '$1-$2'));
const regex=/[2468]-[2468]/gi
function dashTwixt2Eve(str1) {
     if(str1%2==0)
      str2=str1.join('-')
     return str2
   }
console.log(dashTwixt2Eve(225468))