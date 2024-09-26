const anota = {
    name: 'ananta',
    age: 45,
    phone: '017545454',
    money: 454545,

}

const { phone } = anota

// const phone =anota.phone;
// console.log(typeof phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)
// console.log(phone)

const numbers = [45, 50];
const [fast, secdion] = numbers;
const [x, y] = [45, 62];

function doubleThem(a, b) {
    return [a * 2, b * 2]
}

const [a,b] =doubleThem(10,20);
console.log(a,b)