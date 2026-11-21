function student()
{
    this.name="john";
    this.id=100;
}

student.prototype.age=35;
let s1=new student();
 console.log(s1.name+" "+s1.id+" "+s1.age);
let s2=new student();

console.log(s2.name+" "+s2.id+" "+s2.age);