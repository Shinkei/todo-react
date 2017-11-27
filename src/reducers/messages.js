
const initialState = {
    message: ''
};

const SHOW = 'SHOW';

// action to use when we want to show a message
export const showMessageAction = (message) => ({type: SHOW, payload: message});

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return {...state, message: action.payload}
        default:
            return state;
    }
}