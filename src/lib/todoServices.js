// Here we are using fetch to retrieve the todos object list from the json-server
export const getTodos = () => {
    return fetch('http://localhost:8080/todos')
        .then(res => res.json());
};

// Here we are adding a todo to the server
export const postTodo = (name) => {
    return fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, isCompleted: false })
    }).then(res => res.json());
};

// Here we are updating a todo to the server
export const putTodo = (todo) => {
    return fetch(`http://localhost:8080/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json());
};