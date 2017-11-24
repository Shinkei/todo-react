// Here we are using fetch to retrieve the todos object list from the json-server
export const getTodos = () => {
    return fetch('http://localhost:8080/todos')
        .then(res => res.json());
};

// Here we are sending a todo to the server
export const postTodos = (name) => {
    return fetch('http://localhost:8080/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, isCompleted: false})
    }).then(res => res.json());
};