'use client';

import React from 'react';

import ChevronDown from '@/components/CoreUI/SvgIcons/ChevronDown';
import MenuIcon from '@/components/CoreUI/SvgIcons/MenuIcon';

const Submenu = () => {
    const menuList = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Megamenu' },
        { id: 3, name: 'Shop' },
        { id: 4, name: 'Blog' },
        { id: 5, name: 'Account' },
        { id: 6, name: 'Pages' },
    ];
    return (
        <div className="border-y border-gallery-500 py-3">
            <div className="container flex justify-between flex-wrap gap-6">
                <ul className="flex flex-wrap gap-8">
                    <li className="flex gap-3 items-center border-r-2 border-gallery-500 pr-2 cursor-pointer">
                        <MenuIcon />
                        <div className="flex items-center space-x-2 text-base font-semibold text-shark-500">
                            <span>Shop By Category</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </li>
                    {menuList.map((menu: any) => {
                        return (
                            <li
                                key={menu.id}
                                className="flex gap-1 items-center text-base font-semibold text-shark-500 cursor-pointer"
                            >
                                <span>{menu.name}</span>
                                <ChevronDown className="w-4 h-4" />
                            </li>
                        );
                    })}
                    <li className="text-base text-shark-500 font-semibold cursor-pointer">Buy Theme</li>
                </ul>
                <div className="text-lg font-normal text-star-dust-500">
                    Call Us: <span className="text-shark-500 text-lg font-semibold">089252 97807 </span>
                </div>
            </div>
        </div>
    );
};

export default Submenu;
