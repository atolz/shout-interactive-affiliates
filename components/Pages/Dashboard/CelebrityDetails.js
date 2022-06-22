import React from "react";
import Image from 'next/image';
import LabelTag from "../../LabelTag";

const CelebrityDetails = () => {
  return (
    <div className="bg-white px-[2.9rem] md:px-[3.9rem] pb-[3rem] pt-[3rem] rounded-[1.2rem] relative mb-[2rem]">
      <LabelTag className="ml-auto mb-[1rem]" text={"Active"} color={"#0356B0"} bg={"#EBF2FD"}></LabelTag>
      {/* Details */}
      <div className="flex flex-wrap items-center mb-[2rem]">
        <img className="w-[13.8rem] h-[13.8rem]" src="/images/celebrity.png"></img>
        <div className="ml-[3rem]">
          <h2 className="display_3_heavy !mb-[1.2rem] block">David Adeleke</h2>
          <p className="subheader_light text-black-light max-w-[313px]">@Davido</p>
          <p className="subheader_light text-black-light max-w-[313px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis mauris eros nunc</p>
          <div className="mt-[2rem] flex justify-between w-[65%]">
            <Image  src='/images/notify.png' alt='social' width='20px' height='20px' />
            <Image  src='/images/youtube.png' alt='social' width='20px' height='20px' />
            <Image  src='/images/global.png' alt='social' width='20px' height='20px' />
            <Image  src='/images/facebook.png' alt='social' width='20px' height='20px' />
            <Image  src='/images/twitter.png' alt='social' width='20px' height='20px' />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className=" border-gray-light border-l px-[3rem] h-[11.1rem] grid place-items-center place-content-center">
            <h4 className="caption_light mb-[1.2rem] text-gray-dark">Industry</h4>
            <p className="title_heavy text-black-default">Music</p>
          </div>
          <div className=" border-gray-light border-x px-[5.4rem] h-[11.1rem] grid place-items-center place-content-center">
            <h4 className="caption_light mb-[1.2rem] text-gray-dark">Level of celebrity</h4>
            <p className="title_heavy text-black-default">A-List</p>
          </div>
          <div className="px-[5.4rem] h-[11.1rem] grid place-items-center place-content-center">
            <h4 className="caption_light mb-[1.2rem] text-gray-dark">Contract Month Left</h4>
            <p className="title_heavy text-black-default">3 Months</p>
          </div>
        </div>
      </div>
      {/* Duration */}
      {/* <p className=" text-right subheader_light text-black-light">
        <span className="mr-[9px]">Duration:</span>
        <span className="text-gray-darker !font-extrabold">15th Jun 2022 - 20th Dec 2023</span>
      </p> */}
    </div>
  );
};

export default CelebrityDetails;
