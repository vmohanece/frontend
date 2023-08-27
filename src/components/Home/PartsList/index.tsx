'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import BrandIcon from '@/public/assets/images/source-images/brand-1.png';

const PartsList = () => {
    const [brands, SetBrands] = useState([]);
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://localhost:4000/brand', requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.status !== 200) {
                return;
            }
            SetBrands(data.data);
        });
    return (
        <section className="my-4 container">
            <ul className="grid grid-rows-2 grid-cols-8 border-t border-l border-gallery-500">
                {brands.map((data: any) => {
                    return (
                        <li key={data.id} className="px-8 py-4 border-r border-b border-gallery-500 space-y-5">
                            <div className="h-[75px]">
                                <Image src={'/assets/images/source-images/' + data.filename} width="96" height="96" alt="brand name" className="object-cover" />
                            </div>
                            <p className="text-center uppercase text-star-dust-500 text-base font-normal">{data.name}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default PartsList;
