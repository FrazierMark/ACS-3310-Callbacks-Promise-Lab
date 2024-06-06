// Promise.all()

// 
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fourth promise resolved");
  }, 10);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Fifth promise rejected");
  }, 10);
});

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(results => {
  console.log(results);
}).catch(err => {
  console.log(err);
});


// Challenges:

// Test the code above. What happened? Explain below: 
// It looks like when calling Promise.all() it waits for all the promises to resolve 
// before executing the console.log(results). The results are an array of the resolved promises.


// Add another Promise to the Array of promises (line 22)
// make your promise resolve in 10ms. Test your work. 
// How long did it take for all of the promises to resolve?
// It still took 3000ms for all the promises to resolve. 
// Promise.all() waits for all the promises to resolve before executing the console.log(results).


// Make one of the Promises fail by calling reject. What happens? 
// You get an error if you do not have a .catch() block.
// The catch block is executed and the console.log(err) is printed to the console.
// Promise.all() does not wait for all promises to resolve if one of them is rejected.

// Add a catch() block to the end of `Promise.all().then()`. 
// Handle your error here.

// What happens when one Promise fails?
// The catch block is executed and the console.log(err) is printed to the console.
// Promise.all() does not wait for all promises to resolve if one of them is rejected.