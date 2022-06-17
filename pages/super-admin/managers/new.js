import Link from "next/link";
import Padding from "../../../components/Layouts/Padding";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import MyAlert from "../../../components/Alert";
import TextInput from "../../../components/FormElements/TextField";
import { useState } from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import ManagerSwitcher from "../../../components/ManagerSwitcher";

const CreateNewManager = () => {
  const [showAlert, setShowALert] = useState(false);

  const onCreate = () => {
    setShowALert(true);
  };

  const onClose = () => {
    setShowALert(false);
  };

  return (
    <div className="bg bg-gray-lightest-1">
      <Padding>
        <ManagerSwitcher></ManagerSwitcher>
        <div className="max-w-[981px]">
          <header className=" flex items-center">
            <Link href={"/super-admin/managers/"}>
              <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
            </Link>
            <h1 className="display_3_heavy ml-[13px] mr-auto">Create New Manager</h1>
          </header>
          <p className="subheader_light mb-[48px] mt-[5px]">Here, you can create a New Manager into any of the above categories</p>

          <main className="min-h-[296px] rounded-3xl border-my-border-color--1 bg-white  max-w-[942px] md:p-[64px] p-[20px]">
            <div className="grid md:grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
              <TextInput placeholder="Enter name" label="Brand Name" status="" message="status message goes here"></TextInput>
              <TextInput placeholder="Enter name" label="Brand Name" status="" message="status message goes here"></TextInput>
              <TextInput placeholder="Enter name" label="Brand Name" status="" message="status message goes here"></TextInput>
              <TextInput placeholder="Enter name" label="Brand Name" status="" message="status message goes here"></TextInput>
            </div>
          </main>

          {showAlert && (
            <div className="my-[48px] max-w-[942px]">
              <MyAlert text={"A new Affiliate Manager has been created. An email has been sent to the Manager."} title="Success" handleClose={onClose}></MyAlert>
            </div>
          )}

          <div className="flex gap-4 max-w-[380px] mt-[50px]">
            <BtnOutlined text="Cancel" link="/super-admin/managers"></BtnOutlined>
            <div className="w-full" onClick={onCreate}>
              <BtnPrimary text="Create Account"></BtnPrimary>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  );
};

CreateNewManager.Layout = BaseLayout;
export default CreateNewManager;
