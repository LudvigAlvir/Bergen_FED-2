// .then() fetch
function fetchThen() {
	fetch("https://crud-examples.onrender.com/")
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
		})
		.catch(e);
}
// async await fetch
async function fetchWait() {
	const response = await fetch("https://crud-examples.onrender.com/1");
	console.log(response);
	const data = await response.json();
	console.log(data);
	renderItems(data);
}
// example render data
function renderItems(data) {
	data.forEach((item) => {
		document.querySelector("body").innerHTML += `
        <p>${item.id}</p>
        <p>${item.name}</p>
        <p>${item.content}</p>
        `;
	});
}

fetchWait();
console.log("hei");
// psuedo code the same way as using .then()
function complicatedMathThenWay(x) {
	console.log(divideByThree(double(x)));
}
//psuedo code the same way as using async await
function complicatedMathAsyncWay(x) {
	let res = double(x);
	res = divideByThree(res);
	console.log(res);
}

function double(x) {
	return x * 2;
}
function divideByThree(x) {
	return x / 3;
}

/* complicatedMath(3); */

const arr = [1, 2, 3, 2, 2, 1, 2, 4, 5];

//callback example
const newarr = arr.filter((item) => {
	if (item < 4) {
		return true;
	} else {
		return false;
	}
});
//callback example
function filter(array, callback) {
	let out = [];
	for (const item of array) {
		if (callback(item)) {
			out.push(item);
		}
	}
	return out;
}
//callback example
const customArr = filter(arr, (item) => {
	if (item < 4) {
		return true;
	} else {
		return false;
	}
});

console.log(newarr);
/* for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

function forEachExample(items, callback) {
	for (const item of items) {
		callback(item);
	}
}
 */
//callback example
document.querySelector("button").addEventListener("click", () => {
	getData(url, (data) => {
		document.querySelector("body").innerHTML = data;
	});
});
//callback example
async function getData(url, callback) {
	const res = await fetch(url);
	const data = await res.json();
	callback(data);
}
