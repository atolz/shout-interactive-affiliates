import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Text from "../../components/FormElements/TextField";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import OnBoarding from "../../components/OnBoarding";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <OnBoarding>
      <div className="p-[20px]">
        <img src="/Shout Logo.svg" className="w-[80px] md:hidden"></img>
        <p className=" mt-8 headline_heavy text-black-default md:hidden">
          You deserve to be <br></br>celebrated
        </p>
        <img src="/Decor-1.svg" className="w-[100%] mt-10 mb-8 md:hidden"></img>
        {/* <img src="/On-Boarding-Final.svg" className="w-[522px] absolute bottom-[100px] left-[66px]"></img> */}
        <h2 className="headline_heavy mb-[37px] text-black-default">Login to Shouts</h2>
        <div className="mb-[26px]">
          <Text label="Email Address"></Text>
        </div>
        <div className="mb-[41px]">
          <Text label="Password"></Text>
        </div>
        <div
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              router.push("/auth/verification");
            }, 1500);
          }}
        >
          <BtnPrimary loading={loading} text="Login"></BtnPrimary>
        </div>
        <p className="body_light mt-[36px] text-black-light">
          First time Logging in? <a className="text-primary underline cursor-pointer">Click here.</a>
        </p>
      </div>
    </OnBoarding>
  );
};

export default Login;
