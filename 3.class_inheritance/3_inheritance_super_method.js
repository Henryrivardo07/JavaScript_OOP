// 8_class_super.js
// ================

// Membuat class induk (parent) bernama Animal
class Animal {
  // Method stop() milik Animal
  stop() {
    console.log("Animal stops.");
  }
}

// Membuat class Rabbit yang mewarisi dari Animal
class Rabbit extends Animal {
  // Kita override method stop() milik parent
  stop() {
    // super.stop() digunakan untuk memanggil method asli dari parent class (Animal)
    super.stop(); // Output: "Animal stops."

    // Setelah memanggil method parent, kita bisa menambahkan perilaku tambahan
    console.log("Rabbit also hides."); // Output tambahan: "Rabbit also hides."
  }
}

// Membuat instance baru dari class Rabbit
const rabbit = new Rabbit();

// Memanggil method stop() dari instance rabbit
// Karena Rabbit mengoverride method tersebut, maka yang dipanggil adalah versi dari Rabbit
// Namun versi Rabbit juga memanggil method parent lewat `super.stop()`
rabbit.stop();

// Output:
// Animal stops.        ← hasil dari super.stop()
// Rabbit also hides.   ← hasil tambahan dari Rabbit.stop()

/*
🧠 Penjelasan Tambahan:
- `super` digunakan untuk mengakses method dari parent class dalam konteks inheritance.
- Ini memungkinkan kita untuk "melanjutkan" atau "menyisipkan" perilaku lama ke perilaku baru.
- Umum digunakan saat kita ingin menambahkan fitur baru tapi tetap mempertahankan logika lama.

Tips:
- `super.constructor(...)` bisa digunakan di constructor anak untuk memanggil constructor parent.
*/
