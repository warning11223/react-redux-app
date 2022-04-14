import {combineReducers} from "redux";
import likesReducer from "./likesReducer";
import inputReducer from "./inputReducer";
import commentsReducer from "./commentsReducer";
import loaderReducer from "./loaderReducer";



const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    loaderReducer,
});

export default rootReducer;