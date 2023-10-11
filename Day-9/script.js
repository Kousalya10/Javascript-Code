// For..in.. loop
const person = {
    firstname :"Krishika",
    lastname : "Shree",
    age : 2
}
for(let key in person)
    {
    console.log(key + person[key]);
   }

//    for.. of...loop
const arr=["kous","keshu","Indu","krishi","shree"]
for(let name of arr)
{
    console.log(name[1])
}

//function typeTriangle( a, b, c) // function to calculate the type of triangle  
// {  
//     if (a == b && b == c)  
//         return "Equilateral";  
//     else if (a == b || b == c || a == c)  
//         return "Isosceles";  
//     else  
//         return "Scalene";  
// }  
// console.log("Triangle=",typeTriangle(10,10,20));
// console.log("Triangle=",typeTriangle(10,10,10));
// console.log("Triangle=",typeTriangle(10,30,20));

// for(i=10 ; i<=10 ; i--)  {
//     if(i===0)  {
//       console.log(i);  
//     } else {
//       alert("Blast Off");  
//     }
//   }

// function Blastoff()
// {
//     for(i=10;i<=10;i--)
//     {
//         console.log(i);
//     }
// }
// alert("Blast off");

// function spaces(num) {
//     let mySpaces = '';
   
//     while(mySpaces === num) 
//     {
//        mySpaces+= num
//     }
//     }
// console.log(spaces( 1 ));

// function spaces(num){
//     let s = '';
//     while(s.length < num){
//        s = ' '.repeat(num);
//        return s;
//     }
//  }
//  console.log(spaces(  ));

// function test1 (a,b,c)
// {
//     "use strict"
//     console.log(a+b+c)
// }test1(10,20,30)

// FUNCTION V/S METHOD
// like:
// function add(a,b){
// //code
// }
// console.log(add(1,3))
// a function can be called independently without any linker

// whereas,
// let name = {
// fname: "abc"
// }
// console.log(name.fname)
// method needs to be called with the help of some linker. .log() is a method itself