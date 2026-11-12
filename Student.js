 const studentName="Rajesh";
 let Age=36;
 let CourseName="Playwright with js";
 let Isenrolled=true;
 const listofSubjects=["java","python","js"];

 console.log(typeof studentName );
 console.log(typeof Age );
 console.log(typeof CourseName );
 console.log(typeof Isenrolled );
 console.log(typeof listofSubjects );

 //get all information in console

 console.log(studentName);
 console.log(Age);
 console.log(CourseName);
 console.log(Isenrolled);
 console.log(listofSubjects);

 //perform Arithmatic and Comparison operations

 let javascript=75,Tesing=80,Automation=70;

 console.log("Total marks :"+(javascript+Tesing+Automation));
 console.log("Average marks :"+(javascript+Tesing+Automation)/3);
 console.log("Check wheteher student scored atleast 40 marks in javascript:"+(javascript>=40));


//use if-else check whether employee is eligible to examination or not

let employeeAttendance=85;  // 85%
if(employeeAttendance>=75)
{
    console.log("Employee is eligible for the examination");
}
else
{
    console.log("Employee is not eligible for the examination");
}

//switch -case 

let browserName="chrome";

switch(browserName)
{
 case "chrome":
    console.log("Running tests on chrome");
    break;
    case "safari":
    console.log("Running tests on safari");
    break;
    case "edge":
    console.log("Running tests on edge");
    break;
    case "firefox":
    console.log("Running tests on firefox");
    break;

    default:
        console.log("Unsupported browser");
        break;
}


//for loop break continue  multiplication table

let number=5;

for(let i=1;i<=10;i++)
{
    console.log("5X"+i+"="+(i*number));
}
 