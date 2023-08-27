import React from 'react';

import Banner from './Banner';
import FeatureProduct from './FeatureProduct';
import PartsList from './PartsList';
import Products from './Products';
import Trending from './Trending';
import Sale from './Sale';

const Home = () => {
    return (
        <>
            <Banner />
            <PartsList />
            <FeatureProduct />
            <Sale />
            <Products />
            <Trending />
        </>
    );
};

export default Home;
