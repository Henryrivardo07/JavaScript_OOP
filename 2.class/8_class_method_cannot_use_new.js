// 8_class_method_cannot_use_new.js
// ==================================

class Message {
  show() {
    console.log("Hello World");
  }
}

const msg = new Message();
msg.show(); // Output: Hello World

try {
  // Method class seperti show() bukan constructor, jadi tidak bisa dipanggil dengan 'new'
  const fail = new msg.show(); // Error: msg.show is not a constructor
} catch (e) {
  console.log("Method class tidak bisa dipanggil dengan 'new'");
}
