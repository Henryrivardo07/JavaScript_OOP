// 5_class_named_expression.js
// ============================

// Kita mendefinisikan class expression dan menyimpannya ke dalam variabel `Circle`
// Perhatikan bahwa class ini punya nama lokal yaitu `CircleClass`
const shape = class lingkaran {};

console.log(shape.name);

/*
.name bukan milik instance, tapi property bawaan dari class/function itu sendiri. Dan bisa dipakai untuk tahu nama class, terutama untuk class expression.
*/

const Circle = class CircleClass {
  // Constructor dipanggil saat instance baru dibuat dengan `new Circle(...)`
  constructor(radius) {
    this.radius = radius; // menyimpan nilai radius ke dalam property instance
  }

  // Method instance untuk mengembalikan nama class lokal
  getName() {
    // Mengakses nama lokal dari class (CircleClass)
    // `CircleClass` hanya bisa diakses dari dalam body class ini saja
    return CircleClass.name;
  }
};

// Membuat instance baru dari Circle
const c = new Circle(10);

// Memanggil method getName() yang mengembalikan nama class lokal
console.log(c.getName()); // Output: "CircleClass"
// Memanggil property radius dari instance c
console.log(c.radius); // Output: 10

// console.log(CircleClass);
// ❌ Error: ReferenceError: CircleClass is not defined
// Karena nama lokal `CircleClass` hanya tersedia di dalam class scope
// Di luar scope class, nama tersebut tidak dikenal sama sekali

/*
🧠 Penjelasan Tambahan:
- Ini disebut "Named Class Expression".
- Gunanya: memudahkan debugging atau referensi internal dalam class (misalnya untuk rekursi atau logging).
- Tapi nama class tersebut **tidak bocor ke luar**, jadi aman untuk menjaga enkapsulasi nama.

Contoh lain:

const Something = class InternalName {
  static whoAmI() {
    return InternalName.name; // ✅ bisa diakses di sini
  }
};

console.log(Something.whoAmI()); // "InternalName"
console.log(InternalName); // ❌ Error
*/
