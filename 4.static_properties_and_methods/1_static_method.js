// 1_static_method.js
// ======================
// Metode static adalah metode yang terkait dengan kelas itu sendiri, bukan dengan instance individual dari kelas tersebut. Untuk mendeklarasikan metode static, kita menggunakan keyword static di depan metode tersebut:

// Membuat class User
class User {
  // Menetapkan static method ke class, bukan instance
  static staticMethod() {
    console.log(this === User); // 'this' di dalam static method mengacu pada class User itu sendiri
  }
}

// Memanggil static method langsung dari class, bukan instance
User.staticMethod(); // Output: true

// Contoh di atas menunjukkan bahwa this dalam metode staticMethod mengacu pada kelas User itu sendiri, bukan pada instance dari kelas tersebut. Jadi, metode static ini dipanggil menggunakan nama kelas, bukan objek instance.
