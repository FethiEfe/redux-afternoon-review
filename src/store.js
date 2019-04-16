import { createStore } from 'redux';

const initialState = {
    todoItems: []
}

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';

function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD_ITEM_TO_LIST:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload]
            }

        default: return state;
    }
}

function getState() {
    return initialState;
}

export default createStore(reducer);