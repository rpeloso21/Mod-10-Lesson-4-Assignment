function Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

Account.prototype.deposit = function(depositAmount) {
    this.balance = this.balance + depositAmount;
    console.log("New balance:", this.balance);
}

Account.prototype.withdraw = function(withdrawAmount) {
    this.balance = this.balance - withdrawAmount;
    console.log("New balance:", this.balance);
}

Account.prototype.calcInterest = function(APR, months) {
    for (let i = 0; i < (months+1); i++) {
        this.balance = this.balance * (1+APR)
    }
    console.log(`New balance is ${this.balance} after ${months} months of interest accrued.`)
}


let account1 = new Account(1001, 100, "Bob Smith");

console.log(account1.deposit(50))
console.log(account1.withdraw(75))
console.log(account1.calcInterest(.05, 12))