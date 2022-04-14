import {ERROR_OFF, ERROR_ON, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON} from "./types";


const initialState = {
    loading: false,
    error: null,
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_DISPLAY_ON:
            return {
                ...state,
                loading: true,
            }
        case LOADER_DISPLAY_OFF:
            return {
                ...state,
                loading: false
            }
        case ERROR_OFF:
            return {
                ...state,
                error: null,
            }
        case ERROR_ON:
            return {
                ...state,
                error: action.text,
            }
        default:
            return state;
    }
}

export default loaderReducer;