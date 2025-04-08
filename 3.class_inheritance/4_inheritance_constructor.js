// Parent class Animal dengan constructor
class Animal {
  constructor(name) {
    this.name = name; // Menyimpan nama ke dalam instance
  }
}

// Child class Rabbit yang mewarisi dari Animal
class Rabbit extends Animal {
  constructor(name, earLength) {
    // Di subclass, kita wajib memanggil constructor parent menggunakan super()
    // Ini agar property `name` dari Animal bisa diinisialisasi dengan benar
    super(name); // super() = panggil constructor dari class Animal

    // Setelah super(), kita bisa menambahkan property khusus untuk Rabbit
    this.earLength = earLength; // Menyimpan panjang telinga
  }
}

// Membuat instance baru dari class Rabbit
const r = new Rabbit("White Rabbit", 10);

// Mengecek apakah property dari parent dan child berhasil tersimpan
console.log(r.name); // Output: White Rabbit (dari constructor Animal)
console.log(r.earLength); // Output: 10 (property tambahan dari Rabbit)

/*
🧠 Penjelasan Tambahan:
- Saat class menggunakan `extends`, kita harus memanggil `super()` di constructor-nya sebelum menggunakan `this`.
- `super()` akan menjalankan constructor dari parent (dalam hal ini, Animal).
- Setelah itu, barulah kita bisa menambahkan property tambahan di child class.
- Tanpa `super()`, akan muncul error: "Must call super constructor in derived class before accessing 'this'"

Contoh error:
class Cat extends Animal {
  constructor(name) {
    this.name = name; // ❌ Error! Harus panggil super() dulu
  }
}
*/
