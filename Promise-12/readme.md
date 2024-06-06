# Async/Await

The `async` and `await` keywords work with `Promises`. In short an `async` function always returns a Promise. Any Promise with the keyword `await` pauses execution until the `Promise` resolves. 

The `await` key word can only be used inside of an async function!

Here is a code block from a previous example:

```js
// Note the use of .then()
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

```

You can rewrite the code above to use async and await: 

```JS
// Note the use of async and await!

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await res.json()
  return json
}

const p = fetchTodos() 
```

The `await` keyword forces the browser to stop at that line until the Promise settles. 

Read about `async` and `await`: https://javascript.info/async-await