const rootNode = document.getElementById('root');
let counter = 0;
const todoItems = [];
let modifyValue = '';

const mainPage = document.createElement('div');
mainPage.className = 'container';


function main() {
    window.location.hash = '';
    mainPage.innerText = '';
    let headerText = document.createElement('h1');
    headerText.innerText = 'Simple TODO application';
    let addTaskbtn = document.createElement('button');
    addTaskbtn.className = 'addTaskBtn';
    addTaskbtn.innerText = 'Add New Task';
    let emptyText = document.createElement('h2');
    emptyText.innerText = 'TODO is empty';
    let list = document.createElement('ul');
    list.id = 'list';

    mainPage.appendChild(headerText);
    mainPage.appendChild(addTaskbtn);
    mainPage.appendChild(emptyText);
    mainPage.appendChild(list);

    function createNewTask(i) {
        emptyText.style.display = 'none';
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.className = 'img';
        if (todoItems[i].isDone) {
            li.style.backgroundColor = 'silver';
            img.src = './assets/img/done-s.png';
        } else {
            img.src = './assets/img/todo-s.png';
        }
        img.addEventListener('click', () => {
            if (todoItems[i].isDone) {
                img.src = './assets/img/todo-s.png';
                todoItems[i].isDone = false;
                todoItems.push(todoItems[i]);
                todoItems.splice(i, 1);
                main();
            } else {
                li.className = 'li-done';
                img.src = './assets/img/done-s.png';
                todoItems[i].isDone = true;
                todoItems.push(todoItems[i]);
                todoItems.splice(i, 1);
                main();
            }
        });
        let itemDescription = document.createElement('div');
        itemDescription.className = 'item-description';
        itemDescription.innerText = `${todoItems[i].description}`;
        let del = document.createElement('img');
        del.className = 'remove img';
        del.src = './assets/img/remove-s.jpg';
        li.appendChild(img);
        li.appendChild(itemDescription);
        li.appendChild(del);
        list.appendChild(li);

        let fillDescription = document.getElementsByClassName('item-description');
        for (let i = 0; i < fillDescription.length; i++) {
            fillDescription[i].onclick = function() {
                modifyValue = `modify${i+1}`;
                window.location.hash = `modify${i+1}`;
            }
        }
        let close = document.getElementsByClassName('remove');
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                let listItem = this.parentElement;
                let ul = document.getElementById('list');
                ul.removeChild(listItem);
                todoItems.splice(i);
            }
        }
    }

    for (let i = 0; i < todoItems.length; i++) {
        if (!todoItems[i].isDone) {
            createNewTask(i);
        }
    }
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].isDone) {
            createNewTask(i);
        }
    }



    addTaskbtn.addEventListener('click', () => window.location.hash = 'add-task');
}
main();

function addNewItems() {
    let headerText = document.createElement('h1');
    headerText.innerText = 'Add New Task';
    let input = document.createElement('input');
    input.id = 'input';
    let addTaskPage = document.createElement('div');
    addTaskPage.className = 'add-task-page';
    let cancel = document.createElement('button');
    cancel.className = 'cancel btns';
    cancel.innerText = 'Cancel';
    let addBtn = document.createElement('button');
    addBtn.className = 'add btns';
    addBtn.innerText = 'Save changes';

    mainPage.appendChild(headerText);
    mainPage.appendChild(input);
    mainPage.appendChild(addTaskPage);
    addTaskPage.appendChild(cancel);
    addTaskPage.appendChild(addBtn);
    document.querySelector('input').focus();

    cancel.addEventListener('click', cancelIt);

    function cancelIt() {
        window.location.hash = '';
    }
    addBtn.addEventListener('click', () => {
        let inputValue = document.getElementById('input').value;
        if(inputValue === ''){
            return alert('Enter a value!');
        }
        todoItems.push({
            isDone: false,
            id: `${counter + 1}`,
            description: `${inputValue}`
        });
        counter++;
        window.location.hash = '';
        return todoItems;
    });
}

function modifyItem() {
    let headerText = document.createElement('h1');
    headerText.innerText = 'Modify Item';
    let input = document.createElement('input');
    input.id = 'editor';
    input.value = todoItems[0].description;
    let modifyPage = document.createElement('div');
    modifyPage.className = 'modify-page';
    let cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-modify';
    cancelBtn.innerText = 'Cancel';
    let save = document.createElement('button');
    save.className = 'save ';
    save.innerText = 'Save changes';

    mainPage.appendChild(headerText);
    mainPage.appendChild(input);
    mainPage.appendChild(modifyPage);
    modifyPage.appendChild(cancelBtn);
    modifyPage.appendChild(save);

    cancelBtn.addEventListener('click', () => window.location.hash = '');

    save.addEventListener('click', () => {
        let value = document.getElementById('editor').value;
        todoItems[0].description = value;
        window.location.hash = '';
        return todoItems;
    });
}
rootNode.appendChild(mainPage);


window.addEventListener('hashchange', function() {
    if (window.location.hash === '#add-task') {
        mainPage.innerText = '';
        addNewItems();
    } else if (window.location.hash === `#${modifyValue}`) {
        mainPage.innerText = '';
        modifyItem();
    } else {
        mainPage.innerText = '';
        main();
    }
});