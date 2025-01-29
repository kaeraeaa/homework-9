function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.onclick = () => toggleTask(index);
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskInput.value, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    loadTasks();
}

function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

loadTasks();



function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
}

function loadData() {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
}

loadData();



function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkList = document.getElementById('bookmark-list');
    bookmarkList.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = bookmark;
        link.textContent = bookmark;
        link.target = '_blank';
        li.appendChild(link);
        const delButton = document.createElement('button');
        delButton.textContent = 'Delete';
        delButton.onclick = () => deleteBookmark(index);
        li.appendChild(delButton);
        bookmarkList.appendChild(li);
    });
}

function addBookmark() {
    const bookmarkUrl = document.getElementById('bookmark-url').value;
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(bookmarkUrl);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    document.getElementById('bookmark-url').value = '';
    loadBookmarks();
}

function deleteBookmark(index) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    loadBookmarks();
}

loadBookmarks();



function loadContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.textContent = `${contact.firstName} ${contact.lastName} - ${contact.phone} - ${contact.email}`;
        const delButton = document.createElement('button');
        delButton.textContent = 'Delete';
        delButton.onclick = () => deleteContact(index);
        li.appendChild(delButton);
        contactList.appendChild(li);
    });
}

function addContact() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ firstName, lastName, phone, email });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    document.getElementById('contact-form').reset();
    loadContacts();
}

function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    loadContacts();
}

loadContacts();
