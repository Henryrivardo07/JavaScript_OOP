// 5_instanceof_prototype_changed.js
// ==================================

// Membuat class Rabbit
class Rabbit {}

// Membuat objek dari class Rabbit
let rabbit = new Rabbit();

// Mengganti prototype class Rabbit
Rabbit.prototype = {};

// Mengecek kembali instance setelah prototype diubah
console.log(rabbit instanceof Rabbit); // Output: false
