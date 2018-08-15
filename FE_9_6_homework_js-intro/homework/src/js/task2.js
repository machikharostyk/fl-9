let aSide = prompt('Enter first side');
let bSide = prompt('Enter second side');
let angle = prompt('Enter angle of triangle');
let radianToDegree = 57.29;
let angleToDegree = angle / radianToDegree;
let cSide = Math.sqrt(aSide * aSide + bSide * bSide - 2 * aSide * bSide * Math.cos(angleToDegree));

let trianglePerimeter = parseInt(aSide) + parseInt(bSide) + cSide;

let halfPerimeter = trianglePerimeter / 2;

function square(halfPerimeter, a, b, c) {
	return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
}

let triangleSquare = square(halfPerimeter, aSide, bSide, cSide);

if (aSide < 0 || bSide < 0 || angleToDegree < 0) {
	console.error('Invalid data');
} else {
	console.log(`
	c length: ${+cSide.toFixed(2)}
	Triangle square: ${+triangleSquare.toFixed(2)}
	Triangle perimeter: ${+trianglePerimeter.toFixed(2)}
`);
}