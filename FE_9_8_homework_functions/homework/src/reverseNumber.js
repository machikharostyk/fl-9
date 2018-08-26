function reverseNumber(number) {
	let strNumber = String(number);
	let reverseNumber = strNumber.split('').reverse().join('');
	reverseNumber = parseInt(reverseNumber) * Math.sign(number);
	return reverseNumber;
}