const tortise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Tortise Wins!');
	}, 1000);
});

const hare = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Hare looses!');
	}, 2000);
});

const zebra = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Zebra wins!');
	}, 1500);
});

const cheetah = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Cheetah wins!');
	}, 500);
});

Promise.race([tortise, hare, zebra, cheetah])
	.then((result) => {
		console.log(result);
	})
	.catch((err) => {
		console.log(err);
	});

// Challenge!

// Test the code above. Explain what happens below:
// The tortise wins because it resolves first.

// Add two more racers. Give one a time of 500 and the other a
// time of 1500. Who wins now?
// The cheetah wins because it resolves first.

// Make Promise of the Hare reject. What happens? Who wins?
// The cheetah still wins because it resolves first.

// Make the fastest racer reject? What happens?
// We will get an error if we do not have a .catch() block.

// Looks like the .race() method returns a promise from a list
// of promises, when the faster promise settles
