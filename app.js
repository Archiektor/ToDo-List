const tasks = [
    {
        _id: '5d2ca9e2e03d40b326596aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095c1288e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
        _id: '5d2ca9e2e03d40b3232496aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095564788e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
];

(function (arrOfTasks) {
    const objOfTasks = arrOfTasks.reduce((acc, curr) => {
        acc[curr._id] = curr;
        // console.log(acc);
        return acc;
    }, {});

    //Elements UI
    const listContainer = document.querySelector('.tasks-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];


    // console.log(inputTitle, inputBody);

    //Events
    renderAllTasks(objOfTasks);
    form.addEventListener('submit', onFormSubmitHandler);
    listContainer.addEventListener('click', onDeleteHandler);

    function renderAllTasks(tasksLists) {
        if (!tasksLists) {
            console.error('Wrong tasklist');
        }

        const fragment = document.createDocumentFragment();
        Object.values(tasksLists).forEach((currTask) => {
            const li = listItemCreation(currTask);
            fragment.appendChild(li);
        });
        listContainer.appendChild(fragment);
    }

    function listItemCreation({_id, title, body} = {}) {
        // console.log(_id, title);
        const li = document.createElement('li');
        li.setAttribute('data-task-id', _id);
        li.classList.add("list-group-item", "d-flex", "align-items-center", "flex-wrap", "mt-2");
        // console.log(li);
        const span = document.createElement('span');
        span.textContent = title;
        span.style.fontWeight = 'bold';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
        deleteBtn.textContent = 'Delete';

        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('mt-2', 'w-100');
        article.style.fontWeight = 'normal';

        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.appendChild(article);
        // console.log(li);

        return li;
    }

    function onFormSubmitHandler(e) {
        e.preventDefault();
        const titleValue = inputTitle.value;
        const bodyValue = inputBody.value;
        // console.log(titleValue, bodyValue);

        if (!titleValue || !bodyValue) {
            alert('You entered wrong title or paragraph !');
        }

        const task = createNewTask(titleValue, bodyValue);
        // console.log(objOfTasks);
        form.reset();

        const listItem = listItemCreation(task);
        listContainer.insertAdjacentElement('afterbegin', listItem);

    }

    function createNewTask(title, body) {
        const newTask = {
            title,
            body,
            completed: false,
            _id: `task-${Math.random()}`,
        };

        // console.log(newTask);

        objOfTasks[newTask._id] = newTask;
        return {...newTask};
    }

    function deleteTask(id) {
        const {title} = objOfTasks[id];
        const isConfirmed = confirm(`Are you sure about deleting ? : ${title}`);
        if (isConfirmed) {
            delete objOfTasks[id];
            return isConfirmed;
        } else {
            return isConfirmed;
        }
    }

    function deleteTaskFromHtml(confirmed, elem) {
        if (!confirmed) return;
        elem.remove();
    }

    function onDeleteHandler(e) {
        if (e.target.classList.contains('delete-btn')) {
            // console.log(e.target);
            const parent = e.target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            // console.log(id);
            const confirmed = deleteTask(id);
            // console.log(confirmed);
            deleteTaskFromHtml(confirmed, parent);
        }
    }
})
(tasks);


