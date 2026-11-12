function welcomeMsg()
{
    console.log(" welcome to JS");
    document.write("  welcome to JS <br>");
}

welcomeMsg();

//FUNTION WITH PARAMETER

function welcomeMsg(name)
{
    console.log(name+ "  welcome to JS");
    document.write(name+ "  welcome to JS <br>");
}

welcomeMsg("Raj");

//Normal Function

function  Calculator()
{
   let x=10,y=20;
   let z=x+y;
   console.log("The value of z is "+z);
   document.write("The value of z is "+z);
}
Calculator();