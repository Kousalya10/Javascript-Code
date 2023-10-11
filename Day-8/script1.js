// function addwithSurcharge (a,b)   {
//     let c=a+b;
//     if(c <=10 )
//     {
//         c=c+1;
//         ;
//     }
//     else if(c > 10 && c <=20)
//     {
//         c= c+2;
//         ;
//     }
//     else if(c>20)
//     {
//         c= c+3;
//         c=++c;
//         return c;
//     }

// }
// console.log("Surchare = ",addwithSurcharge (10,30));

// let result;
// function addwithtax(amt1,amt2)

// {
//     const value1= amt1 <=10 ? amt1 +1 : amt1 + 2;
//     const value2= amt2 <=10 ? amt2 +1 : amt2 + 2;

//     return value1 + value2;
// }
// result=(addwithtax(5,15));
// console.log(result);



// function addTo(number)
//  {
//     let sum=0;
//     for(let i=1; i<=number; i++)
//     {
//         sum=sum+i;
       
//     }
//     return sum;
// }
// console.log(addTo(3));

function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));