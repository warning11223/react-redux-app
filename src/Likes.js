import React from 'react';
import {connect} from "react-redux";
import likesReducer from "./redux/likesReducer";
import {decrementAction, incrementAction} from "./redux/actions";

const Likes = (props) => {
    console.log(props)
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤️{props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        likes: state.likesReducer.likes,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementAction()),
        onDecrementLikes: () => dispatch(decrementAction()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Likes);
