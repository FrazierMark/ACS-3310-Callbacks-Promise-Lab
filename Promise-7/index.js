fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// A promise is used for async actions. The earlier examples
// used a timer to simulate an async action. 

// The code above uses fetch and a promise or two to handle a 
// request to a web API. 

// Important! Notice that fetch() returns a Promise, which resolves 
// to a response object. The response object resolves to a Promise 
// response.json() is invoked. 

// There are two steps here! Here it is in abbreviated form: 

// fetch().then().then()

// We often write this across multiple lines for clarity:

// fetch()
//   .then()
//   .then()

// Here it is with callbacks:

// fetch('path')
//   .then(res => res.json())
//   .then(data => console.log(data))

// Challenges

// Test the code above. The API should return an object something like: 
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

const test = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Simulate an error by changin the URL above to: 
// https://jsonplaceholder.typicode.com/

const test2 = fetch('https://jsonplaceholder.typicode.com/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// This should cause the code in the catch() block to run. Test this! 