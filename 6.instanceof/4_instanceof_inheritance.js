// 4_instanceof_inheritance.js
// ============================

// Membuat class Animal
class Animal {}

// Membuat class Rabbit yang mewarisi dari Animal
class Rabbit extends Animal {}

// Membuat instance Rabbit
let rabbit = new Rabbit();

// Mengecek apakah rabbit merupakan instance dari Animal
console.log(rabbit instanceof Animal); // Output: true
