// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("--- Oops ---");
    reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
      //When the promise is rejected, the catch block is executed and
      //the console.log("Promise rejected! 😞") is printed to the console.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
      // It depends on the order in which the resolve and reject are called.
      // If the reject is called first, the catch block is executed and the
      // console.log("Promise rejected! 😞") is printed to the console.


// **3)** Does the order matter you call resolve and reject matter? Test this. 
      // Yes, the order in which resolve and reject are called matters.
      // If the resolve is called first, the then block is executed and the
      // console.log("Promise resolved! 😀") is printed to the console.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
      // If the resolve or reject is called more than once, the first one is executed
      // and the second one is ignored.
