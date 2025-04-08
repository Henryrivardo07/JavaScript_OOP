// 1_class_basic_syntax.js
// ==========================

// Class dengan constructor dan method biasa
// Constructor akan otomatis dipanggil saat instance dibuat dengan 'new'
// Method greet() adalah method biasa yang otomatis masuk ke dalam prototype
class Person {
  constructor(name) {
    this.name = name; // property 'name' akan tersedia di setiap instance
  }

  greet() {
    // greet adalah method biasa dan akan berada di prototype
    console.log(`Hello, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.greet(); // Output: Hello, my name is John

// Method greet berada di prototype, bukan di dalam instance itu sendiri
console.log(john.greet === Person.prototype.greet); // true

//FYI
// Menulis ulang class User dalam bentuk constructor function

// 1. Buat fungsi konstruktor
function User(name) {
  this.name = name;
}

// 2. Tambahkan metode ke prototype
User.prototype.sayHi = function () {
  console.log(this.name);
};

// Penggunaan:
let user = new User("John");
user.sayHi(); // John
