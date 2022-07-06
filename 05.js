const getDegree = (x, n) => {
	let result = x;
	for (let i = 0; i < n - 1; i++) {
		result *= x;
	}
	if (n === 0) {
		result = 1;
	}
	console.log(result);
}