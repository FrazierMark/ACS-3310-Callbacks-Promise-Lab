# Handling errors with Async/Await

Async and Await provide an easy syntax for working with Promises. Error handling is missing from the last example! 

To handle errors you'll use a `try` and `catch`. Think of `try` like an if statement that skips to the catch block if an error is thrown.

In this example the code we want to run is wrapped in a `try` and `catch` block. If an error is thrown in the `try` block the code would skip to `catch`. Since there is no error `catch` never happens here. 

```JS
try {
  // No errors were thrown
  console.log('Hello World') // 'Hello World'
} catch(err) {
  // Catch block only happens if an error is thrown
  console.log(err) 
}
```

This time I created an error and `throw` that error. This causes execution to jump to the `catch` block. 

```js
try {
  // Generate an error
  const error = new Error('Oopsy!')
  // throw error // Throw an error
  console.log('Hello World') // Never happens because of error
} catch(err) {
  // Catch block happens because the error was thrown! 
  console.log(err) 
}
```

Use a `try` and `catch` block when you have code that might generate an error. It allows your program to gracefully handle the error and continue without shutting down! 

Read about `try` and `catch` here: https://javascript.info/try-catch

Use a `try` and `catch` with `fetch` like this:

```JS
// Note the use of async and await!
async function fetchTodos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await res.json()
    return json
  } catch(err) {
    console.log(err)
  }
}
```

If an error occurs when fetching we catch it! 

Read about `async` and `await`: https://javascript.info/async-await