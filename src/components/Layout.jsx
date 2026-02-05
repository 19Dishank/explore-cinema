import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {

    const navigation = useNavigation();

    if(navigation.state === "loading") return <Loading/>

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;