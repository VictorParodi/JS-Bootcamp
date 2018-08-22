const todos = [
  {
    id: 1,
    title: 'Walk the dog',
    isCompleted: false 
  },

  {
    id: 2,
    title: 'Walk the horse',
    isCompleted: true
  },

  {
    id: 3,
    title: 'Walk the dragon',
    isCompleted: true
  }
];


// Delete function
// let deleteTodo = function(todos, title) {
//   let indexTodo = todos.findIndex(function(todo, title) {
//     return todo.title === title;
//   });

//   todos.splice(indexTodo, 1);

//   return todos;
// }

// let out = deleteTodo(todos, 'Walk the horse');
// console.log(out);

// ------------------------------------------------------------

// Filter function
// let filterTodos = function(todos) {
//   let incompletedTodos = todos.filter(function(todo) {
//     return !todo.isCompleted;
//   });

//   return incompletedTodos;
// }

// let out = filterTodos(todos);
// console.log(out);

// ------------------------------------------------------------

// Sort function
// let sortTodos = function(todos) {
//   let sortedTodos = todos.sort(function(a, b) {
//     if (a.title < b.title) {
//       return -1;
//     } else if (a.title > b.title) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   return sortedTodos;
// }

// let out = sortTodos(todos);
// console.log(out);

let sortTodos = function(todos) {
  let sortedTodos = todos.sort(function(a, b) {
    if (a.isCompleted) {
      return -1;
    } else if (b.isCompleted) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedTodos;
}

let out = sortTodos(todos);
console.log(out);