import {INPUT_TEXT} from "./types";

const initialState = {
    text: ''
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {...state, text: action.payload}
        default:
            return state;
    }
}

export default inputReducer;