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

function employeeAgeUnder60(employees){
  
    return employees
    .filter(employee => employee.age %3 === 0 && employee.age < 60)
    .sort((a,b)=> a.age - b.age )
    .map((item)=>item.name)
    
}

console.log(employeeAgeUnder60(employees));




