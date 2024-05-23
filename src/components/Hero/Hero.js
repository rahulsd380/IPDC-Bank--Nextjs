import React from "react";
import heroImg from "../../../public/images/heroimg.png"
import playBtn from "../../../public/icons/playBtn.svg"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
     <div>

     <h1 className="text-[60px] font-bold text-[#1E1F4B]">We Design Impactful ‍Digital <span className="text-[#706FE5]">Products</span></h1>

<p className="text-[#2E3E5C] text-xl font-normal font-Poppins mt-8 max-w-[500px]">
Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.
</p>

<div className="flex items-center gap-6 font-Poppins mt-6">
<button className='bg-[#706FE5] p-3 rounded-md text-white text-lg font-semibold'>
Contact Us
            </button>

<button className="flex items-center gap-3 text-start text-base text-[#2E3E5C]">
<Image
            src={playBtn}
            alt="heroImg"
            />
            Watch our <br/> introduction video
</button>
</div>
     </div>


      <Image
      className="w-[500px]"
            src={heroImg}
            alt="heroImg"
            />
    </div>
  );
};

export default Hero;
