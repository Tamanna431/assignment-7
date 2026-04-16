import React from 'react';
import { Outlet,useLocation} from 'react-router-dom'

import { HomeIcon } from 'lucide-react';
import Navbar from '../components/shared/Navbar'
import BottomNav from '../components/shared/BottomNav';
import Footer from "../components/shared/Footer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
     const location = useLocation();
    const showNavbar = location.pathname === 'friend/:id';
    const showBottom = location.pathname !== '/';
    return (
        <div>
            {showNavbar || <Navbar />}
            <Outlet/>
            {showBottom || <BottomNav/>}
            <Footer/>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default RootLayout;