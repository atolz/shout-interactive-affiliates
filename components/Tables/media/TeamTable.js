import { useState } from "react";
// import BtnIcon from "../Buttons/BtnIcon";
import Pagination from "../../Pagination";
import { Dialog, Stack } from "@mui/material";
import TextField from "../../../components/FormElements/TextField";
import ModalContainer from "../../../components/ModalContainer";
import MySelect from "../../../components/FormElements/Select";
import BtnIcon from "../../Buttons/BtnIcon";
import BtnOutlined from "../../Buttons/BtnOutlined";
import BtnOutlinedWithIcon from "../../Buttons/BtnOutlinedWithIcon";


const TeamTable = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className=" bg-white p-[2.4rem] rounded-[1.2rem]">
      <Dialog onClose={toggle} open={open}>
        <ModalContainer actionText="Add Users" onClose={toggle} headerText="Add Team" icon={<span className="icon-plus-circle text-[15px] font-bold"></span>}>
          <Stack gap={"16px"}>
            <div className="w-full flex flex-row justify-between">
                <TextField label="First name"></TextField>
                <TextField label="Last name"></TextField>
            </div>
            <TextField label="Email"></TextField>
            <MySelect label="Role"></MySelect>
            <MySelect label="Branch"></MySelect>
          </Stack>
        </ModalContainer>
      </Dialog>
      <div className="flex justify-between">
      <div className="w-full max-w-[362px]"><input
          className="border ml-auto  h-[48px] w-full max-w-[362px] px-[16px] focus:border-gray-default text-[14px] rounded-2xl border-gray-default placeholder:text-gray-default mb-[3rem]"
          placeholder="Search..."
        ></input></div>
        <div
          className="ml-auto"
          onClick={toggle}
        >
        <BtnIcon text='Add Team'  link="/celebrity/dashboard" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
      </div></div>
      <div className="w-[100%] overflow-x-scroll scroll_hide">
        <table className=" w-full border-l border-gray-lighter border-collapse">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium">
            <tr>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Name</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Email </span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Role</span>
              </th>
            </tr>
          </thead>
          <tbody className="body_light text-black-default whitespace-nowrap h-[52px]">
            <tr>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
                <p className="mt-[14px]">Pizza Jungle Enugu</p>
              </td>

              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">Lagos</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">Super - Admin</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div className="mt-[28px] flex justify-between items-center px-[20px] caption_light flex-wrap">
        <p>showing result 1-6 of 17 items</p>
        <Pagination />
      </div>
    </div>
  );
};

export default TeamTable;