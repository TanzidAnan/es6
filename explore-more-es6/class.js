const products = [
    { id: 1, name: 'apple', price: 45000 },
    { id: 2, name: 'oppo', price: 14000 },
    { id: 3, name: 'relmi', price: 5000 },
    { id: 4, name: 'redmi', price: 20000 }
]

class Product{
    country ='bangladesh'
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo= new Product();
console.log(lenovo)
lenovo.speak('oba kita kou')