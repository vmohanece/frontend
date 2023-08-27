'use client';

import React, { memo } from 'react';

import NavBar from './NavBar';
import Submenu from './Submenu';
import TopNavBar from './TopNavBar';

const Header = memo(() => {
    // const data = useWindowSize();

    return (
        <header className="w-full">
            <TopNavBar />
            <NavBar />
            <Submenu />
        </header>
    );
});

export default Header;
