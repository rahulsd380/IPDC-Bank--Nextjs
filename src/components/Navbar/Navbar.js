"use client"

import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import downArrow from "../../../public/icons/down-arrow-5-svgrepo-com.svg";
import rightArrow from "../../../public/icons/right-arrow-svgrepo-com.svg";

const Navbar = () => {
  const navlinks = [
    {
      label: "Home",
      path: "",
    },
    {
      label: "About Us",
      path: "about-us",
    },
    {
      label: "Products",
      path: "Products",
    },
  ];

  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ['Web Development', 'App Development', 'Graphics Design', 'UI/UX Design', 'SEO'];
  
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close)
  }, []);
  return (
    <div className="font-Poppins flex justify-between items-center mt-5">
      <Link href={"/"}>
      <Image src={logo} alt="Logo" />
      </Link>

      <div className="flex items-center gap-14">
        {navlinks.map((link, id) => (
          <Link key={id} href={`/${link.path}`}>
            {link.label}
          </Link>
        ))}

<div ref={dropDownRef} className="relative mx-auto w-fit">
      <button onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-2">Services <Image className="w-6" src={downArrow} alt="Logo" /></button>
      <ul className={`${open ? 'visible' : 'invisible'} bg-[#F9F5FF] absolute top-10 z-50 w-44 rounded space-y-2`}>
        {items.map((item, idx) => (
          <li 
            key={idx}
            className={` ${open ? 'opacity-100 duration-500' : ''} hover:bg-gray-100 py-2 px-2 w-full flex items-center justify-between`}
            style={{ transform: `translateY(${open ? 0 : (idx + 1) * 10}px)`}}
          >
            {item}
            <Image className="w-6" src={rightArrow} alt="Logo" />
          </li>
        ))}
      </ul>
    </div>
      </div>

      

      <button className="bg-[#706FE5] p-3 rounded-md text-white">
        Sign Up Now
      </button>
    </div>
  );
};

export default Navbar;
