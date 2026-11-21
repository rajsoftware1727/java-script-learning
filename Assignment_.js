 

let a=[{ name: "Anu", marks: 75 },{ name: "Rahul", marks: 42 },
{ name: "Meena", marks: 68 }, { name: "Arun", marks: 35 }];

//calculateResult()

 function calculateResult()
 {
    for(let data of a)
{
    if(data.marks<50)
    {
        console.log(data.name+"_Fail");
    }
    else{
        console.log(data.name+"_Pass");
    }
}
 }

 //displayResult()

 let display_Result=()=>
 {
     calculateResult();
  }

 display_Result();


 //2.Array and Array methods

 let students = [ { name: "John", marks: 85, grade: "A" },
{ name: "David", marks: 72, grade: "B" },
{ name: "Peter", marks: 90, grade: "A+" },
{ name: "Sarah", marks: 65, grade: "C" }];

//prints all students data

console.log("All Students:");

students.forEach((data)=>
{
   console.log(data.name+"-"+data.marks+"-"+data.grade);
});

//create seperate array to names by using map()

let names=students.map(function(data)
    {
       return data.name;
    }
);

console.log(names);
 
 //Students who scored 80 or above:

 let stuNames=students.filter((data)=>
{
     return data.marks>=80;

});

console.log(stuNames);