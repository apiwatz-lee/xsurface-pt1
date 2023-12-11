// Create a function that converts the format of this variable
// Input: [
	// { name: “A”, age: “30”},
	// { name: “B”, age: “9”},
	// { name: “C”, age: “20”},
	// { name: “D”, age: “18”},
	// { name: “E”, age: “11”},
	// { name: “F”, age: “60”},
	// { name: “G”, age: “27”},
	// { name: “H”, age: “90”},
	// { name: “I”, age: “21”},
	// { name: “J”, age: “12”}
// 	]
// Output: [“B”, “J”, “D”, “I”, “G”, “A”]

// [9,12,18,21,27,30]
// Access age value
//1. เรียงลำดับ age จากน้อยไปมาก
//2. Get value ของ name ใน array (Loop)

const employees = [
    { name: 'A', age: 30},
	{ name: 'B', age: 9},
	{ name: 'C', age: 20},
	{ name: 'D', age: 18},
	{ name: 'E', age: 11},
	{ name: 'F', age: 60},
	{ name: 'G', age: 27},
	{ name: 'H', age: 90},
	{ name: 'I', age: 21},
	{ name: 'J', age: 12}
]

function sixYoungPersonWhoHaveThreeFactorInAge(employees){
  
    let sortAge = [];
    let ageThreeFactor = [];
    let result = [];

    for(let i = 1 ; i < employees.length; i++){

        for(let j = 0 ; j < i ; j++){
        
            if(employees[j].age > employees[i].age){

                let storage = employees[i]
                employees[i] = employees[j]
                employees[j] = storage

            }
        }
    }

    sortAge = employees;

    for(let i = 0 ; i < sortAge.length ; i++){
        if(employees[i].age % 3 === 0){
            ageThreeFactor.push(employees[i])
        }
    }

    for(let i = 0 ; i < 6 ; i++){
        result.push(ageThreeFactor[i].name)
    }

    return result;
}

console.log(sixYoungPersonWhoHaveThreeFactorInAge(employees));




