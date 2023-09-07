/* function modulo(x, y) {
	let res = x / y;
	let nr = parseInt(res);
	return x - nr * y;
}
console.log(modulo(9, 3));
 */

let arr = ["item-1", "item-2", "item-3"];
arr.push("item-4");
console.log(arr.pop());
console.log(arr.shift());
arr.unshift("test");
console.log(arr);

/*
lag et objekt som en stack
har ett array, en metode for å dytte inn, 
og en metode for å ta ut

lag et objekt som en kø
har ett array, en metode for å dytte inn, 
og en metode for å ta ut
*/
let stack = {
	arr: [4, 1, 2],
	inn: function (input) {
		this.arr.push(input);
	},
	ut: function () {
		this.arr.pop();
	},
};
let queue = {
	arr: [4, 1, 2],
	inn: function (input) {
		this.arr.unshift(input);
	},
	ut: function () {
		this.arr.pop();
	},
};
