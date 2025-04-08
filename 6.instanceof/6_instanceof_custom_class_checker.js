// 6_instanceof_custom_class_checker.js
// =====================================

// Membuat class Animal
class Animal {}

// Membuat objek hewan
let animal = new Animal();

// Alternatif pengecekan dengan isPrototypeOf
console.log(Animal.prototype.isPrototypeOf(animal)); // Output: true
