// let arr=[1,2,3,4,5,6,7,8]

// const evens = arr. filter((num) =>
//  num % 2 === 0);

// console.log("Even numbers are",evens)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function even(){
// for (const num of arr) {
//     if (num % 2 === 0) {
//         arr.filter(num);
//     }
//     }
// }
// console.log(even());
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const num of arr) {
//     if (num % 2 === 0) {
//        even.push(num);
//     }
// }
// console.log(even);


// var numbers = [1, 2, 3, -4, -5, -6];

// var sum = 0;

// for (var i = 0; i < numbers.length; ++i) {
//     if (numbers[i] > 0) {
//         sum += numbers[i];
//     }
// }

// console.log(sum);


// function countVowel(str) { 
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }

// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);


let regex=/([A-Za-z0-9]@[a-z]\.[a-z])/gi;
const str=prompt("Enter the string");
const result=regex.test(str)
console.log(result);
    