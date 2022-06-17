import React, { Children } from "react";

const OnBoarding = ({ children }) => {
  return (
    <div className="h-screen flex">
      <div className="w-[568px] bg-primary h-screen relative hidden md:block">
        <img src="/Shout Logo.svg" className="w-[140px] mt-[60px] ml-[50px]"></img>
        <p className="ml-[40px] mt-11 headline_heavy text-white">
          You deserve to be <br></br>celebrated
        </p>
        <img src="/Decor-1.svg" className="w-[100%] mt-16"></img>
        <img src="/On-Boarding-Final.svg" className="w-[522px] absolute bottom-[100px] left-[66px]"></img>
        {/* <img src="/Balloons 1.svg" className="absolute right-0 top-[60%] h-[171px]"></img> */}
      </div>
      <div className="flex-1 md:p-64 relative flex justify-center">
        <div className="max-w-[377px] w-full md:absolute md:top-2/4 md:left-1/2 md:mt-11 md:-translate-x-1/2 md:-translate-y-3/4">{children}</div>
      </div>
    </div>
  );
};

export default OnBoarding;
