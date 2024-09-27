const numbers = [46, 63, 45, 98, 69, 89, 69, 74, 69, 63, 37];

// const doubled =[];
// for(const number of numbers){
//     const double =number*2;
//     if(double%2 ===0){
//         doubled.push(double);
//     }

// }

const double = x => x * 2;

const output = numbers.map(double)
const output2 = numbers.map(x => x * 2)

// console.log(output)
console.log(output2)