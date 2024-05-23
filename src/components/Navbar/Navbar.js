import React from 'react';
import logo from "../../../public/icons/Logo.svg"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const navlinks = [
        {
            label: "Home",
            path: ""
        },
        {
            label: "About Us",
            path: "about-us"
        },
        {
            label: "Service",
            path: "service"
        },
        {
            label: "Products",
            path: "Products"
        },
    ]
    return (
        <div className='font-Poppins flex justify-between items-center mt-5'>
            <Image
            src={logo}
            alt="Logo"
            />

            <div className='flex items-center gap-14'>
            {
                navlinks.map((link, id) => 
                    <Link key={id} href={`/${link.path}`}>{link.label}</Link>
                )
            }
            </div>

            <button className='bg-[#706FE5] p-3 rounded-md text-white'>
                Sign Up Now
            </button>
        </div>
    );
};

export default Navbar;