// 2_array_prototype_chain.js
// ===========================

// Membuat array literal
let arr = [1, 2, 3];

// Sama seperti membuat new Array(1, 2, 3), sehingga prototype-nya adalah Array.prototype
console.log(arr.__proto__ === Array.prototype); // true

// Array.prototype sendiri mewarisi dari Object.prototype
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// Dan prototype chain akan berakhir di null
console.log(arr.__proto__.__proto__.__proto__); // null
console.log(typeof arr.map); // function
console.log(typeof arr.hasOwnProperty); // function
console.log(arr.__proto__.hasOwnProperty("map")); // true
console.log(arr.__proto__.hasOwnProperty("toString")); //true
console.log(arr.__proto__.__proto__.hasOwnProperty("toString")); // true
// Penjelasan:
// Ini membuktikan bahwa semua array tetap merupakan turunan dari Object
// Maka array juga bisa menggunakan method-method yang tersedia di Object.prototype seperti toString(), hasOwnProperty(), dll

/*
2. 2_array_prototype_chain.js – Rantai Prototipe Array
🗣️

“Sekarang kita coba dengan array. Kita buat let arr = [1, 2, 3].
Kalian tahu nggak, ini sebenarnya sama aja dengan new Array(1, 2, 3).”

✍️ Jelaskan:

arr.__proto__ === Array.prototype

Kemudian Array.prototype.__proto__ === Object.prototype

Jadi semua array juga ikut mewarisi method-method dari Object

🔍 Lanjut:

“Makanya walaupun array punya method kayak map atau filter, dia juga bisa pakai method dari Object, seperti hasOwnProperty.”

*/
