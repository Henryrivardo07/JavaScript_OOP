// 2_instanceof_function_constructor.js
// =====================================

// Membuat constructor function
function Rabbit() {}

// Membuat objek menggunakan constructor
let rabbit = new Rabbit();

// Mengecek apakah objek adalah instance dari constructor function
console.log(rabbit instanceof Rabbit); // Output: true
