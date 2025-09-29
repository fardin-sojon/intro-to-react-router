import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sideber from '../Sidebar/Sideber';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <Sideber></Sideber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

/**
 * 1. use: userPromise > Suspense > promise > use(usersPromise)
 * 2. [ less used so far] > useState + useEffect ( ()=>{}, [] )
 * 3. load data before router component is rendered
 */