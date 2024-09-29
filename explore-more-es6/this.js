class Person{
    constructor(name,age){
        this.name =name;
        this.age=age
    }
    sleep(){
        console.log(`sleeping ${this.name}`)
    }
}

const kodom =new Person("kodom",15);
kodom.sleep();
console.log(kodom)