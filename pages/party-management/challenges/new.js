import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import Padding from "../../../components/Layouts/Padding";
import Upload from "../../../components/Upload/Upload";
import Text from "../../../components/FormElements/TextField";
import InfoTag from "../../../components/InfoTag";

const CreateChallenge = () => {
  return (
    <div className="bg-gray-lightest-1">
      <Padding>
        <div className="max-w-[942px]">
          <header className="flex justify-between mb-[52px] items-center">
            <div>
              <Link href={"/party-management/challenges/"}>
                <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
              </Link>
              <h2 className="display_3_heavy ml-[13px]">Create New Challenge</h2>
              <p className="subheader_light ">Here, you can create new Gift Goal Challenges</p>
            </div>
          </header>

          <main className="min-h-[664px] rounded-3xl border-my-border-color--1 bg-white p-[20px] md:p-[48px]">
            <div className="flex mb-[64px] gap-8 flex-wrap">
              <div className="flex-1">
                <Text label="Challenge name"></Text>
              </div>
              <div className="flex-1">
                <Text label="Token required to complete this challenge"></Text>
              </div>
            </div>
            <div className="max-w-[370px] text-center">
              <Upload></Upload>
              <p className="my-[18px] small_light ">Max 10MB for pictures. Max 40MB for videos</p>
              <InfoTag text="Challenges with great cover image/video get more engegements"></InfoTag>
            </div>
            <div className="flex gap-4 max-w-[380px]  mt-[50px]">
              <BtnOutlined text="Cancel" link={"/party-management/challenges"}></BtnOutlined>

              <BtnPrimary text="Create Challenge" link={"/party-management/challenges/success"}></BtnPrimary>
            </div>
          </main>
        </div>
      </Padding>
    </div>
  );
};

CreateChallenge.Layout = BaseLayout;
export default CreateChallenge;
// export default CreateChallenge;
