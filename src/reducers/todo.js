import { getTodos, postTodo, putTodo } from './../lib/todoServices';
import { showMessageAction } from './messages';

// We create an initial state with a list of todos
const initialState = {
    todos: [],
    currentTodo: ''
};

// create constands for the actions to prevent future errors related with typos
export const ADD = 'ADD';
export const LOAD = 'LOAD';
export const REPLACE = 'REPLACE';
const UPDATE_INPUT = 'UPDATE_INPUT';

// add todo task to the store
export const addTodoAction = (todo) => ({ type: ADD, payload: todo });
export const loadTodosAction = (todos) => ({ type: LOAD, payload: todos });
// export this action to centralice the actions the application can perform 
export const updateCurrentAction = (value) => ({ type: UPDATE_INPUT, payload: value });
export const replaceTodoAction = (todo) => ({ type: REPLACE, payload: todo });


// action creator to fetch the todo list from the server
export const fetchTodosAction = () => { // create an action that using a promise retrieve the list of todos 
    return (dispatch) => {
        dispatch(showMessageAction('Loading Todos')); // We put the message loading at the moment we start searching 
        getTodos()
            .then(todos => dispatch(loadTodosAction(todos)));
    }
};

// action creator to add a todo task
export const saveTodoAction = (name) => {
    return (dispatch) => {
        dispatch(showMessageAction('Saving Todo')); // call the action from a the message reducer to show a message
        postTodo(name).then(todo => dispatch(addTodoAction(todo)));
    };
};

export const toggleTodoAction = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessageAction('Updating Todo'));
        const { todos } = getState().todo; // we get the state of the app and there we access the todo store and there get the todos list destructuring it
        const todo = todos.find(element => element.id === id); // find the todo with the specified id
        const newTodo = { ...todo, isCompleted: !todo.isCompleted };
        putTodo(newTodo)
            .then(res => dispatch(replaceTodoAction(res)));

    };
};

// here we are esporting the state because we haven't defined the actions
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, currentTodo: '', todos: state.todos.concat(action.payload) };
        case UPDATE_INPUT:
            return { ...state, currentTodo: action.payload };
        case LOAD:
            return { ...state, todos: action.payload };
        case REPLACE:
            return {
                ...state,
                todos: state.todos.map(
                    element => element.id === action.payload.id ? action.payload : element
                )
            }; // search for the updated task and then replace it
        default:
            return state;
    }
};