const todoList = [
    { id: 1, task: 'Buy milk', completed: true },
    { id: 2, task: 'Buy eggs', completed: false },
    { id: 3, task: 'Buy bread', completed: false }
];

function generateTodoHTML(todo) {
    return `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>
  `;
}

document.addEventListener('DOMContentLoaded', function() {
    const ulElement = document.querySelector('ul');
    todoList.forEach(function(todo) {
        const todoHTML = generateTodoHTML(todo);
        ulElement.insertAdjacentHTML('beforeend', todoHTML);
    });
});
