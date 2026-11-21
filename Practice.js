let g=[{ name:"Raj",marks:30},
       { name:"Aki",marks:50}
];

console.log(g.length);

//normal function
function pass()
{
    if(g[1].marks>30)
        return "Pass";
    //console.log(g.marks);
}
 console.log(pass());

 //Arrow function

 let getData=()=>
 {
    console.log(g);
    if(g[1].marks<50)
    {
        return "Fail";
    }
 }

 getData();
 console.log(getData());

 //Without Map()

 let students = [
    { name: "Raj", marks: 30 },
    { name: "Aki", marks: 50 },
    { name: "Anu", marks: 75 },
    { name: "Ram", marks: 90 }
];

let names=[];

for(let student of students)
{
    names.push("name :"+student.name+"marks :"+student.marks);
}
console.log(names);

//By using map

let data=students.map((element)=>
{
      return (element.marks)*10;
});

console.log(data);

//morethan 50 marks normal loop
let t=[];
for(let u of students)
{
    if(u.marks>50)
    {
       t.push(u.marks);
    }
}

console.log(t);

//morethan 50 marks using filter()

let more=students.filter((element)=>
{
     return element.marks>50;

});

console.log(more);