import React from "react";
import LabelTag from "../../LabelTag";

const BrandDetails = () => {
  return (
    <div className="bg-white px-[2.9rem] md:px-[3.9rem] pb-[3rem] pt-[3rem] rounded-[1.2rem] relative mb-[2rem]">
      <LabelTag className="ml-auto mb-[1rem]" text={"Active"} color={"#0356B0"} bg={"#EBF2FD"}></LabelTag>
      {/* Details */}
      <div className="flex flex-wrap items-center mb-[2rem]">
        <img className="w-[13.8rem] h-[13.8rem]" src="/images/pizza.png"></img>
        <div className="ml-[3rem]">
          <h2 className="display_3_heavy !mb-[1.2rem] block">Pizza Jungle</h2>
          <p className="subheader_light text-black-light max-w-[313px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis mauris eros nunc</p>
        </div>
        <div className="flex flex-wrap">
          <div className=" border-gray-light border-l px-[5.4rem] h-[11.1rem] grid place-items-center place-content-center">
            <h4 className="caption_light mb-[1.2rem] text-gray-dark">Category</h4>
            <p className="title_heavy text-black-default">Food</p>
          </div>
          <div className=" border-gray-light border-x px-[5.4rem] h-[11.1rem] grid place-items-center place-content-center">
            <h4 className="caption_light mb-[1.2rem] text-gray-dark">Products</h4>
            <p className="title_heavy text-black-default">02</p>
          </div>
        </div>
      </div>
      {/* Duration */}
      <p className=" text-right subheader_light text-black-light">
        <span className="mr-[9px]">Duration:</span>
        <span className="text-gray-darker !font-extrabold">15th Jun 2022 - 20th Dec 2023</span>
      </p>
    </div>
  );
};

export default BrandDetails;
