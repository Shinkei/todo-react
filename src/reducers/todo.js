import { getTodos } from './../lib/todoServices';

// We create an initial state with a list of todos
const initialState = {
    todos: [],
    currentTodo: ''
};

// create constands for the actions to prevent future errors related with typos
const ADD = 'ADD';
const LOAD = 'LOAD';
const UPDATE_INPUT = 'UPDATE_INPUT';

// export this action to centralice the actions the application can perform 
export const updateCurrentAction = (value) => ({ type: UPDATE_INPUT, payload: value });
export const fetchTodosAction = () => { // create an action that using a promise retrieve the list of todos 
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodosAction(todos)));
    }
};
export const loadTodosAction = (todos) => ({ type: LOAD, payload: todos });

// here we are esporting the state because we haven't defined the actions
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, todos: state.todos.concat(action.payload) }
        case UPDATE_INPUT:
            return { ...state, currentTodo: action.payload }
        case LOAD:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};