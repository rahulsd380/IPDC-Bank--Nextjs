import React from "react";
import serviceImg from "../../../../public/images/heroimg.png";
import Image from "next/image";
import playBtn from "../../../../public/icons/playBtn.svg";

const page = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[60px] font-bold text-[#1E1F4B] capitalize">
          Explore what services we <span className="text-[#706FE5]">Offer</span>
        </h1>

        <p className="text-[#2E3E5C] text-xl font-normal font-Poppins mt-8 max-w-[500px]">
          Help find solutions with intitutive and in accordance with client
          business goals. we provide a high-quality services.
        </p>

        <div className="flex items-center gap-6 font-Poppins mt-6">
          <button className="bg-[#706FE5] p-3 rounded-md text-white text-lg font-semibold">
            Contact Us
          </button>

          <button className="flex items-center gap-3 text-start text-base text-[#2E3E5C]">
            <Image src={playBtn} alt="heroImg" />
            Watch our <br /> introduction video
          </button>
        </div>
      </div>

      <Image className="w-[500px]" src={serviceImg} alt="heroImg" />
    </div>
  );
};

export default page;
