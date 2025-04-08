// 1_class_constructor_error.js
// ==============================

// Membuat class Animal
class Animal {
  constructor(type) {
    this.type = type; // Simpan jenis hewan ke dalam property 'type'
  }
}

// ❌ Contoh Error: mencoba memanggil class tanpa 'new'
// Baris di bawah akan error: "Class constructor Animal cannot be invoked without 'new'"

// ✅ Cara yang benar: gunakan keyword 'new' saat membuat instance
// Namun kita simulasikan kemungkinan error dengan try-catch

let cat; // Deklarasi variabel di luar blok try agar bisa diakses di luar

try {
  // Jika berhasil, buat instance dari class Animal
  cat = Animal("Cat"); // ✅ Pemanggilan constructor yang benar
} catch (e) {
  // Jika gagal, tangkap error-nya dan tampilkan pesan
  console.log("Error saat membuat instance:", e.message);
}

// Menampilkan hasil instance
console.log(cat); // Output: Animal { type: 'Cat' } jika berhasil

// Penjelasan tambahan:
// ---------------------
// - Jika constructor dipanggil TANPA 'new', maka JavaScript akan lempar error.
// - Jika kamu deklarasi variabel di dalam try (misalnya `const cat = ...`),
//   maka variabel tersebut hanya hidup di dalam blok try.
// - Maka kita deklarasi `let cat` di luar agar bisa dicek nilainya setelah try-catch.
