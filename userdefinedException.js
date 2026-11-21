class InvalidAgeError extends Error
{
   constructor(msg)
   {
       super(msg);
   }
}

let age=10;

try{
    if(age<18)
    {
        throw new InvalidAgeError("Age below 18 so not eligible to vote");
    }
    else 
        console.log("Eligible to vote");
}
catch(InvalidAgeError)
{
  console.log(InvalidAgeError.name);
  console.log(InvalidAgeError.message);
    
}