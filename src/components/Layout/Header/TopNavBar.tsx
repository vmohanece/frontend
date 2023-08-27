'use client';

import React from 'react';

import ChevronDown from '@/components/CoreUI/SvgIcons/ChevronDown';

const TopNavBar = () => {
    return (
        <div className="w-full">
            <div className="container flex flex-wrap gap-4 justify-between items-center">
                <ul className="flex flex-wrap items-center gap-4 pt-3 pb-1">
                    <li className="text-sm font-normal text-star-dust-500">About Us</li>
                    <li className="text-sm font-normal text-star-dust-500">Contacts</li>
                    <li className="text-sm font-normal text-star-dust-500">Store Location</li>
                    <li className="text-sm font-normal text-star-dust-500">Track Order</li>
                    <li className="text-sm font-normal text-star-dust-500">Blog</li>
                </ul>
                <ul className="flex flex-wrap items-center gap-4 pt-3 pb-1">
                    <li className="flex items-center space-x-1.5 text-sm font-normal text-star-dust-500">
                        <span>Compare:</span>
                        <span className="font-bold text-shark-500">2</span>
                    </li>
                    <li className="flex items-center space-x-1.5 text-sm font-normal text-star-dust-500">
                        <span>Currency:</span>
                        <span className="font-bold text-shark-500">RS</span>
                        <ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center space-x-1.5 text-sm font-normal text-star-dust-500">
                        <span>Language:</span>
                        <span className="font-bold text-shark-500">EN</span>
                        <ChevronDown className="w-4 h-4" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopNavBar;
