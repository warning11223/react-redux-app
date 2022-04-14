import React, {useEffect, useState} from 'react';
import SingleComment from "./SingleComment";
import {useDispatch, useSelector} from "react-redux";
import {commentCreate, commentsLoad} from "./redux/actions";
import uniqid from "uniqid";

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');

    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    });

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment('');
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, []);


    return (
        <div className='card-comments'>
            <form className='comments-item-create' onSubmit={handleSubmit}>
                <input type="text" value={textComment} onChange={handleInput} placeholder='Enter your comment...'/>
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map(item => <SingleComment key={item.id} data={item}/>)}

        </div>
    );
};

export default Comments;
