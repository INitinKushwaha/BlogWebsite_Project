import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="relative z-50 py-6 bg-custom-gradient-dark border-t-2 border-t-black w-full">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
                        <div>
                            <Logo width="100px" />
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            &copy; Copyright 2023. All Rights Reserved by Nitin Kushwaha.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
                        <div>
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
                        <div>
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
                        <div>
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
