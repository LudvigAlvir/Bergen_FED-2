const arr = [1, 2, 3, "hei", "på", "deg", "aloha", "testh"];

const newArr = arr
	.filter((item) => {
		if (typeof item == "number") {
			return false;
		}
		if (item.includes(searchValue)) {
			return true;
		}
	})
	.sort();

console.log(newArr);
