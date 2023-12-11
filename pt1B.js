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
    contact: [
        {name: 'Max'},
        {name: 'Mike'},
        {name: 'Adam'}
    ],
    address: 'Sukhumvit 62',
    }

function convertFormat(customers){
    
    let array = [];

    for(let i = 0 ; i < customers.contact.length; i++){
        console.log(customers.contact[i]);
        for(key in customers.contact[i]){
            array.push(customers.contact[i])
        }
     }
    

    for(let i = 0 ; i < array.length ; i++){
        array[i]['customer'] = customers.customer
        array[i]['address'] = customers.address
    }

    return array;
}

console.log(convertFormat(customers));
