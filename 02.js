function isPrimeNumber(num) {
	let mesage;
	if (num > 1000) {
		mesage = "Данные не верны";
		return mesage;
	} else if (num === 0) {
		mesage = "Число равно нулю";
		return mesage;
	} else if (num === 1) {
		mesage = "Число равно единице";
		return mesage;
	} else if (num === 2) {
		mesage = "Число простое";
		return mesage;
	} else {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				mesage = " Число не является простым";
				return mesage;
			} else {
				mesage = "Число простое";
			}
		}
	}
	return mesage;
}
