// 7_class_field.js
// =================

// ES2022 mendukung properti yang didefinisikan langsung di dalam class
class Counter {
  count = 0; // langsung membuat properti, tidak perlu di constructor

  increment() {
    this.count++; // menaikkan nilai count
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.count); // Output: 1
