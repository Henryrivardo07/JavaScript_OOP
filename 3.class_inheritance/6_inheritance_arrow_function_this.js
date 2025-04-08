// Membuat class Animal sebagai parent
class Animal {
  constructor() {
    // Arrow function disimpan dalam properti `timer`
    // Arrow function TIDAK membuat konteks `this` sendiri,
    // sehingga `this` akan tetap merujuk ke instance yang membuatnya (Rabbit)
    this.timer = () => {
      console.log("From arrow function:", this);
    };
  }
}

// Class Rabbit mewarisi dari Animal
class Rabbit extends Animal {
  constructor() {
    super(); // Wajib memanggil constructor parent (Animal)
    // Tidak perlu buat ulang timer di sini karena sudah diwarisi
  }
}

// Membuat instance Rabbit
const arrowRabbit = new Rabbit();

// Memanggil method timer()
// Karena timer adalah arrow function, dan dibuat di dalam constructor Animal,
// maka `this` tetap merujuk ke instance Rabbit saat ini
arrowRabbit.timer();
// Output: From arrow function: Rabbit { timer: [Function (anonymous)] }

/*
🧠 Penjelasan Tambahan:
- Arrow function TIDAK memiliki `this` sendiri.
- `this` di dalam arrow function akan mengikuti `this` dari lexical scope saat dibuat (yaitu instance Rabbit, saat `super()` dijalankan).
- Ini berbeda dari function biasa (function expression / method), yang bisa mengubah `this` tergantung siapa yang memanggil.
- Karena arrow function "mengunci" `this` pada saat deklarasi, kita bisa pakai ini untuk memastikan `this` selalu konsisten.

🔥 Tips:
Kalau kamu pakai function biasa dan `this` dipakai di dalam callback (misal di setTimeout), kamu bisa kehilangan konteks `this`. Arrow function menyelamatkan dari masalah ini.
*/
