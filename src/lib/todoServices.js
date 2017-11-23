// Here we are using fetch to retrieve the todos object list from the json-server
export const getTodos = () => {
    return fetch('http://localhost:8080/todos')
        .then(res => res.json());
};