const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.forEach((nr, i, a) => {
	console.log(nr, "index: ", i, "arr:", a);
});
doubleArr = arr.map((nr) => {
	return nr * 2;
});
console.log(doubleArr);

const largeArr = arr.filter((nr) => {
	if (nr > 5) {
		return true;
	} else {
		return false;
	}
});
console.log(largeArr);

const reversed = arr.sort((a, b) => {
	if (b < a) {
		return -1;
	}
	if (b > a) {
		return 1;
	}
});
console.log(reversed);
