class BankAccount {
    constructor(initialBalance) {
      let balance = initialBalance;
  
      this.deposit = (amount) => {
        if (amount > 0) {
          balance += amount;
        }
      };
  
      this.withdraw = (amount) => {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
        }
      };
  
      this.getBalance = () => {
        return balance;
      };  
    }
  }
  
  const account = new BankAccount(1000);
  
  account.deposit(500);
  console.log(`Current balance: $${account.getBalance()}`);
  
  account.withdraw(200);
  console.log(`Current balance: $${account.getBalance()}`);
  