import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {

    const {id, title} = post;

    const navigate = useNavigate();

    const haldleNavigate = ()=> {
        navigate(`/posts/${id}`)
    }

    return (
        <div className='border-2 border-green-400 p-2 rounded-md'>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
                <button className='mt-2'>Show Details</button>
            </Link>
            <button onClick={haldleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;