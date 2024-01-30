for (let i = 3; i < 100000; i++) {
	let isPrime = true;
	for (let k = 2; k < i; k++) {
		if (i % k == 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log(i);
	}
}
