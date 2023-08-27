'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CarIcon from '@/components/CoreUI/SvgIcons/CarIcon';
import CartIcon from '@/components/CoreUI/SvgIcons/CartIcon';
import ChevronUpDown from '@/components/CoreUI/SvgIcons/ChevronUpDown';
import HeartIcon from '@/components/CoreUI/SvgIcons/HeartIcon';
import PersonIcon from '@/components/CoreUI/SvgIcons/PersonIcon';
import RupeesIcon from '@/components/CoreUI/SvgIcons/RupeesIcon';
import SearchIcon from '@/components/CoreUI/SvgIcons/SearchIcon';
import Logo from '@/public/assets/images/source-images/logo.png';

const NavBar = () => {
    return (
        <nav className="container flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-14 lg:items-center my-4">
            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 w-full">
                <div>
                    <Image src={Logo} alt="logo" width={204} height={84} />
                </div>
                <div className="flex w-full flex-wrap items-center gap-4 flex-1">
                    <div className="relative">
                        <div className="absolute left-2.5 top-2.5">
                            <CarIcon />
                        </div>
                        <input
                            type="text"
                            id="search vehicle"
                            name="search vehicle"
                            placeholder="Search Vehicle"
                            className="max-[240px] bg-yellow-300 px-10 py-1.5 text-base font-normal placeholder:text-[#262626] text-[#262626] rounded-sm outline-none border focus:border focus:border-gallery-500"
                        />
                        <div className="absolute right-2 top-2">
                            <ChevronUpDown />
                        </div>
                    </div>
                    <div className="relative w-full flex-1 bg-gallery-500">
                        <input
                            type="text"
                            id="search vehicle"
                            name="search vehicle"
                            placeholder="Enter keyword and Part Number"
                            className="w-full bg-gallery-500 pl-4 pr-10 py-1.5 text-base font-normal placeholder:text-[#262626] text-[#262626] rounded-sm outline-none border focus:border focus:border-gallery-500"
                        />
                        <div className="absolute right-2 top-2">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-shrink-0 items-center">
                <div className="hover:bg-gallery-500 px-4 py-2 rounded-sm cursor-pointer relative">
                    <HeartIcon />
                    {/* Like count show */}
                    <div className="absolute right-1 top-0 px-1.5 py-px rounded-tl-md text-xs rounded-br-md bg-green-600 font-medium text-white">
                        0
                    </div>
                </div>
                <Link
                    href="/register"
                    className="flex flex-shrink-0 items-center gap-3 hover:bg-gallery-500 px-4 py-2 rounded-sm"
                >
                    <div>
                        <PersonIcon />
                    </div>
                    <div>
                        <p className="text-sm font-normal text-star-dust-500">Hello, Login</p>
                        <h4 className="text-shark-500 text-lg font-semibold">My Account</h4>
                    </div>
                </Link>
                <div className="flex items-center flex-shrink-0 gap-3 hover:bg-gallery-500 px-4 py-2 rounded-sm cursor-pointer">
                    <div className="relative">
                        <CartIcon />
                        {/* Cart count show */}
                        <div className="absolute -right-[7px] -top-[7px] px-1.5 py-px rounded-tl-md text-xs rounded-br-md bg-green-600 font-medium text-white">
                            7
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-normal text-star-dust-500">Shopping Cart</p>
                        <h4 className="flex items-center gap-1">
                            <RupeesIcon /> <span className="text-shark-500 text-lg font-semibold">1468.60</span>
                        </h4>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
