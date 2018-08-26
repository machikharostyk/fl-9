function getClosestToZero(...arr) {

	let closestNumber;
	let positivearr = [];
	let negativearr = [];
	let minPositivearr;
	let minNegativearr;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positivearr.push(arr[i]);
		} else {
			negativearr.push(arr[i]);
		}
	}
	minPositivearr = Math.min(...positivearr);

	minNegativearr = Math.max(...negativearr);

	if (Math.abs(minNegativearr) < minPositivearr) {
		closestNumber = minNegativearr;

	} else {
		closestNumber = minPositivearr;
	}
	console.log(closestNumber);
}
