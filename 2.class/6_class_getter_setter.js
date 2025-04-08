// 6_class_getter_setter.js
// =========================

// Kita membuat class Temperature untuk menyimpan suhu dalam Celsius,
// tapi juga menyediakan akses dalam Fahrenheit menggunakan getter dan setter.
class Temperature {
  constructor(celsius) {
    // Menyimpan nilai suhu dalam bentuk Celsius
    // Gunakan konvensi _ (underscore) untuk menunjukkan properti "private"
    this._celsius = celsius;
  }

  // Getter digunakan ketika properti diakses seperti `obj.prop`
  // Dalam kasus ini: `temp.fahrenheit` akan menjalankan method ini
  get fahrenheit() {
    // Mengubah suhu dari Celsius ke Fahrenheit
    return this._celsius * 1.8 + 32;
  }

  // Setter digunakan ketika properti di-*assign*: `obj.prop = value`
  // Dalam kasus ini: `temp.fahrenheit = 86` akan menjalankan method ini
  set fahrenheit(f) {
    // Mengubah suhu dari Fahrenheit ke Celsius dan simpan ke _celsius
    this._celsius = (f - 32) / 1.8;
  }
}

// Membuat instance Temperature dengan nilai awal 25°C
const temp = new Temperature(25);

// Mengakses suhu dalam Fahrenheit melalui getter
// Ini memanggil method `get fahrenheit()`
console.log(temp.fahrenheit); // Output: 77

// Mengatur suhu dengan Fahrenheit menggunakan setter
// Ini memanggil method `set fahrenheit(f)`
temp.fahrenheit = 86;

// Karena 86°F = 30°C, maka nilai internal _celsius berubah menjadi 30
// Kita cetak objek untuk melihat hasilnya
console.log(temp); // Output: Temperature { _celsius: 30 }

/*
🧠 Penjelasan Tambahan:
- Getter dan Setter berguna jika kamu ingin *abstraksi* terhadap cara data disimpan dan ditampilkan.
- Nama `fahrenheit` kelihatan seperti properti biasa, padahal di balik layar ada fungsi yang dijalankan.
- Sangat berguna untuk validasi, perhitungan otomatis, atau konversi unit seperti ini.
*/
