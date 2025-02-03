import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Components/Navbar';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className="bg-[#212121] w-full min-h-screen flex flex-col">
            <Navbar />
            
            {/* Centered Content with max-width for 4K screens */}
            <div className="w-full max-w-[1800px] mx-auto px-6">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Main;
