class Vehical{
    constructor(name,price){
        this.name =name;
        this.price =price
    }
    move(){
        console.log('gari chole na chole na re')
    }
}

class bas extends Vehical(){
    constructor(name,price,seat,ticketPirce){
        super(name,price);
        this.seat =seat;
        this.ticketPirce= ticketPirce
    }
}

class track extends Vehical{
    constructor(name, price, load){
        super(name, price);
        this.load =load
    }
}