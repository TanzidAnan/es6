const products = [
    { id: 1, name: 'apple', price: 45000 },
    { id: 2, name: 'oppo', price: 14000 },
    { id: 3, name: 'relmi', price: 5000 },
    { id: 4, name: 'redmi', price: 20000 }
]
const name = products.map(product => product.name);
const price = products.map(product => product.price);
console.log(name)
console.log(price)

const p = products.reduce((a, b) => a + b.price, 0);
console.log(p)