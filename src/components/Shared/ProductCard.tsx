import React, { useState } from 'react';

import Image from 'next/image';

import TyreImg from '@/public/assets/images/source-images/product-7.jpeg';

import QuickViewIcon from '../CoreUI/SvgIcons/QuickViewIcon';
import StarIcon from '../CoreUI/SvgIcons/StarIcon';

const ProductCard = (props: any) => {
    const [products, setProducts] = useState([]);
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
            let dataLimit;
            if (title == "Top Rated Products") {
                dataLimit = data.data.slice(0, 3);
            }
            else if (title == "Special Offers") {
                dataLimit = data.data.slice(4, 7);
            }
            else {
                dataLimit = data.data.slice(8, 11);
            }
            setProducts(dataLimit);
        });
    const { title } = props;
    return (
        <div>
            <h2 className="text-shark-500 text-xl font-bold border-b border-gallery-500 pb-3">{title}</h2>
            <div className="space-y-6 mt-4">
                {products.map((data: any) => {
                    return (
                        <div
                            key={data.id}
                            className="flex items-center gap-3 bg-white shadow-login pl-4 pr-6 py-5 relative"
                        >
                            {/* Quick view Icon */}
                            <div className="absolute top-3 right-3">
                                <QuickViewIcon />
                            </div>
                            <div className="w-[120px] h-[120px] object-cover">
                                <Image src={'/assets/images/source-images/' + data.filename} width="800" height="800" alt="product img" />
                            </div>
                            <div>
                                <h2 className="text-shark-500 text-base font-normal pt-1">{data.name}</h2>
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
                                <p className="text-xl font-medium text-shark-500 pt-2">₹{data.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCard;
