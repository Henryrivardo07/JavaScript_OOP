// 4_class_expression.js
// =====================

// Class bisa dideklarasikan sebagai expression (tanpa nama atau anonymous)
// Sama seperti fungsi, class dapat didefinisikan di dalam ekspresi lain, diteruskan, dikembalikan, ditugaskan, dll.
const Rectangle = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height; // menghitung luas
  }
};

const rect = new Rectangle(5, 4);
console.log(rect.area()); // Output: 20
