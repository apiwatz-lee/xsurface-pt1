// Create a function that converts the format of this variable
// Input: 
//  {customer: "Xsurface", contact: [{name: “Max”},{name: “Mike”},{name: “Adam”}],address: “Sukhumvit 62”,}

// Output: 
//  [ 
//    {name: “Max”, customer: "Xsurface", address: “Sukhumvit 62”,},
//    {name: “Mike”,customer: "Xsurface", address: “Sukhumvit 62”,},
//    {name: “Adam”,customer: "Xsurface", address: “Sukhumvit 62”,}
//  ] 

let customers = { 
    customer: "Xsurface", 
    contact: [{name: 'Max'},{name: 'Mike'},{name: 'Adam'}],
    address: 'Sukhumvit 62',
    }

function convertFormat(customers){

    const {customer,address} = customers

    const newFormat = customers.contact.map((contact)=>{
        return {...contact,customer,address}
    })

    return newFormat
}

console.log(convertFormat(customers));
