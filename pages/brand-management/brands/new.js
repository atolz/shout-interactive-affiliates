import { useState } from "react";

import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import Padding from "../../../components/Layouts/Padding";
import MyAlert from "../../../components/Alert";
import TextInput from "../../../components/FormElements/TextField";

const CreateNewBrand = () => {
  const [showAlert, setShowALert] = useState(false);
  function onCreate() {
    setShowALert(true);
  }
  function onClose() {
    setShowALert(false);
  }
  return (
    <div className="bg bg-gray-lightest-1">
      <Padding>
        <div className="max-w-[981px]">
          <header className=" flex items-center mb-[100px]">
            <Link href={"/brand-management/brands/"}>
              <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
            </Link>
            <h1 className="display_3_heavy ml-[13px] mr-auto">Add New Brand</h1>
          </header>
          <main className="min-h-[664px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1">
            {showAlert && (
              <div className="mb-[48px]">
                <MyAlert text={"The Brand “Pepsi” has been added."} title="Success" handleClose={onClose}></MyAlert>
              </div>
            )}

            <TextInput placeholder="Enter name" label="Brand Name" status="" message="status message goes here"></TextInput>
            <div className="flex gap-4 max-w-[380px] mt-[50px]">
              <BtnOutlined text="Cancel" link="/brand-management/brands"></BtnOutlined>
              <div className="w-full" onClick={onCreate}>
                <BtnPrimary text="Add Brand"></BtnPrimary>
              </div>
            </div>
          </main>
        </div>
      </Padding>
    </div>
  );
};

CreateNewBrand.Layout = BaseLayout;

export default CreateNewBrand;
