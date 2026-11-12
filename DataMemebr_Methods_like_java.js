//PRACTISE SESSION DATA MEMEBER AND METHODS

//document.write("You are practising about JS classes data member and methods ");
    class Student
    {
      //define data member outside class

       constructor(studentId,studentName,studentRollno)
      {
         this.studentId=studentId;
         this.studentName=studentName;
         this.studentRollno=studentRollno;
      }

      display()
      {
         console.log("Student name is "+s1.studentName);
         console.log("Student id is "+s1.studentId);
         console.log("Student roll no  is "+s1.studentRollno);
      }
      
    }

    //Object creation 

    let s1=new Student(100,"Rajesh",10001);
    s1.display();
     
//switch case statement

let i=4;
switch(i<5)
{
case true :
console.log("yes true");
break;

case false :
  console.log("yes false");
  break;

  default :
  console.log("everything is fine");
}

//ARRAYS 

//Creation

//switch case

let browserName="Chrome1";

switch(browserName)
{
  case "Chrome":
    console.log("define chrome object");
    break;
    case "Edge":
    console.log("define edge object");
    break;
    case "Firefox":
    console.log("define firefox object");
    break;
    default :
    console.log("no browser is defined");
    break;
}
//Array concepts
function enter()
{
for(let i=0;i<studentList.length;i++)
{
  console.log("studentList"+"["+i+"]"+"="+studentList[i]);
}
}
let studentList=["rajesh","aki","murugan","geetha"];
console.log(studentList);
 enter();

studentList.push("Raj1");
//enter();
studentList.shift(); //---------this method remove element in first position
enter();

let numbers=[10,20,30,40,50];
let result=numbers.filter(num => num<50); //filter elements by condition
console.log(result);

//perform an operation with every element by Map

let map=numbers.map(num=>num*3);
console.log(map);
console.log(numbers.includes(10));

