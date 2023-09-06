console.log("dette er en log");
console.warn("dette er en warning");
console.error("dette er en error");

const arr = [
	{
		name: "name1",
		age: 1,
	},
	{
		name: "name2",
		age: 2,
	},
	{
		name: "name3",
		age: 3,
	},
];

console.table(arr);
console.log(arr);

function fizzBuzz(nr) {
	for (let i = 1; i < nr; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

function arrFizzBuzz(nr) {
	const arr = [];
	for (let i = 1; i < nr; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push("FizzBuzz");
		} else if (i % 3 == 0) {
			arr.push("Fizz");
		} else if (i % 5 == 0) {
			arr.push("Buzz");
		} else {
			arr.push(i);
		}
	}
}
function arrFizzBuzzBetter(nr) {
	const arr = [];
	let temp = "";
	let fizz = 0;
	let buzz = 0;
	for (let i = 1; i < nr; i++) {
		fizz++;
		buzz++;
		if (fizz === 3) {
			temp += "Fizz";
			fizz = 0;
		}
		if (buzz === 5) {
			temp += "Buzz";
			buzz = 0;
		}
		if (temp.length === 0) {
			temp += i;
		}
		arr.push(temp);
	}
}
console.time("time");
fizzBuzz(1000);
console.timeEnd("time");
console.time("time2");
arrFizzBuzz(1000);
console.timeEnd("time2");
console.time("time3");
arrFizzBuzzBetter(1000);
console.timeEnd("time3");
