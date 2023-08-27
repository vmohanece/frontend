'use client';

import React from 'react';

const Sale = () => {
    return (<div className="w-full">
        <div className="container flex flex-wrap gap-4 justify-between items-center">
            <ul className="grid grid-cols-2">
                <li className='px-4 relative'>
                    <img src='./assets/images/source-images/banner1.jpeg'></img>
                    <h3 className="absolute blocktext-2xl font-extrabold text-yellow-400 top-4 left-5">Motor Oils</h3>
                    <p className="absolute text-l font-bold text-white top-12 left-5">Synthatic motor oil with free shipping
                        Friction free life guranteed</p>
                </li>
                <li className='px-4 relative'>
                    <img src='./assets/images/source-images/banner2.jpeg'></img>
                    <h3 className="absolute blocktext-2xl font-extrabold text-yellow-400 top-4 left-5">Save up to ₹500</h3>
                    <p className="absolute text-l font-bold text-white top-12 left-5">Luxuirous interior part for the real asthetes
                        Leather, fabric, Ivory and more..</p>
                </li>
            </ul>
        </div>
    </div>);
};

export default Sale;
