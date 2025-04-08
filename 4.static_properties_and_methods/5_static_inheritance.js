// 5_static_inheritance.js
// ==========================

// Membuat class Animal dengan static property dan static method
class Animal {
  static planet = "Earth";
  // ⬆️ Static property: hanya bisa diakses melalui class, bukan dari instance.
  // Properti ini akan diwarisi oleh child class seperti Rabbit.

  constructor(name, speed) {
    this.speed = speed; // menyimpan kecepatan hewan di instance
    this.name = name; // menyimpan nama hewan di instance
  }

  run(speed = 0) {
    this.speed += speed; // menambahkan nilai kecepatan baru
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  // Static method untuk membandingkan dua instance Animal (atau turunannya) berdasarkan speed
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed; // mengurutkan dari speed kecil ke besar
  }
}

// Membuat class Rabbit yang mewarisi dari Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`); // method tambahan khusus Rabbit
  }
}

// Membuat array dari instance Rabbit
let rabbits = [
  new Rabbit("White Rabbit", 10), // speed = 10
  new Rabbit("Black Rabbit", 5), // speed = 5
];

// Mengurutkan array rabbits menggunakan static method compare dari parent class Animal
// Karena Rabbit mewarisi method static Animal.compare
rabbits.sort(Rabbit.compare);

// Menjalankan method run() pada rabbit dengan speed paling kecil (Black Rabbit)
rabbits[0].run(); // Output: Black Rabbit runs with speed 5.

// Mengakses static property planet yang diwarisi dari Animal ke Rabbit
console.log(Rabbit.planet); // Output: Earth

/*

🧠 Ringkasan:
Rabbit mewarisi static method compare() dan static property planet dari Animal.

Static method/properti bisa diwariskan dan dipanggil langsung dari class turunan (Rabbit.compare() dan Rabbit.planet).

Instance method seperti run() atau property speed hanya bisa diakses dari object instance (new Rabbit(...)), bukan dari class.
*/
