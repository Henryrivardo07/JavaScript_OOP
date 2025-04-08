// 3_static_comparator.js
// ========================

// Membuat class Article
class Article {
  constructor(title, date) {
    this.title = title; // Menyimpan judul artikel ke dalam property instance
    this.date = date; // Menyimpan tanggal artikel ke dalam property instance
  }

  // Static method untuk membandingkan dua instance Article berdasarkan tanggal
  static compare(articleA, articleB) {
    return articleA.date - articleB.date; // Kembalikan hasil selisih tanggal (untuk sort ascending)
  }
}

/*🧠 Catatan penting di sini:

this.title dan this.date dipakai untuk menyimpan data ke dalam instance.

constructor dipanggil otomatis saat kita buat instance baru pakai new Article(...).

static compare(...) adalah method milik class, bukan milik tiap instance. Artinya kamu tidak bisa akses dari instance: article1.compare(...) ❌, tapi harus Article.compare(...) ✅
*/

// Membuat array artikel
let articles = [
  new Article("HTML", new Date(2019, 1, 1)), // Februari 1, 2019
  new Article("CSS", new Date(2019, 0, 1)), // Januari 1, 2019
  new Article("JavaScript", new Date(2019, 11, 1)), // Desember 1, 2019
];
/*
🧠 Di sini kamu membuat 3 objek baru dari class Article, dan semuanya punya title dan date masing-masing.
*/
// Mengurutkan artikel menggunakan static method Article.compare
articles.sort(Article.compare);

/*
🧠 Fungsi Array.prototype.sort() menerima sebuah callback comparator. Di sini kamu pakai Article.compare karena method itu dirancang untuk menerima dua objek Article dan mengembalikan selisih tanggalnya — cocok untuk sorting!
*/

// Menampilkan judul artikel pertama setelah diurutkan
console.log(articles[1].title); // Output: CSS

/*
this digunakan untuk mengakses nilai properti dalam setiap instance dari class. constructor dipakai untuk menginisialisasi nilai-nilai awal saat instance baru dibuat. Lalu, kita menggunakan static method compare() untuk membandingkan dua instance objek berdasarkan properti date, yang berguna saat melakukan sort terhadap kumpulan artikel tersebut.
*/
