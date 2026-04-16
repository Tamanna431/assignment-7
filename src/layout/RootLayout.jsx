import React from 'react';
import { Outlet } from 'react-router-dom'

import { HomeIcon } from 'lucide-react';
import BottomNav from '../componenets/shared/BottomNav';
import Footer from "../componenets/shared/Footer";
const RootLayout = () => {
    return (
        <div>
            <Outlet/>
            <BottomNav/>
            <Footer/>
        </div>
    );
};

export default RootLayout;