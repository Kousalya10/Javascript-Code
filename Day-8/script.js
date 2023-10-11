// function Hypotenuse = (a,b) =>  {
//     let c= Math.sqrt(a*a + b*b);
//     return c 
// }
// console.log("The length of the hypotenuse of a right triangle is "+ Hypotenuse(3,4));

// function hypotenuse(a,b)
// {
//     return Math.sqrt(a*a+b*b);
// }
// console.log("The length of the hypotenuse of a right triangle is "+hypotenuse(3,4));

// let date = new Date();
//  let hh = date. getHours();
//   let mm = date. getMinutes();
//   let ss = date.getSeconds();
//   console.log(` ${hh} hours ${mm} minutes ${ss} seconds` );

//   let date1 = new Date();
//   let year = date.getFullYear();
//   console.log(year);

// SET METHOD

// let kous= new Date();

// console.log(kous.setFullYear(2022,10,3));

function addwithSurcharge (amt1,amt2)   {
    
    if(amt1 <=10 )
    {
        
        amt1=amt1+1;
    }
    else
    {
        amt1=amt1+2;
    } if(amt2 <= 10)
    {
        
        amt2=amt2+1;
    }
    else
    {
        amt2=amt2+2;
    }
const total=amt1+amt2;
return total;
}
console.log("Total=",addwithSurcharge (5,15));