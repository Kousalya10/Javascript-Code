let name1="Hello";
let name2="World";

console.log(name1+" "+name2);
console.log(`name1 is ${name1} and name2 is ${name2}`);


// let myname='Ashirwad Panday';

// console.log(myname.slice(0, 10));
// console.log(myname.trim());

// 


// const reversestr=(str)=>{
//     let reversedstr=" ";
//     for(let i=str.length-1;i>=0;i--)
//     {
//         reversedstr+=str[i]
//         return reversedstr;
//     }
//     console.log(reversedstr("I am Kousalya"))
// }


// const splitByEvenAndOdd = (someArray) => {
//     let evenArray = [];
//     let oddArray = [];
    
//     for (let i = 0; i < someArray.length; i++) {
//     if (someArray[i] % 2 === 0 && !evenArray.includes(someArray[i])) {
//     evenArray.push(someArray[i]);
//     }
//     else if(someArray[i] % 2 !== 0 && !oddArray.includes(someArray[i]))
//     {
//     oddArray.push(someArray[i]);
//     }
//     }
    
//     return [evenArray, oddArray]; }
    
//     console.log(splitByEvenAndOdd([1, 2, 3,1,4,3,9, 4, 5, 6]));
    
    // Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle.
    //  The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid.
    //   If a and b are the lengths of the two legs and c is the length of the hypotenuse, 
    // the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

    function Hypotenuse  (a,b)  {
        let c= Math.sqrt(a*a + b*b);
        return c 
    }
    console.log("The value of the hypotenuse is "+ Hypotenuse(3,4));

    // function hypotenuse(a,b)
    // {
    //     return Math.sqrt(a*a+b*b);
    // }
    // console.log("The value of the hypotenuse is "+hypotenuse(3,4));