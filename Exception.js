 let name=null;
 console.log("program staretd");
 try{
        console.log(name.name);

 }
 catch(error)
 
 {
     console.log("name is null so error");
          console.log(error.name);

               console.log(error.message);

 }
   console.log("program finished");


   //types of error in js

   //1.type error like above 
   //2. reference error

   let a=5;
   console.log(a);

   try{
   console.log(b);   //b is not defined 
   }
   catch(error)
   {
     //console.log("b is not defined");
     console.log(error.name);
     console.log(error.message);
   }