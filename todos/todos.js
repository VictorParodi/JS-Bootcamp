const todos = [
  {
    title: 'Walk the dog',
    isCompleted: false
  },

  {
    title: 'Pay bills',
    isCompleted: false
  },

  {
    title: 'Cook the dinner',
    isCompleted: true
  }
];

// ------------------------------ Old way to render notes and filter notes ------------------------------
// const body = document.querySelector('body'),
//       heading = document.createElement('h4');

// let counter = 0;

// todos.forEach(function(todo) {
//   if (!todo.isCompleted) {
//     counter++;
//   }
// });

// heading.textContent = `You have ${counter} todo(s) left`;

// body.appendChild(heading);

// todos.forEach(function(todo) {
//   let paragraph = document.createElement('p');
//   paragraph.textContent = todo.title;
//   body.appendChild(paragraph);
// });

// ------------------------------ New way to render notes and filter notes ------------------------------
const notesContainer = document.querySelector('#notes');
const noteBox = document.querySelector('#noteInput');
let check = document.querySelector('#hide-completed');

// Render todos
function renderTodos(todos) {
  notesContainer.innerHTML = '';

  todos.forEach(function(todo) {
    let paragraph = document.createElement('p');
    paragraph.textContent = todo.title;
    notesContainer.appendChild(paragraph);
  });
};

renderTodos(todos);

// Filter todos
const todoFilter = function(todos, filter) {
  let filteredTodos = todos.filter(function(todo) {
    return todo.title.toLowerCase().includes(filter.toLowerCase());
  });

  notesContainer.innerHTML = '';

  filteredTodos.forEach(function(filteredTodo) {
    let paragraph = document.createElement('p');
    paragraph.textContent = filteredTodo.title;
    notesContainer.appendChild(paragraph);
  });
}

const hideCompletedTodos = function(todos, check) {
  let todosToRender = check ? todos.filter(function(todo) {
    return todo.isCompleted !== check;
  }) : todos;

  renderTodos(todosToRender);
}

noteBox.addEventListener('input', function(event) {
  todoFilter(todos, event.target.value);
});

// Add brand new todo
let form = document.querySelector('#form-notes');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let paragraph = document.createElement('p');

  todos.push({
    title: event.target.elements.note.value,
    isCompleted: false
  });

  event.target.elements.note.value = '';
  renderTodos(todos);
});

// Listening checkbox
check.addEventListener('change', function(event) {
  let checkValue = event.target.checked;
  hideCompletedTodos(todos, checkValue);
});