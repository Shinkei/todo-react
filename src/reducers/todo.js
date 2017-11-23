// We create an initial state with a list of todos
const initialState = {
    todos: [
        {id:1, name: 'Create a Store', isCompleted: true}
    ],
    currentTodo: ''
};

// create constands for the actions to prevent future errors related with typos
const ADD = 'ADD';
const UPDATE_INPUT = 'UPDATE_INPUT';

// export this action to centralice the actions the application can perform 
export const updateCurrentAction = (value) => ({ type: UPDATE_INPUT, payload: value });

// here we are esporting the state because we haven't defined the actions
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case UPDATE_INPUT:
            return {...state, currentTodo: action.payload}
        default:
            return state;
    }
};