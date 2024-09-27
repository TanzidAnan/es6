const data = [{ id: 1, name: 'abule', address: 'Dhaka' }];
// console.log(data[0].address)
// for(let da of data){
//     console.log(da.address)
// }

const pruduct = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo', price: 65000 },
        { id: 2, name: 'apple', price: 10000 }
    ]
}
// console.log(pruduct.data[1].price)

const user ={
    id:5001,
    name:"tanzid",
    address:{
        street:{
            fast:'54/4',
            secdion:'98/36',
            thard:'98/22'
        },
        city:'Dhaka'
    }
}

console.log(user.address.street.secdion)