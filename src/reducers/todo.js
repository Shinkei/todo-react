// We create an initial state with a list of todos
const initialState = {
    todos: []
};

// here we are esporting the state because we haven't defined the actions
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, todos: state.todos.concat(action.payload)}

        default:
            return state;
    }
};