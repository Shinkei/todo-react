import { getTodos, postTodos } from './../lib/todoServices';

// We create an initial state with a list of todos
const initialState = {
    todos: [],
    currentTodo: ''
};

// create constands for the actions to prevent future errors related with typos
const ADD = 'ADD';
const LOAD = 'LOAD';
const UPDATE_INPUT = 'UPDATE_INPUT';

// add todo task to the store
export const addTodoAction = (todo) => ({ type: ADD, payload: todo });
export const loadTodosAction = (todos) => ({ type: LOAD, payload: todos });
// export this action to centralice the actions the application can perform 
export const updateCurrentAction = (value) => ({ type: UPDATE_INPUT, payload: value });

// action creator to fetch the todo list from the server
export const fetchTodosAction = () => { // create an action that using a promise retrieve the list of todos 
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodosAction(todos)));
    }
};

// action creator to add a todo task
export const saveTodoAction = (name) => {
    return (dispatch) => {
        postTodos(name).then(todo => dispatch(addTodoAction(todo)));
    }
};

// here we are esporting the state because we haven't defined the actions
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, currentTodo: '', todos: state.todos.concat(action.payload) }
        case UPDATE_INPUT:
            return { ...state, currentTodo: action.payload }
        case LOAD:
            return { ...state, todos: action.payload };
        default:
            return state;
    }
};