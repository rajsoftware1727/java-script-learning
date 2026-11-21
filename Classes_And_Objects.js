class Bank
{
    static bankName="SBI";  // 
    #balance=0;
    constructor(accHolderName,accNo)
    {
             this.accHolderName=accHolderName;
             this.accNo=accNo;
    }

    display()
    {
        return this.#balance;
    }

    deposite(amount)
    {
         if(amount>0)
            return this.#balance +=amount;
    }

    getBalalnce()
    {
        return this.#balance;
    }
}

let a=new Bank("Rajesh",100);
let b=new Bank("Aki",200);
a.deposite(300);
b.deposite(500);
b.deposite(500);
console.log("Bank name is :"+Bank.bankName);
console.log("a bank balance is :"+a.getBalalnce());
console.log("b bank balance is :"+b.getBalalnce());