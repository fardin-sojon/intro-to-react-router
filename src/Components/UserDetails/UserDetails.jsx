import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    const {name,website} = user;

    return (
        <div className='border border-yellow-300 rounded-3xl p-2.5 m-2.5'>
            <h4>User Details Container</h4>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>          
        </div>
    );
};

export default UserDetails;