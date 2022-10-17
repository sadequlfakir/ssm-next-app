import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Layout = ({children}) => {
    return (
        <div className="">
            <Header />
                {children}
            <Footer />
        </div>
    )
};

export default Layout;