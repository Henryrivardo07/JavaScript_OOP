class Animal {
  constructor(name) {
    this.name = name; // Menyimpan nama ke dalam instance
  }
}

// Class Rabbit mewarisi dari Animal
class Rabbit extends Animal {
  // Kita tidak menuliskan constructor di sini
  // Tapi JavaScript secara otomatis membuat constructor default seperti ini:
  // constructor(...args) {
  //   super(...args); // Memanggil constructor dari parent (Animal)
  // }
}
// Membuat instance dari Rabbit
const bunny = new Rabbit("Fluffy");

// Karena Rabbit mewarisi dari Animal dan constructor-nya otomatis memanggil super(),
// maka property `name` tetap akan tersimpan di dalam objek
console.log(bunny.name); // Output: Fluffy

/*
🧠 Penjelasan Tambahan:
- Ketika subclass (Rabbit) **tidak memiliki constructor**, JavaScript akan **secara otomatis** membuat constructor default yang isinya hanya:
    constructor(...args) {
      super(...args);
    }

- Ini artinya semua argumen yang diberikan saat membuat `new Rabbit(...)` akan langsung diteruskan ke constructor parent (Animal).

- Jika kamu butuh menambahkan properti khusus di Rabbit, barulah kamu perlu menulis constructor-nya sendiri dan tetap wajib panggil `super()`.

📌 Singkatnya:
✔️ Tidak menulis constructor di subclass = tetap aman, selama tidak ada properti tambahan
❌ Menulis constructor tanpa `super()` = error, karena harus tetap memanggil parent constructor dulu
*/
