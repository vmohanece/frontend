'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import CartIconLarge from '@/components/CoreUI/SvgIcons/CartIconLarge';
import QuickViewIcon from '@/components/CoreUI/SvgIcons/QuickViewIcon';
import StarIcon from '@/components/CoreUI/SvgIcons/StarIcon';
import WheelImg from '@/public/assets/images/source-images/product-1.jpeg';

const FeatureProduct = () => {
    const [fp, setFp] = useState([]);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://localhost:4000/products', requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.status !== 200) {
                return;
            }
            const fpdatas = data.data.slice(0, 5);
            setFp(fpdatas);
        });
    return (
        <div className="py-12 container">
            <div className="flex justify-between items-center border-b border-gallery-500 pb-2">
                <h2 className="text-shark-500 text-xl font-bold">Feature Products</h2>
                <ul className="flex items-center gap-3">
                    <li className="text-sm text-white px-3 cursor-pointer py-1 rounded-tl-2xl rounded-br-2xl bg-shark-500">
                        All
                    </li>
                    <li className="text-sm text-shark-500 px-3 cursor-pointer py-1 rounded-tl-2xl rounded-br-2xl bg-white">
                        Power Tool
                    </li>
                    <li>Hand Tool</li>
                    <li>Plumbing</li>
                    <li className="flex items-center gap-2">
                        <div>Left</div>
                        <div>Right</div>
                    </li>
                </ul>
            </div>
            <div className="py-4 grid grid-cols-5 gap-4">
                {fp.map((data: any) => {
                    return (
                        <div key={data.id} className="bg-white shadow-login px-4 py-8 relative">
                            {/* Quick view Icon */}
                            <div className="absolute top-4 right-4">
                                <QuickViewIcon />
                            </div>
                            {data === 0 ? (
                                <div className="bg-blue-800 px-4 py-1 rounded-tl-2xl rounded-br-2xl text-white text-sm uppercase rounded-sm w-fit absolute left-4 top-4">
                                    Hot
                                </div>
                            ) : null}
                            <div className="w-[214px] h-[214px] object-cover">
                                <Image src={'/assets/images/source-images/' + data.filename} width="800" height="800" alt="product img" />
                            </div>
                            <p className="text-star-dust-500 text-xs font-normal">{data.code}</p>
                            <h2 className="text-shark-500 text-base font-normal pt-1">
                                {data.name}
                            </h2>
                            <div className="flex gap-2 pt-1 items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((star) => (
                                        <div key={star}>
                                            <StarIcon />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-star-dust-500 text-xs font-normal">26 reviews</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 pt-4 pr-4">
                                <p className="text-xl font-medium text-shark-500">₹{data.price}</p>
                                <CartIconLarge />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeatureProduct;
