// Create a function that converts the format of this variable
// Input: [ 
// { name: "Alex", tel: "0991112222", code: "xsf0001"},
// { name: "Jane", tel: "0812221234", code: "xsf0002"},
// { name: "Alex", tel: "0832214433", code: "xsf0001"},
// { name: "Alex", tel: "0991113122", code: "xsf0003"}
// ] 
// Output: [
// { name: "Alex", tel: ["0991112222", "0832214433"], code: "xsf0001"},
// { name: "Jane", tel: "0812221234", code: "xsf0002"},
// { name: "Alex", tel: "0991113122", code: "xsf0003"}
// ] 

//เอา code ออกมาเป็น key ใช้คุณสมบัติ obj overwrite

const employees = [ 
    { name: "Alex", tel: "0991112222", code: "xsf0001"},
    { name: "Jane", tel: "0812221234", code: "xsf0002"},
    { name: "Alex", tel: "0832214433", code: "xsf0001"},
    { name: "Alex", tel: "0991113122", code: "xsf0003"}
    ] 

function removeDuplicateCode(employees){
   
   let newArray = [];
   let uniqueCode = {};

   for(let i = 0 ; i < employees.length ; i++){
        codeValue = employees[i].code
        uniqueCode[codeValue] = employees[i]
   }

   for(key in uniqueCode){
        newArray.push(uniqueCode[key])
   }

   return newArray;
    
}

console.log(removeDuplicateCode(employees));
