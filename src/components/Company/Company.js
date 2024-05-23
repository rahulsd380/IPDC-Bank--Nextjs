import React from "react";
import airbnb from "../../../public/icons/Company Logo/airbnb.svg";
import amazon from "../../../public/icons/Company Logo/amazon.svg";
import creativeMerket from "../../../public/icons/Company Logo/creativeMerket.svg";
import google from "../../../public/icons/Company Logo/google.svg";
import shopify from "../../../public/icons/Company Logo/shopify.svg";
import Image from "next/image";

const Company = () => {
  const companyImage = [airbnb, amazon, creativeMerket, google, shopify];
  return (
    <div className="flex flex-col gap-10 bg-purple-50/80 p-14 rounded-lg mt-16">
      <h1 className="text-[#1E1F4B] text-xl font-bold text-center">
        Trusted by greatest companies
      </h1>

      <div className="flex items-center gap-24 justify-center">
        {companyImage.map((image, id) => (
          <Image key={id} src={image} alt="airbnb" />
        ))}
      </div>
    </div>
  );
};

export default Company;
