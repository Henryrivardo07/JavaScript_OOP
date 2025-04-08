// 4_primitives_wrappers.js
// ========================

// Primitives seperti string dan number sebenarnya bukan object
// Tapi JavaScript akan secara otomatis membungkusnya menjadi object sementara (wrapper object)
// Agar bisa mengakses method bawaan seperti toUpperCase(), toFixed(), dll

let str = "hello";
console.log(str.toUpperCase()); // Output: 'HELLO' (method dari String.prototype)
console.log(str.__proto__ === String.prototype); // true

let num = 42;
console.log(num.toFixed(2)); // Output: '42.00' (method dari Number.prototype)
console.log(num.__proto__ === Number.prototype); // true

// Penjelasan:
// Saat kita melakukan str.toUpperCase(), JavaScript akan membuat object sementara dari konstruktor String
// yaitu new String("hello"), lalu memanggil method tersebut, lalu menghapus object tersebut dari memori
// Demikian juga untuk Number dan Boolean

// Tapi tidak semua primitives bisa diperlakukan seperti ini
// null dan undefined TIDAK punya wrapper object, dan akan langsung error jika coba akses property/method
try {
  console.log(undefined.toString()); // Akan error
} catch (e) {
  console.log("undefined tidak punya prototype atau wrapper object");
}

try {
  console.log(null.toString()); // Akan error
} catch (e) {
  console.log("null juga tidak punya prototype atau wrapper object");
}

// Penjelasan:
// undefined dan null adalah pengecualian — mereka adalah primitive murni tanpa kemampuan dibungkus ke object
// Karena itu, kita tidak bisa akses method seperti .toString() pada undefined dan null
