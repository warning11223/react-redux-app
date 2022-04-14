import {COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD} from "./types";

const initialState = {
    comments: [],
}

const commentsReducer = (state = initialState, action) => {
    console.log('commentsReducer > ', action);

    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data],
            };

        case COMMENT_UPDATE:
            const { data } = action;
            const { comments } = state;
            const itemIndex = comments.findIndex(res => res.id === data.id);

            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1)
            ]
            return {
                ...state,
                comments: nextComments
            }

        case COMMENT_DELETE:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(res => res.id === id);

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1),
                ]

                return {
                    ...state,
                    comments: nextComments,
                }
            })()

        case COMMENTS_LOAD:
            const commentsNew = action.data.map(item => {
                return {
                    text: item.name,
                    id: item.id,
                }
            })

            return {
                ...state,
                comments: commentsNew
            }

        default:
            return state;
    }
}

export default commentsReducer;