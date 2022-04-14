import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {commentDelete, commentUpdate} from "./redux/actions";

const SingleComment = ({data}) => {
    const { text, id } = data;
    const [input, setInput] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        if(text) {
            setInput(text)
        }
    }, [text])

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(input, id));
    }

    const handleDelete = () => {
        dispatch(commentDelete(id))
    }

    return (
        <form className='comments-item' onSubmit={handleSubmit}>
            <div className='comments-item-delete' onClick={handleDelete}>&times;</div>
            <input type="text" value={input} onChange={inputHandler}/>
            <input type="submit" hidden/>
        </form>
    );
};

export default SingleComment;
