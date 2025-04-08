// 4_static_property.js
// =======================

// Membuat class Article
class Article {
  // Menetapkan properti static langsung ke class
  static publisher = "John Doe";
  // ⬆️ Ini adalah properti static (bukan method).
  // Properti static ini milik class Article itu sendiri,
  // dan tidak bisa diakses dari instance (objek yang dibuat dari class ini).
}

// Mengakses properti static
console.log(Article.publisher); // Output: John Doe
// ✅ Karena publisher adalah properti static, kita mengaksesnya langsung melalui nama class (Article),
// bukan melalui instance, seperti:
//    const a = new Article();
//    console.log(a.publisher); // ❌ undefined

/*
🧠 Ringkasan Pemahaman:
static publisher = "John Doe" membuat properti yang menempel langsung pada class Article, bukan pada objek hasil new Article(...).

Untuk mengaksesnya, kamu pakai Article.publisher, bukan lewat instance.

Properti static ini sering digunakan untuk menyimpan informasi yang bersifat umum dan tidak berubah antar instance, misalnya: publisher, default config, versi library, atau helper class-level.
*/
