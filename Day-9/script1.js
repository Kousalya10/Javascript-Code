// function
// function topositive(num)
// {
//  return num>0
// }
// console.log(topositive(5))

// function findproduct(a,b)
// {
//     return a*b
// }

// console.log(findproduct(10,20))

// default parameter
// function greet(name='Kous')//default function
// {
//     console.log("hi",name)
// }
// greet('Ram')
// greet()

//Recution = function calling itself
// function factorial(num)
// {
//     if(num==1)
//     return 1
//      return num*factorial(num-1)
// //   for(let i=num-1;i>=1;i--)
// //   num=num*i
// // return num
// }
// console.log(factorial(5))

// function Expression
// let Event = funcion(num)
// {
//     return num%2==0
// }
// console.log(Event(6));

// let arr=[2,4,6,8,5]
// let findsum = function(arr)
// {
// let sum=0
// for (let value of arr)
// {
//     sum=sum+value
// }
// return sum
// }
// console.log(findsum(arr))

// arrow function 
// let volume = (l,b,h) =>  {
//     return l*b*h
// }
// console.log(volume(20,3,10))

// let arr=[2,4,6,8,5]
// let sumofArr = (arr) => {
//     let sum=0
// for (let value of arr)
// {
//     sum=sum+value
// }
// return sum
// }
// console.log(sumofArr(arr))

//area of circle
// let area = (r) =>{
//      return Math.PI*r*r
// }
// console.log(area(3))

//spread operators or rest operator:we can use multiple inputs in parameters using ... dots
// let prod=function(...arr){
    
//     let result=0
//     for( value of arr)
//     result= result+value
// return result
// }
// console.log(prod(7,5,9,1))

arr=['kous','krishi','shree']
arr.forEach(print)
    
    function print(value)
    {
console.log(value)
    }