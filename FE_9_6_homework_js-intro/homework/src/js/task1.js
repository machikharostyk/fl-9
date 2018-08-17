let price = prompt('Enter a price');
let discount = prompt('Enter discount');
if (price < 0 || discount < 0 || discount > 100) {
	console.error('Invalid data');
}else {
	let priceDiscount = price - price * discount / 100;
	let saved = price * discount / 100;
	console.log(`
Price without discount: ${price}
Discount: ${discount}%
Price with discount: ${+priceDiscount.toFixed(2)}
Saved: ${+saved.toFixed(2)}`);
}


