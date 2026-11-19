 function multiply(num)
 {
    for(let i=1;i<6;i++)
    {
    console.log(num+"X"+i+"="+num*i) 
    }
 }

 multiply(5);

 function Eligibility(name, age)
 {
     if(age<18)
     {
        console.log(name+" is not eligible to vote")
     }
     else{

            console.log(name+" is  eligible to vote")
     }

     function vote()
     {
        console.log(name+ "you immediately apply voter id");
     }

     vote();

 }
  Eligibility("Rajesh", 20);
  Eligibility("Madhu", 16);
  Eligibility("Shanthi",25);

 function add(a,b)
 {
    console.log("sum of a+b is :"+(a+b));

    function sub()
    {
        console.log("sub of a-b is :"+(a-b));
    }
    function mul()
    {
        console.log("mul of a*b is :"+(a*b));
    }
    sub();
    mul();
    
 }

 add(10,20);


 //Objects and properties

let person=
{
    name:"raj",
    age:30,
    vote:"yes"

}

person["id"]=100;

console.log(person.age);
console.log(person["name"]);
console.log(person.id);

//for in

for(let x in person)
{
    //console.log(x);
    //console.log(person[x]);
    console.log(x+":"+person[x]);

}

let employee=
{
    name:"raj",
    id:100,
    salary:1000,
    bonus:function(num)
    {
        salary +=num;
    }

     
}

for(let x in employee)
{
    console.log(person[x]);
}