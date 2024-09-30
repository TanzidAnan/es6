function sum(a, b, c) {
    // console.log(arguments[5])
    const agr =[...arguments];
    console.log(agr)
    const result = a + b + c;
    return result
}
const totle =sum(10,20,30,40,50,60,70,80,90);
console.log(totle)