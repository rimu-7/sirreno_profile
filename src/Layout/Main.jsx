import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Components/Navbar';


const Main = () => {
    return (
        <div className='bg-[#212121]'>
            <div className=""></div>
            {/* <Navbar/> */}
            <Navbar/>

            <div className=''>
                <Outlet />
            </div>
            
        </div>
    );
};

export default Main;