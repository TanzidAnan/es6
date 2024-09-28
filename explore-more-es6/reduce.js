const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = numbers.reduce((previous, current) => previous + current, 0);
console.log(number)