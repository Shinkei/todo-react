import { ADD, LOAD } from './todo'; // import the action constant  from the todo reducer 

const initialState = {
    message: ''
};

const SHOW = 'SHOW';

// action to use when we want to show a message
export const showMessageAction = (message) => ({ type: SHOW, payload: message });

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return { ...state, message: action.payload };
        case ADD:
        case LOAD: // Here we return an empty string so the message we show is erased when the proces finish
            return '';
        default:
            return state;
    }
}