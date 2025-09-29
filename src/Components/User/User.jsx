import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {id, name, email, phone} = user;

    

    // console.log(user);

    return (
        <div className='border border-yellow-300 rounded-3xl p-2.5 m-2.5'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <small>Phone: {phone}</small>
            <Link className='block' to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;