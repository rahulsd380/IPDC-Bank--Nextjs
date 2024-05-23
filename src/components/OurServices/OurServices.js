import React from 'react';
import code from "../../../public/icons/Service icons/code.svg"
import Image from 'next/image';

const OurServices = () => {
    const services = [
        {
            icon: code,
            title: "Graphic Design",
            details: "I am a web designer specializing in visually stunning and user-friendly websites, including design, development, UX/UI, graphic design, SEO, and maintenance."
        },
        {
            icon: code,
            title: "Graphic Design",
            details: "I am a web designer specializing in visually stunning and user-friendly websites, including design, development, UX/UI, graphic design, SEO, and maintenance."
        },
        {
            icon: code,
            title: "Graphic Design",
            details: "I am a web designer specializing in visually stunning and user-friendly websites, including design, development, UX/UI, graphic design, SEO, and maintenance."
        },
        {
            icon: code,
            title: "Graphic Design",
            details: "I am a web designer specializing in visually stunning and user-friendly websites, including design, development, UX/UI, graphic design, SEO, and maintenance."
        },
        {
            icon: code,
            title: "Graphic Design",
            details: "I am a web designer specializing in visually stunning and user-friendly websites, including design, development, UX/UI, graphic design, SEO, and maintenance."
        },
        {
            icon: code,
            title: "Graphic Design",
            details: "I am a web designer specializing in visually stunning and user-friendly websites, including design, development, UX/UI, graphic design, SEO, and maintenance."
        },
    ]
    return (
        <div>
            <h1 className='text-[40px] font-bold text-[#1E1F4B]'>We create world-class digital products</h1>
            <p className='text-[#2E3E5C] text-xl font-normal font-Poppins mt-3'>By information about design the world to the best instructors, heatc helping By information</p>

            <div className="grid grid-cols-3 gap-7 mt-10">
                {
                    services.map((service, id) => 
<div key={id} className='bg-[#F9F5FF] p-6 rounded-lg'>
            <div className='flex justify-center'>
            <Image
            // key={id}
            src={service?.icon}
            alt="icons"
            />
            </div>
            <h1 className='text-[#1E293B] text-lg font-semibold text-center mt-6'>{service?.title}</h1>
            <p className='text-[#475569] text-base font-normal text-center mt-4'>{service?.details}</p>
            </div>

                    )
                }
            </div>
        </div>
    );
};

export default OurServices;