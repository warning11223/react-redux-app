import {COMMENT_CREATE} from "./types";
import {errorOff, errorOn} from "./actions";

const badWords = ['shit'];

export const spamFilter = (store) => {
    return function (next) {
        return function (action) {
            if(action.type === COMMENT_CREATE) {
                const hasBadWords = badWords.some(item => action.data.text.includes(item));
                if(hasBadWords) {
                    store.dispatch(errorOn('don\'t write bad words!!!'));
                    setTimeout(() => {
                        store.dispatch(errorOff())
                    }, 2500)
                }
            }
            return next(action);
        }
    }
}