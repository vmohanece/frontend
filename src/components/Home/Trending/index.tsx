import React from 'react';

import FreeShippingIcon from '@/components/CoreUI/SvgIcons/FreeShippingIcon';
import SafetyIcon from '@/components/CoreUI/SvgIcons/SafetyIcon';
import Support24Icon from '@/components/CoreUI/SvgIcons/Support24Icon';
import TagIcon from '@/components/CoreUI/SvgIcons/TagIcon';

const Trending = () => {
    const trendingData = [
        {
            id: 1,
            icon: <FreeShippingIcon />,
            title: 'Free Shipping',
            description: 'For orders from $50',
        },
        {
            id: 2,
            icon: <Support24Icon />,
            title: 'Support 24/7',
            description: 'Call us anytime',
        },
        {
            id: 3,
            icon: <SafetyIcon />,
            title: '100% Safety',
            description: 'Only secure payments',
        },
        {
            id: 4,
            icon: <TagIcon />,
            title: 'Hot Offers',
            description: 'Discounts up to 90%',
        },
    ];
    return (
        <div className="container border-t border-gallery-500 my-8">
            <ul className="py-8 px-8 grid md:grid-cols-4 gap-10">
                {trendingData.map((data: any) => {
                    return (
                        <li key={data.id} className="flex gap-4 items-center">
                            <div>{data.icon}</div>
                            <div>
                                <h4 className="font-bold text-shark-500 text-base">{data.title}</h4>
                                <p className="text-sm font-normal text-star-dust-500">{data.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Trending;
