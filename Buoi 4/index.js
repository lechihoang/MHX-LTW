function changeText() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Chào mừng bạn đến với bài tập DOM!';
}

document.addEventListener('DOMContentLoaded', function() {
    const colorChangeButton = document.querySelector('div#box').nextElementSibling;
    colorChangeButton.addEventListener('click', function() {
        const box = document.getElementById('box');
        box.style.backgroundColor = 'orange';
    });

    const addTodoButton = document.querySelector('#todoInput').nextElementSibling;
    addTodoButton.addEventListener('click', addTodo);

    const existingDeleteButtons = document.querySelectorAll('#todoList li button');
    existingDeleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            removeTodo(this);
        });
    });
});

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = todoText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.addEventListener('click', function() {
            removeTodo(this);
        });
        
        li.appendChild(span);
        li.appendChild(deleteButton);
        
        todoList.appendChild(li);
        
        todoInput.value = '';
    }
}

function removeTodo(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
}

function changeImage() {
    const myImage = document.getElementById('myImage');
    myImage.src = 'https://www.svgrepo.com/show/452030/avatar-default.svg';
}

function toggleHighlight() {
    const toggleClassText = document.getElementById('toggleClassText');
    toggleClassText.classList.toggle('highlight');
}
