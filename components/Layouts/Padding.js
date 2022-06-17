import React from "react";

const Padding = (props) => {
  return <div className="w-full h-full relative p-[28px] md:px-[48px] md:py-[42px]">{props.children}</div>;
};

export default Padding;
