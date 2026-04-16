import React from 'react';
import { Outlet,useLocation} from 'react-router-dom'

import { HomeIcon } from 'lucide-react';
import Navbar from '../componenets/shared/Navbar'
import BottomNav from '../componenets/shared/BottomNav';
import Footer from "../componenets/shared/Footer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const RootLayout = () => {
     const location = useLocation();
    const showNavbar = location.pathname !== '/';
    const showBottom = location.pathname !== 'friend/:id';
    return (
        <div>
            {showNavbar && <Navbar />}
            <Outlet/>
            {showBottom || <BottomNav/>}
            <Footer/>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default RootLayout;