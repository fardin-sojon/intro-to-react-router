import React from 'react';

const User = ({user}) => {

    const {name, email, phone} = user;

    

    console.log(user);

    return (
        <div className='border border-yellow-300 rounded-3xl p-2.5 m-2.5'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <small>Phone: {phone}</small>
        </div>
    );
};

export default User;