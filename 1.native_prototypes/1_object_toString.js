// 1_object_toString.js
// ======================

// Membuat objek kosong
let obj = {};
// obj = {} sebenarnya sama seperti obj = new Object().

// Ketika kita console.log(obj), hasilnya adalah [object Object]
// Ini terjadi karena obj secara default mewarisi dari Object.prototype
// dan method toString() berasal dari Object.prototype
console.log(obj); // Output: [object Object]
console.log(obj.toString()); // Memanggil Object.prototype.toString()

// Validasi bahwa objek 'obj' memiliki prototype Object.prototype
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.toString === Object.prototype.toString); // true
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false, karena dari prototype

// Prototype tertinggi dari semua object adalah null
console.log(Object.prototype.__proto__); // null

// Penjelasan:
// {} adalah shorthand dari new Object(), sehingga ia otomatis memiliki [[Prototype]]
// JS akan mencari property/method di dalam objek itu sendiri.
// Kalau tidak ketemu, akan dicari ke __proto__, yaitu Object.prototype
// Di dalam Object.prototype terdapat method-method built-in seperti toString(), hasOwnProperty(), valueOf(), dll

/*
🗣️

“Kita mulai dengan hal yang paling mendasar dalam prototype JavaScript, yaitu Object.prototype.
Coba perhatikan kode ini: kita bikin objek kosong let obj = {} dan kita console.log(obj).
Kok bisa muncul [object Object]? Padahal kita nggak bikin properti atau method apapun, kan?”

✍️ Jelaskan:

Semua objek di JS secara default dibuat dengan [[Prototype]] mengarah ke Object.prototype.

obj = {} sebenarnya sama seperti obj = new Object().

Di dalam Object.prototype, ada method seperti toString, hasOwnProperty, dan lainnya.

🔍 Lanjut:

“Sekarang kita cek prototype chain-nya. Kita lihat bahwa obj.__proto__ === Object.prototype.
Jadi pas kita panggil obj.toString(), JS akan nyari method ini di prototype chain dan ketemu di Object.prototype.”

Tambahkan:

Semua objek JavaScript akan berujung pada Object.prototype.

Object.prototype.__proto__ bernilai null, artinya itu adalah ujung dari rantai.

*/
