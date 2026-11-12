//ASSIGNMENT OPERATORS
let x=10;y=20;
console.log("ASSIGNMENT OPERATORS");
x+=5;
console.log("the value of x is "+x);
document.write("the value of x is "+ x );
y-=10;
console.log("the value of x is "+y);
document.write("<br>the value of x is "+ y);
x*=10;
console.log("the value of x is "+x);
document.write("<br>the value of x is "+ x);
x/=5;
console.log("the value of x is "+x);
document.write("<br>the value of x is "+ x);
y%=10;
console.log("the value of x is "+y);
document.write("<br>the value of x is "+ y);
x**=10;
console.log("the value of x is "+x);
document.write("<br>the value of x is "+ x);

//LOGICAL OPERATORS

let a=10,b=20;


console.log(("&& AND operator :")+(a==5&&b==20));
console.log(("|| OR operator :")+(a==5||b==20));
console.log(("Logical NOT operator :")+!(a==5&&b==20));

//Ternary operator ?:

let c=10;
console.log(c>5?"correct baiii":"no baiii not correct");

//Typeof AND Instanceof  Operators

 a="Rajesh";
 b=10;
 c=true;

 console.log(typeof a);
 console.log(typeof b);
 console.log(typeof c);

 class Train
 {
    Train(name)
    {
        this.name=name;
    }
 }

 let s1=new Train("HOWRAH EXPRESS");
 console.log("Below is the instanceof operator");
 console.log(s1 instanceof Train);

 let name;
 let trainNo;
 let engineType;

class Engine
{
    
    constructor(name,trainNo,engineType)
    {
       this.engineType=engineType;
       this.trainNo=trainNo;
       this.name=name;
    }

    getEngineDetails()
    {
         console.log("Train name is :"+this.name);
         console.log("Train no is :"+this.trainNo);
         console.log("Train rngine type  is :"+this.engineType);
    }
 }
     
    let e1=new Engine("HOWRAH EXPRESS",21547,"Diesel");
    e1.getEngineDetails();


    