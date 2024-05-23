import React from 'react';
import logo from "../../../public/icons/Logo.svg";
import Image from 'next/image';

const Footer = () => {
    return (
        
        <footer className="flex flex-col text-black mt-10">
            <div className="flex flex-col items-start justify-around gap-5 bg-purple-50/80 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="text-xl">
                <Image src={logo} alt="heroImg" />
                    <p>IPDC Bank</p>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About Us</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Products</a>
                        </li>
                    </ul>
                </nav>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Services</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className="bg-sky-100 py-5 text-center text-sm">
                <p>&copy; 2024 IPDC Bank. All Rights Reserved.</p>
            </aside>
        </footer>
   
    );
};

export default Footer;