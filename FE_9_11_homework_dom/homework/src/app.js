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
		dragAndDrop();
		addTaskBtn.disabled = true;
	}
}

function addTaskList() {
	let doneBtn = document.createElement('i'),
		deleteBtn = document.createElement('i'),
		span = document.createElement('span'),
		liElem = document.createElement('li');

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
		dragAndDrop();
		checkArrayLenght();
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


let dragItems = [];

function dragAndDrop() {
	dragItems = document.querySelectorAll('#list > li');
	for (let i = 0; i < dragItems.length; i++) {
		dragItems[i].setAttribute('draggable', 'true');
		dragItems[i].addEventListener('startOfDrag', startOfDrag, false);
		dragItems[i].addEventListener('endOfDrag', endOfDrag);
		dragItems[i].addEventListener('drop', dragDrop, false);
		dragItems[i].addEventListener('dragenter', dragEnter);
		dragItems[i].addEventListener('dragleave', dragLeave);
		dragItems[i].addEventListener('dragover', cancel, false);
	}
}

function getIndex(array, item) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === item) {
			return i;
		}
	}
}

function startOfDrag(elem) {
	const indexDrag = getIndex(dragItems, this);
	this.style.opacity = '0.5';
	elem.dataTransfer.dropEffect = 'move';
	elem.dataTransfer.setData('text', indexDrag);
}

function endOfDrag(elem) {
	this.style.opacity = 'unset';
}

function dragDrop(elem) {
	cancel(elem);

	let preIndex = elem.dataTransfer.getData('text'),
		target = elem.target,
		nextIndex = getIndex(dragItems, target),
		dropped = dragItems[preIndex];

	target.classList.remove('drag-zone');

	if (nextIndex < preIndex) {
		list.removeChild(dropped);
		list.insertBefore(dropped, dragItems[nextIndex]);
		dragAndDrop();
	} else {
		list.removeChild(dropped);
		list.insertBefore(dropped, dragItems[++nextIndex]);
		dragAndDrop();
	}
}

function dragLeave(elem) {
	this.classList.remove('drag-div');
}

function dragEnter(elem) {
	cancel(elem);

	this.classList.add('drag-div');
}

function cancel(elem) {
	if (elem.preventDefault) {
		elem.preventDefault();
	}

	if (elem.stopPropagation) {
		elem.stopPropagation();
	}

	return false;
}