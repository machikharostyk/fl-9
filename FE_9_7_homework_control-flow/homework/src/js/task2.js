let gameStart = confirm('Do you want to play a game?');

if (gameStart === true) {
	let attempts = 3;
	let multRange = 5;
	let iteartor = 1;
	let totalPrize = 0;
	let possiblePrize = 10;
	let gameEnd = false;
	let multiplyPrize = 3;
	let prize = possiblePrize;
	let numberRange = Math.floor(Math.random() * (multRange + iteartor));
	while (attempts !== 0 && gameEnd !== true) {
		let game = prompt(`Enter a number from 0 to ${multRange}
Attempts left: ${attempts}
Total prize: ${totalPrize}
Possible prize on current attemp: ${prize}`);

		if (+game === numberRange) {
			totalPrize += prize;
			let continueGame = confirm('Congratulations! Do you want to continue a game?');

			if (continueGame === true) {
				multRange = multRange * 2;
				numberRange = Math.floor(Math.random() * (multRange + iteartor));
				possiblePrize = possiblePrize * multiplyPrize;
				prize = possiblePrize;
				attempts = 3;
			} else{
				alert(`Thank you for a game. Your prize is: ${totalPrize}`);
				gameEnd = true;
			}
		} else {
			attempts--;
			prize = Math.floor(prize / 2);
		}
		if (attempts === 0) {
			alert(`Thank you for a game. Your prize is: ${totalPrize}`);
			let playAgain = confirm('Do you want to play again?');
			if (playAgain === true) {
				numberRange = Math.floor(Math.random() * (multRange + iteartor));
				attempts = 3;
			} else {
				alert(`Thank you for a game. Your prize is: ${totalPrize}`);
			}
		}

	}
} else {
	alert('You did not become a millionaire, but can.');
}