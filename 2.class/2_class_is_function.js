// 2_class_is_function.js
// =======================

// Class di JavaScript sebenarnya adalah fungsi constructor
class Car {
  drive() {
    console.log("Vroom!");
  }
}

// Kita bisa lihat bahwa class sebenarnya adalah function
console.log(typeof Car); // function
console.log(Car instanceof Function); // true
