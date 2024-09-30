function kitchen(){
    let roast =0;
    return function(){
        roast++;
        return roast;
    }
}
const fastService =kitchen();
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService())
console.log(fastService())