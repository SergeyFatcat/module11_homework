function getSum(a) {
	return function (b) {
		let sum = a + b;
		console.log(sum);
	}
}