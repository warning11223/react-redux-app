import {
    COMMENT_CREATE,
    COMMENT_DELETE,
    COMMENT_UPDATE,
    COMMENTS_LOAD,
    DECREMENT, ERROR_OFF, ERROR_ON,
    INCREMENT,
    INPUT_TEXT, LOADER_DISPLAY_OFF,
    LOADER_DISPLAY_ON
} from "./types";


export const incrementAction = () => ({type: INCREMENT});
export const decrementAction = () => ({type: DECREMENT});
export const inputText = (payload) => ({type: INPUT_TEXT, payload});
export const commentCreate = (text, id) => ({type: COMMENT_CREATE, data: {text, id}});
export const commentUpdate = (text, id) => ({type: COMMENT_UPDATE, data: {text, id}});
export const commentDelete = (id) => ({type: COMMENT_DELETE, id});

export const loaderOn = () => ({type: LOADER_DISPLAY_ON});
export const loaderOff = () => ({type: LOADER_DISPLAY_OFF});

export const commentsLoad = () => {
    return async dispatch => {

        try {
            dispatch(loaderOn());
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
            const jsonData = await response.json();

            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData,
                });
                dispatch(loaderOff());
            }, 2000)

        } catch (err) {
            dispatch(errorOn('Ошибка API'));

            dispatch(loaderOff());
        }
    }
}

export const errorOn = (text) => ({type: ERROR_ON, text});
export const errorOff = () => ({type: ERROR_OFF});