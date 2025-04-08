// 2_static_equivalent.js
// ========================

// Membuat class kosong User
class User {}

// Menetapkan method sebagai properti langsung dari class
User.staticMethod = function () {
  console.log(this === User); // Sama seperti static method, 'this' mengacu pada class
};

// Memanggil method yang ditetapkan langsung pada class
User.staticMethod(); // Output: true
// Metode static biasanya digunakan untuk mengimplementasikan fungsi yang terkait dengan kelas secara keseluruhan, bukan pada objek tertentu dari kelas tersebut.

// Kalau kamu ngajarin murid, lebih baik anjurkan mereka pakai static keyword supaya struktur class-nya bersih dan mudah dipahami.
