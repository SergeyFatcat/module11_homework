function showNums(a, b) {
	let i = a;
	let t = setInterval(function () {
		console.log(i);

		if (i == b) {
			clearInterval(t);
		}

		i++;


	}, 1000)

}