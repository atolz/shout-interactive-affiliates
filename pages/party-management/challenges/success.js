import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import Padding from "../../../components/Layouts/Padding";

const CreateNewChallengeSuccess = () => {
  return (
    <Padding>
      <div className="max-w-[949px]">
        <header className=" flex items-center mb-[62px]">
          <Link href={"/party-management/challenges/"}>
            <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
          </Link>
          <h1 className="display_3_heavy ml-[13px] mr-auto">Create New Challenge</h1>
        </header>
        <main className="h-[500px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1 p-[48px] flex  items-center justify-center">
          <div className=" flex flex-col items-center w-full max-w-[380px]">
            <img src="/images/success.jpg" className="mb-7"></img>
            <h1 className="display_3_heavy text-green-500 mb-6">Success!</h1>
            <p className="body_light mb-[40px]">Your challenge has been created.</p>
            <div className="flex gap-3 w-full max-w-[380px]">
              <BtnOutlined text="Create More" link="/party-management/challenges/new"></BtnOutlined>
              <div className="w-full">
                <BtnPrimary text="Done" link="/party-management/challenges/"></BtnPrimary>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Padding>
  );
};

CreateNewChallengeSuccess.Layout = BaseLayout;
export default CreateNewChallengeSuccess;
