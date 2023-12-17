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

const employees = [ 
    { name: "Alex", tel: "0991112222", code: "xsf0001"},
    { name: "Jane", tel: "0812221234", code: "xsf0002"},
    { name: "Alex", tel: "0832214433", code: "xsf0001"},
    { name: "Alex", tel: "0991113122", code: "xsf0003"}
    ] 

function removeDuplicateCode(employees){

     let removeDuplicate = employees.reduce((prev,curr)=>{

          const findDuplicate = prev.find((item)=> item.code === curr.code) 

          if(findDuplicate){
               if(typeof findDuplicate.tel === 'string'){
                    findDuplicate.tel = [findDuplicate.tel,curr.tel]
               }else{
                    findDuplicate.tel.push(curr.tel)
               }
               return prev; 
          }

          return [...prev,curr] 
     },[])
     
     return removeDuplicate;
}

console.log(removeDuplicateCode(employees));
