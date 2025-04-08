// 2_private_usecase.js
// =======================

// Contoh lain: class Account dengan saldo yang tidak boleh dimanipulasi langsung
class Account {
  #balance = 0; // Saldo awal, properti private

  constructor(owner) {
    this.owner = owner;
  }

  // Method untuk menyetor uang
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  // Method untuk menarik uang
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance.");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. Remaining balance: ${this.#balance}`);
    }
  }

  // Method untuk mendapatkan saldo
  getBalance() {
    return this.#balance;
  }
}

let acc = new Account("Andi");
acc.deposit(100); // ✅
acc.withdraw(50); // ✅
console.log(acc.getBalance()); // ✅ Output: 50

// acc.#balance = 10000; // ❌ Error: Cannot access private field

/*
Studi kasus nyata dengan class Account untuk menunjukkan bagaimana properti #balance melindungi data.
Setiap method diberi komentar untuk menjelaskan tujuannya dan bagaimana properti private bekerja di dalamnya.
*/
