'use client';

import React from 'react';

import ProductCard from '@/components/Shared/ProductCard';

const Products = () => {
    return (
        <div className="container grid md:grid-cols-3 gap-4 md:gap-10 mt-8">
            <ProductCard title="Top Rated Products" />
            <ProductCard title="Special Offers" />
            <ProductCard title="Best Sellers" />
        </div>
    );
};

export default Products;
