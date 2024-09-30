function kitchen(){
    let roast =0;
    return function(){
        roast++;
        return roast;
    }
}
// const fastService =kitchen();
// const fastService1 =kitchen();
// const fastService2 =kitchen();
// console.log(fastService())
// console.log(fastService())
// console.log(fastService())
// console.log(fastService())
// console.log(fastService())
// console.log(fastService())
// console.log(fastService1())
// console.log(fastService1())
// console.log(fastService1())
// console.log(fastService1())
// console.log(fastService1())
// console.log(fastService2())
// console.log(fastService2())
// console.log(fastService2())
// console.log(fastService2())
// console.log(fastService2())
// console.log(fastService2())


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  init();

  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12