// 5_extend_string_prototype.js
// ============================

// Kita bisa menambahkan method baru ke dalam prototype bawaan JavaScript
// Dalam kasus ini, kita menambahkan method show() ke dalam String.prototype
String.prototype.show = function () {
  console.log(this);
};

"Hello".show(); // Output: 'BOOM!'

Number.prototype.show = function () {
  console.log(this);
};
(42).show(); // Output: 42

// Penjelasan:
// Karena semua string primitive akan dibungkus oleh object dari konstruktor String,
// maka mereka akan mewarisi method dari String.prototype
// Sehingga ketika kita panggil 'BOOM!'.show(), method show() yang kita tambahkan akan dijalankan

// Tapi HARUS HATI-HATI
// Mengubah native prototype bisa menyebabkan konflik antar library / bagian kode lain
// Misalnya jika dua developer berbeda menambahkan method dengan nama yang sama, maka bisa tabrakan

// Contoh buruk:
// String.prototype.toEmoji = function() { return "😎"; };

// Best Practice:
// Jangan pernah mengubah native prototype di production code
// Kalau butuh fungsi tambahan, lebih baik buat utility function biasa atau class sendiri

// Penjelasan:
// Prototype bawaan seperti String.prototype, Array.prototype, Object.prototype adalah bagian dari global runtime
// Jika satu bagian kode mengubahnya, maka semua instance akan terpengaruh
// Ini akan menyulitkan debugging dan bisa menimbulkan bug yang aneh di aplikasi besar
