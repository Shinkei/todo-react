const baseUrl = process.env.REACT_APP_BASE_URL;

// Here we are using fetch to retrieve the todos object list from the json-server
export const getTodos = () => {
    console.log(baseUrl)
    return fetch(baseUrl)
        .then(res => res.json());
};

// Here we are adding a todo to the server
export const postTodo = (name) => {
    return fetch(baseUrl, {
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
    return fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json());
};

// Here we are deleting a todo to the server
export const deleteTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }); // this service does not use the body because it is not needed in Delete calls
};