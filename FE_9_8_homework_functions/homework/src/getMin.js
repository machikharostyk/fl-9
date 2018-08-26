function getMin(...arr) {
	let minNumber = arr[0];
	for(let i=1; i<arr.length; i++){
		if(arr[i] < minNumber){
			minNumber = arr[i];
		} 
	}
	return minNumber;
}

