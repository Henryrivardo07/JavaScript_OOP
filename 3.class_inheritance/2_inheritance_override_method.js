// Kita mulai dengan membuat class induk (parent class) bernama Animal
class Animal {
  constructor(name) {
    // Menyimpan nama hewan ke dalam property instance
    this.name = name;
  }

  // Method umum yang bisa digunakan semua hewan
  speak() {
    console.log(`${this.name} makes a noise.`); // default behavior
  }
}

// Kita buat class Dog yang merupakan turunan dari Animal
// Menggunakan keyword `extends` untuk pewarisan (inheritance)
class Dog extends Animal {
  // Kita override (timpa) method speak() milik Animal
  speak() {
    // Implementasi khusus untuk Dog
    console.log(`${this.name} barks.`); // anjing menggonggong
  }
}

// Membuat instance baru dari Dog dengan nama "Buddy"
const dog = new Dog("Buddy");

// Memanggil method speak()
// Karena Dog punya implementasi sendiri (override), maka yang dijalankan adalah versi milik Dog
dog.speak(); // Output: Buddy barks.

/*
🧠 Penjelasan Tambahan:
- Inheritance memungkinkan class untuk mewarisi properti dan method dari class lain.
- Dog mewarisi semua dari Animal, tapi kita bisa "menimpa" method tertentu seperti `speak`.
- Jika Dog tidak punya `speak()`, maka method dari Animal akan dijalankan.

Contoh lanjutan:
class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}
*/
