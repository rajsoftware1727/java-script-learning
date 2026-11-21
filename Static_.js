class Student
{
    sname;sid;

    static schoolname="PCR";

    constructor(sname,sid)
    {
      this.sname=sname;this.sid=sid;
    }

    display()
    {
        console.log("Student name is :"+ this.sname)
        console.log("Student id is :"+ this.sid)
        console.log("school name is :"+ Student.schoolname)


    }

    static display1()
    {
        
        console.log("school name is :"+ Student.schoolname)


    }
}

let s1=new Student("Rajesh",100);

s1.display();
Student.display1();