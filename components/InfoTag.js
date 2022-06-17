import React from "react";

const InfoTag = ({ text }) => {
  return (
    <div className="bg- bg-primary-lightest-2 rounded-full h-[36px] text-center flex items-center justify-center text-[#007FC5]">
      <p className="small_light">{text}</p>
    </div>
  );
};

export default InfoTag;
