import React from 'react';

import Image from 'next/image';

import Input from '@/components/Shared/Input';
import PaymentImg from '@/public/assets/images/source-images/payments.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#333] py-8">
                <div className="container grid lg:grid-cols-6 gap-14">
                    <div className="col-span-2">
                        <h2 className="mb-6 text-xl font-medium text-white">Contact Us</h2>
                        <p className="text-star-dust-500 font-normal">
                            Hi, we are always open for cooperation and suggestions, contact us in one of the ways below:
                        </p>
                        <ul className="grid lg:grid-cols-2 gap-4 mt-6">
                            <li className="space-y-1">
                                <h2 className="text-star-dust-500 font-normal text-xs uppercase">Phone number</h2>
                                <p className="text-white text-sm font-medium">08925297807</p>
                            </li>
                            <li className="space-y-1">
                                <h2 className="text-star-dust-500 font-normal text-xs uppercase">Email address</h2>
                                <p className="text-white text-sm font-medium">careers@uituxsolutions.com</p>
                            </li>
                        </ul>
                        <ul className="grid lg:grid-cols-2 gap-4 mt-6">
                            <li className="space-y-1">
                                <h2 className="text-star-dust-500 font-normal text-xs uppercase">Our location</h2>
                                <p className="text-white text-sm font-medium">
                                    102, Athipalayam Rd, Ramakrishnapuram, chinnavedampatti, Coimbatore, Tamilnadu,
                                    641049
                                </p>
                            </li>
                            <li className="space-y-1">
                                <h2 className="text-star-dust-500 font-normal text-xs uppercase">Working hours</h2>
                                <p className="text-white text-sm font-medium">Mon - Fri 10:00am-06:00pm</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-medium text-white">Information</h2>
                        <ul className="text-star-dust-500 font-normal text-base space-y-2">
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Brands</li>
                            <li>Contact Us</li>
                            <li>Returns</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-medium text-white">My Account</h2>
                        <ul className="text-star-dust-500 font-normal text-base space-y-2">
                            <li>Store location</li>
                            <li>Order History</li>
                            <li>Wishlist</li>
                            <li>Newsletter</li>
                            <li>Special offers</li>
                            <li>Gift certificates</li>
                            <li>Affiliate</li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <h2 className="mb-6 text-xl font-medium text-white">Newsletter</h2>
                        <ul className="text-gray-500 font-medium space-y-2">
                            <li className="text-star-dust-500 font-normal">
                                Enter your email address below to subscribe to our newsletter and keep up to date with
                                discounts and special offers
                            </li>
                            <li className="flex items-center space-x-3">
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="user@example.com"
                                    className="bg-gallery-500 px-4 py-2 text-sm font-normal text-black"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-sm text-white text-base font-normal"
                                >
                                    Subscribe
                                </button>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <h2 className="text-star-dust-500 font-normal">Follow us on social network</h2>
                            <div className="text-star-dust-500 font-normal">Show Social network icons</div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="px-4 py-4 bg-stone-900">
                <div className=" container flex items-center justify-between">
                    <div className="text-sm text-gray-500 bottom-0 left-0 dark:text-gray-300 sm:text-center">
                        Powered by <strong className="text-white">React Js / Next Js</strong> - Designed by{' '}
                        <strong className="text-white">UITOUX Solutions</strong>
                    </div>
                    <div className="flex mt-2 space-x-5 float-right">
                        <Image src={PaymentImg} alt="payment img" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
