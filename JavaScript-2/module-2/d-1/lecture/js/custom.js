function foreach(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

const arr = [1, 2, 3, 4, 5, 6];

foreach(arr, (item) => {
	console.log(item);
});

function map(arr, func) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}
const oddNumber = map(arr, (number) => {
	if (number % 2) {
		// 0 = false, 1 = true
		return true;
	}
	return false;
});
console.log(oddNumber);

const findArr = ["a", "b", "c", "d", "a", "e", "f", "a"];
//gjøre om til  = ["a", "b", "c", "d", "e", "f"]

function find(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			/* console.log("FOUND! :)"); // hvis det finnes */
			return true;
		}
	}
	/* console.log("not found:("); //hvis det ikke finnes */
	return false;
}

if (find(findArr, "d")) {
	console.log("found");
} else {
	console.log("not found");
}

/* console.log(find(findArr, "d")); */

let x = 10;
if (x == "10"); // true
if (x === "10"); // false
if (x != 10); // false
if (x !== 10); // false
if (x < 10); // false
if (x > 10); // false
if (x >= 10); // true

function isEven(nr) {
	if (nr % 2 === 0) {
		return true;
	}
	return false;
}
let counter = 0;
/* let result = counterTimes(); */

function sum(nr1, nr2) {
	return nr1 + nr2;
}
