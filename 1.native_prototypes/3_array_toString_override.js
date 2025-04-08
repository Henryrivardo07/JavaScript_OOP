// 3_array_toString_override.js
// ============================

let arr2 = [1, 2, 3];

// Array memiliki versi toString() sendiri dari Array.prototype
// yang menggantikan versi toString() dari Object.prototype
console.log(arr2.toString()); // Output: '1,2,3' dari Array.prototype.toString

// Sekarang kita bandingkan dengan object biasa
let plainObj = { key: "value" };
console.log(plainObj.toString()); // Output: '[object Object]' dari Object.prototype

// Penjelasan:
// Array.prototype memiliki method toString() yang override method bawaan dari Object.prototype
// Method toString pada array akan menggabungkan semua elemen array menjadi satu string yang dipisahkan oleh koma
// Sedangkan object biasa, akan tetap menggunakan method dari Object.prototype

/*
🗣️

“Sekarang kita fokus ke method toString() nih.
Di object biasa, toString() akan kasih [object Object]. Tapi di array? Coba kita lihat.”

✍️ Jelaskan:

Array override toString() dari Object.prototype dengan versinya sendiri yang menggabungkan elemen array jadi string dipisah koma.

Method yang paling dekat di prototype chain yang akan dipakai.

🔍 Lanjut:

“Jadi JS akan nyari method toString() dari array, ketemu di Array.prototype, dan pakai yang itu.
Kalau dia nggak ketemu, barulah dia naik ke Object.prototype.”
*/
