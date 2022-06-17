import { Stack } from "@mui/material";
import React, { useState, useRef } from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
// import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import Text from "../../../components/FormElements/TextField";
import Select from "../../../components/FormElements/Select";
import RadioGroupBtn from "../../../components/FormElements/RadioBtn";
import Padding from "../../../components/Layouts/Padding";
import Upload from "../../../components/Upload/Upload";
import UploadIndicator from "../../../components/Upload/Upload-Indicator";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Container981px from "../../../components/Layouts/Container-981px";

const EditAdvert = () => {
  const [advertType, setAdsType] = useState("");

  //useRef hook...
  const advertBrand = useRef();
  const advertAmount = useRef();

  //This function is passed into the radio group button and gets called when one of the radio children gets changed.
  //The value is the currently selected radio value...
  function setSelectedType(event, value) {
    setAdsType(value);
    console.log("setting selected advert type", value);
  }

  const onSubmit = () => {
    console.log("submitting...");
    console.log("advert amoutn valuue...", advertAmount.current.value);
    console.log("advert brand...", advertBrand.current.value);
    console.log("advert type...", advertType);
  };

  return (
    <Padding>
      <Container981px>
        <header className=" flex items-center mb-[62px] flex-wrap">
          <Link href={"/brand-management/adverts/"}>
            <span className="icon-arrow-circle-left text-[32px] text-black cursor-pointer"></span>
          </Link>
          <h1 className="display_3_heavy ml-[13px] mr-auto ">Edit Advert</h1>
          <div className="mt-5 md:mt-0">
            <BtnIcon text="Delete Advert" color="#F03738" link=" " icon={<span className="icon-trash-alt"></span>}></BtnIcon>
          </div>
        </header>
        <main className="max-w-[981px] min-h-[664px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1 p-12 md:p-[48px] flex flex-col">
          <div className="flex justify-between flex-wrap">
            <div className="flex-1 mr-9">
              <p className="caption_heavy text-black-default">Advert Type</p>
              <form>
                <Stack gap={"28px"}>
                  <RadioGroupBtn action={setSelectedType} childrenRadio={["Campaign", "Single Advert"]}></RadioGroupBtn>
                  <Text placeholder="e.g Pepsi" label="Brand" reference={advertBrand}></Text>
                  <Text placeholder="e.g #4,000,000" label="Amount" reference={advertAmount}></Text>
                  {/* <Select placeholder="www.pepsi.com" label="Link" />
                  <Calender label="Run Time"></Calender> */}
                </Stack>
              </form>
            </div>
            <div className="max-w-[350px]">
              <Upload></Upload>
              <p className="mt-[12px] mb-[48px]">
                <span className="icon-info-circle text-[13px] text-black-default bg-primary-lightest-2 p-2 rounded-full"></span>
                <span className="ml-[10px] caption_light text-black-light">All files should be submitted with an aspect ratio of [aspect ratio] and dimentions of [dimensions].</span>
              </p>
              <UploadIndicator fileName={"pepsi.co...mp4"}></UploadIndicator>
            </div>
          </div>
          <div className="flex gap-4 max-w-[380px] mt-[48px]">
            <BtnOutlined text="Cancel" link="/brand-management/adverts"></BtnOutlined>
            <BtnPrimary text="Edit Advert" link="/brand-management/adverts/success" handleClick={onSubmit}></BtnPrimary>
          </div>
        </main>
      </Container981px>
    </Padding>
  );
};

EditAdvert.Layout = BaseLayout;
export default EditAdvert;
