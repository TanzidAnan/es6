function kitchen(){
    let roast =0;
    return function(){
        roast++;
        return roast;
    }
}
const fastService =kitchen();
const fastService1 =kitchen();
const fastService2 =kitchen();
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService1())
console.log(fastService1())
console.log(fastService1())
console.log(fastService1())
console.log(fastService1())
console.log(fastService2())
console.log(fastService2())
console.log(fastService2())
console.log(fastService2())
console.log(fastService2())
console.log(fastService2())
