// example to show what happens with async code, timeout
// 0 will run after all other code executes

setTimeout(() => {
	console.log("første");
}, 0);
setTimeout(() => {
	console.log("andre");
}, 500);
setTimeout(() => {
	console.log("tredje");
}, 700);

console.log("fjerde");
