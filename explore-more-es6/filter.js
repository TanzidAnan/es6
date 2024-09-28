const numbers =[12,4,65,12,32,45,55];
const filter =numbers.filter(p=>p>12);
// console.log(filter);

const firends =['Tanzid','Marzan','Anan'];
const firend =firends.filter(f=> f.length >5);
// console.log(firend);

const number =[12,25,45,20,30,25,14,60,41];
// const nun =number.filter(n => n>20);
const nun =number.filter(n=> n%2 ===0)
console.log(nun)