async function getClass() {
	const response = await fetch("./data/data.json");
	const data = await response.json();
	return data;
}

async function sortByName() {
	const students = await getClass();
	students.sort((a, b) => {
		if (a.name.toUpperCase() > b.name.toUpperCase()) {
			return 1;
		}
		if (a.name.toUpperCase() < b.name.toUpperCase()) {
			return -1;
		}
	});
	console.table(students);
}

/* async function sortByRating() {
	const students = await getClass();
	students.sort((a, b) => {
		if (a.rating > b.rating) {
			return 1;
		}
		if (a.rating < b.rating) {
			return -1;
		}
	});
	console.table(students);
} */

async function sortByRating() {
	const students = await getClass();
	students.sort((a, b) => b.rating - a.rating);
	console.table(students);
}

async function sortByBirth() {
	const students = await getClass();
	students.sort((a, b) => {
		return new Date(a.birth) - new Date(b.birth);
	});
	console.table(students);
}

sortByBirth();
let x = 2;

if (x == 2) console.log("ja");
else console.log("nei");

function sort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowestValue = i;
		for (let k = i + 1; k < arr.length; k++) {
			if (arr[k] < arr[lowestValue]) {
				lowestValue = k;
			}
		}
		let temp = arr[i];
		arr[i] = arr[lowestValue];
		arr[lowestValue] = temp;
	}
	return arr;
}

/* arr.sort((a, b) => a - b);
console.log(arr); */
const arr = [5, 2, 12, 15, 16, 2, 3, 5, 6, 21, 54, 12, 1, 5, 5, 6];

//endre til å returnere array med alle indexer der tallet finnes
function findIndexOf(arr, number) {
	for (let index in arr) {
		if (arr[index] === number) {
			return index;
		}
	}
	return false;
}
function findAllIndexesOf(arr, number) {
	const out = [];
	for (let index in arr) {
		if (arr[index] === number) {
			out.push(index);
		}
	}
	return out;
}
console.log(findAllIndexesOf(arr, 5)); // out= [0, 7, 13, 14]
