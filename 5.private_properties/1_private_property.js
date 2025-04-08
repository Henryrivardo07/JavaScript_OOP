// 1_private_property.js
// ==========================

// Membuat class CoffeeMachine dengan properti dan method private
class CoffeeMachine {
  // Properti private hanya dapat diakses dari dalam class
  #waterLimit = 200;

  // Method private yang hanya bisa dipanggil dari dalam class
  #fixWaterAmount(value) {
    if (value < 0) return 0; // Nilai minimum adalah 0
    if (value > this.#waterLimit) return this.#waterLimit; // Tidak boleh lebih dari #waterLimit
    return value; // Jika dalam batas, kembalikan nilai aslinya
  }

  // Public method untuk mengatur jumlah air
  setWaterAmount(value) {
    // Mengatur ulang nilai #waterLimit berdasarkan hasil validasi dari method private
    this.#waterLimit = this.#fixWaterAmount(value);
  }
  getWaterLimit() {
    return this.#waterLimit; // Mengembalikan nilai #waterLimit
  }
}

let coffeeMachine = new CoffeeMachine();

// coffeeMachine.#fixWaterAmount(123); // ❌ Error: Private field '#fixWaterAmount' must be declared in an enclosing class
// coffeeMachine.#waterLimit = 1000;   // ❌ Error: Cannot access private field

/*
Penjelasan bahwa # digunakan untuk membuat properti/method private.
Komentar detail untuk setiap baris yang penting, termasuk validasi nilai air.
*/

// Membuat instance CoffeeMachine
// let coffeeMachine = new CoffeeMachine();

// Mengatur jumlah air ke 300 (melebihi batas awal 200)
coffeeMachine.setWaterAmount(300);

// Melihat hasil water limit setelah validasi
console.log("Water limit after setting 300:", coffeeMachine.getWaterLimit()); // Output: 200

// Mengatur air ke 150
coffeeMachine.setWaterAmount(150);

// Cek kembali
console.log("Water limit after setting 150:", coffeeMachine.getWaterLimit()); // Output: 150

/*
Yes! 🔥 Kamu ngerti banget! 💯

Karena properti/method yang dideklarasikan dengan # itu private, maka kalau kamu mau mengaksesnya dari luar class, kamu harus lewat jembatan: yaitu getter dan setter (atau method publik lain).

🔁 Ibaratnya:
Rumah kamu ada brankas (#uangTabungan) di kamar. Cuma kamu yang punya kunci (akses langsung ke #uangTabungan).
Kalau orang lain mau tau isinya, kamu harus kasih tahu lewat getSaldo() (getter).
Kalau mereka mau nambahin uang, kamu kasih akses lewat setSaldo() (setter).
*/
