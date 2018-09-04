const doneBtn = document.getElementsByClassName('check-btn'),
	addInput = document.getElementById('add-task-input'),
	list = document.getElementById('taskList'),
	addTaskBtn = document.getElementById('add-task-btn'),
	listTitle = document.getElementById('headerTitle'),
	numberOfMaxTask = 10,
	numberToDelete = 1,
	indexOfItem = 1;

let taskList = [];

addInput.addEventListener('keyup', function () {
	if (emptyInput(addInput.value)) {
		addTaskBtn.disabled = true;
	} else {
		addTaskBtn.disabled = false;
	}
})

addTaskBtn.addEventListener('click', addTask);

function addTask() {
	if (taskList.length < numberOfMaxTask) {
		taskList.push(addInput.value);
		addInput.value = '';
		addTaskList();
		checkArrayLenght();
		addTaskBtn.disabled = true;
	}
}

function addTaskList() {
	let doneBtn = document.createElement('i'),
		deleteBtn = document.createElement('i'),
		span = document.createElement('span'),
		liElem = document.createElement('li');
	liElem.setAttribute('class', 'list-item');
	liElem.setAttribute('draggable', true);

	doneBtn.classList.add('material-icons', 'check-btn');
	doneBtn.innerHTML = 'check';

	doneBtn.addEventListener('click', function () {
		doneBtn.classList.add('checked');
	})

	deleteBtn.classList.add('material-icons', 'delete-btn');
	deleteBtn.innerHTML = 'delete';

	deleteBtn.addEventListener('click', function () {
		let listItemToRemove = this.parentElement;
		let j = taskList.indexOf(listItemToRemove.childNodes[indexOfItem].textContent);

		taskList.splice(j, numberToDelete);
		list.removeChild(listItemToRemove);

		addInput.disabled = false;
		document.getElementById('warning').style.display = 'none';
	})

	for (let i = 0; i < taskList.length; i++) {
		span.innerHTML = taskList[i];
		liElem.draggable = true;
		liElem.appendChild(doneBtn);
		liElem.appendChild(span);
		liElem.appendChild(deleteBtn);
		list.appendChild(liElem);
	}
}

function emptyInput(string) {
	return !emptyInput || /^\s*$/.test(string);
}

function checkArrayLenght() {
	let span = document.createElement('span');

	span.innerHTML = 'Maximum item per list are created';
	span.setAttribute('id', 'warning');

	if (taskList.length < numberOfMaxTask) {
		addInput.disabled = false;

		if (document.getElementById('warning')) {
			listTitle.removeChild(document.getElementById('warning'));
		}

	} else {
		addInput.disabled = true;
		listTitle.appendChild(span);
	}
}


let dragAndDrop;

list.addEventListener('dragstart', function(elem) {
	dragAndDrop = elem.target;
});

list.addEventListener('dragover', function(elem) {
	if (elem.target.className === 'list-item') {
		elem.preventDefault();
	}
});

list.addEventListener('dragleave', function(elem) {
	elem.target.style.transform = '';
});

list.addEventListener('drop', function(elem) {
	if (elem.target.className === 'list-item') {
		elem.preventDefault();
		elem.target.style.transform = '';
		list.insertBefore(dragAndDrop, elem.target);
	}
});