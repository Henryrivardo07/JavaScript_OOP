// Class Animal dengan constructor dan method dasar
class Animal {
  constructor(name) {
    // Property name disimpan saat instance dibuat
    this.speed = 0; // default speed
    this.name = name; // nama hewan
  }

  // Method untuk membuat hewan berlari
  run(speed) {
    this.speed = speed; // set kecepatan baru
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  // Method untuk menghentikan hewan
  stop() {
    this.speed = 0; // reset speed ke 0
    console.log(`${this.name} stands still.`);
  }
}

// Rabbit adalah subclass yang mewarisi Animal
class Rabbit extends Animal {
  // Method baru khusus Rabbit
  hide() {
    console.log(`${this.name} hides!`);
  }
}

// Membuat instance Rabbit
const rabbit = new Rabbit("White Rabbit");

// Memanggil method dari parent class
rabbit.run(5); // Output: White Rabbit runs with speed 5.
rabbit.stop(); // Output: White Rabbit stands still.

// Memanggil method khusus Rabbit
rabbit.hide(); // Output: White Rabbit hides!

/*
Objek dari *class* `Rabbit` memiliki akses baik ke metode `Rabbit` seperti `rabbit.hide()`, maupun ke metode `Animal` seperti `rabbit.run()`.

Secara internal, keyword `extends` bekerja dengan menggunakan mekanisme *prototype* lama. Keyword ini mengatur `Rabbit.prototype.[[Prototype]]` ke `Animal.prototype`. Jadi, jika sebuah metode tidak ditemukan di `Rabbit.prototype`, JavaScript akan mencarinya di `Animal.prototype`.
*/
