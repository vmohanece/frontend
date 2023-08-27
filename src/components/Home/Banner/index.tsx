'use client';

import React from 'react';

import Image from 'next/image';

import SlideCarImg from '@/public/assets/images/source-images/car.png';

const Banner = () => {
    return (
        <section className="container my-8">
            <div className="bg-gallery-500 p-8 flex items-center justify-between gap-4">
                <div className="lg:max-w-sm pl-14">
                    <p className="text-3xl font-bold text-shark-500 bg-yellow-300 w-fit px-1 py-1">30% OFF</p>
                    <h2 className="text-3xl font-bold text-shark-500 pt-2">When Buying Parts With Installation</h2>
                    <p className="text-sm font-normal text-star-dust-500 pt-3">
                        Installation of parts in the service of our partners.
                    </p>
                    <button
                        type="button"
                        id="shop-now"
                        className="px-6 py-2 bg-green-500 hover:bg-green-600 mt-2 rounded-sm text-white text-base font-normal"
                    >
                        Shop Now
                    </button>
                </div>
                <div className="w-full">
                    <Image src={SlideCarImg} alt="slide img" width={640} height={400} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
