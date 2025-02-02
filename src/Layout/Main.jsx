import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Components/Navbar';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div className='bg-[#212121] w-full'>
            <div className=""></div>
            {/* <Navbar/> */}
            <Navbar/>

            <div className=''>
                <Outlet />
            </div>
            {/* <Footer/> */}
            
        </div>
    );
};

export default Main;