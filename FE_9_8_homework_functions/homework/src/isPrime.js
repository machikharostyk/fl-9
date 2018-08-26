function isPrime(number) {
	let flags = 0;
	let halfNumber = 2;
	if (number === 1) {
		return false;
	}
	for (let i = 2; i <= halfNumber; i++) {
		if (number % i === 0) {
			flags++;
		}
	}
	if (flags === 0) {
		return true;
	} else {
		return false;
	}
}