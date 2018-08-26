//				TASK 1

let findType = variable => typeof variable;
//				TASK 2

let forEach = (arr, func) => {
	for (let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
};
//				TASK 3

let map = (arr, func) => {
	let newArr = [];
	forEach(arr, elem => newArr.push(func(elem)));
	console.log(newArr);
};
//				TASK 4


let filer = (arr, func) => {
	let FilteredArr = [];
	forEach(arr, elem => {
		if (func(elem) === true) {
			FilteredArr.push(elem);
		}
	});
	return FilteredArr;
}
//				TASK 5

let getAdultAppleLovers = (data) => {
	filer(data, elem => {
		if (elem.age > 18 && elem.favoriteFruit === 'apple') {
			return elem.name;
		}
	})
}
//				TASK 6

let keys = (obj) => {
	let keysArray = [];
	for (let i in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, i)) {
			keysArray.push(i);
		}
	}
	return keysArray;
}
//				TASK 7
let keyValue = (obj) => {
	let keyValueArr = [];
	
	for(let i in obj){
		if(Object.prototype.hasOwnProperty.call(obj, i)){
			keyValueArr.push(obj, i);
		}
	}
	return keyValueArr;
}

//				TASK 8

let showFormattedDate = (date) => {
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}


