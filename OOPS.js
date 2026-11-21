class Account
{
   accno;accHolderName;

   constructor(accno,accHolderName)
   {
        this.accno=accno;
         this.accHolderName=accHolderName;
   }

    
}

class SavingAccount extends Account
{
   amountRange;
   constructor(accno,accHolderName,amountRange)
   {
    super(accno,accHolderName);
    this.amountRange=amountRange;
   }

   display()
   {
       console.log("Acc no :"+this.accno);
       console.log("accHolderName  :"+this.accHolderName);
       console.log("amount range :"+this.amountRange);

   }
   

}
class currentAccount extends Account
{
    amountRange;
   constructor(accno,accHolderName,amountRange)
   {
    super(accno,accHolderName);
    this.amountRange=amountRange;
   }

   display()
   {
       console.log("Acc no :"+this.accno);
       console.log("accHolderName  :"+this.accHolderName);
       console.log("amount range :"+this.amountRange);

   }
}

let a1=new SavingAccount(100,"Rajesh",100000);
let a2=new currentAccount(101,"Raj",200000);

a1.display();
a2.display();