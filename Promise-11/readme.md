# Async/Await

The `async` and `await` keywords work with `Promises`. In short an `async` function always returns a Promise. Any Promise with the keyword `await` pauses execution until the `Promise` resolves. 

Here is an example: 

```JS
// Async functions begon with the word async
async function handleData() {
  return 42
}

const hello = async () => {
  return 'Hello World'
}

// An async function always returns a promise!
const data = handleData()
const greeting = hello()

console.log(data) // Promise { 42 }
console.log(greeting) // Promise { 'Hello World' }

// To resolve the value you need to resolve the Promises that are returned! 
```


Read about `async` and `await`: https://javascript.info/async-await