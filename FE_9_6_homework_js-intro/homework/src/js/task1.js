let price = prompt('Enter a price');
let discount = prompt('Enter discount');
if (price < 0 || discount < 0) {
	console.error('Invalid data');
} else {
	console.log(`
Price without discount: ${price}
Discount: ${discount}%
Price with discount: ${price - price * discount/100}
Saved: ${price * discount / 100}`);
}


