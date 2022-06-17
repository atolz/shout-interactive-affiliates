import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import Text from "../../components/FormElements/TextField";
import BtnPrimary from "../../components/Buttons/BtnPrimary";
import BtnOutlined from "../../components/Buttons/BtnOutlined";
import OnBoarding from "../../components/OnBoarding";

const Verification = () => {
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
        <h2 className="headline_heavy mb-[37px] text-black-default">Hello, James...</h2>
        <p className="subheader_light mb-[24px]">We sent you a unique code via mail</p>
        <Text label="Input your code"></Text>
        <div className="flex gap-8 mt-[38px]">
          <BtnOutlined link="/auth/login" text={<span>Go Back</span>}></BtnOutlined>
          <div
            className="w-full"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                router.push("/super-admin/dashboard");
              }, 1500);
            }}
          >
            <BtnPrimary text="Proceed" loading={loading}></BtnPrimary>
          </div>
        </div>
      </div>
    </OnBoarding>
  );
};

export default Verification;
