let login = prompt('Login:');
let startEvening = 20;
if (login === '' || login === null) {
	alert('Canceled');
} else if (login.length < 4) {
	alert('I don`t know any users having name length less than 4 symbols');
} else if (login === 'User') {
	let password = prompt('Password');
	if (password === '' || password === null) {
		alert('Canceled');
	} else if (password === 'SuperUser') {
		if (new Date().getHours() < startEvening) {
			alert('Good day!');
		} else {
			alert('Good evening!');
		}
	} else {
		alert('Wrong password');
	}
} else {
	alert('I don`t know you');
}