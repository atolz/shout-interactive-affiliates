import { useState } from "react";
// import BtnIcon from "../Buttons/BtnIcon";
import Pagination from "../../Pagination";
import { Dialog, Stack } from "@mui/material";
import TextField from "../../FormElements/TextField";
import ModalContainer from "../../ModalContainer";
import MySelect from "../../FormElements/Select";
import BtnIcon from "../../Buttons/BtnIcon";
import LabelTag from "../../LabelTag";
import LabelOutLinedBtn from "../../Buttons/LabelBtn";


const CampaignTable = () => {
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
      <input
          className="border ml-auto  h-[48px] w-full max-w-[362px] px-[16px] focus:border-gray-default text-[14px] rounded-2xl border-gray-default placeholder:text-gray-default mb-[3rem]"
          placeholder="Search..."
        ></input>
        
      <div className="w-[100%] overflow-x-scroll scroll_hide">
        <table className=" w-full border-l border-gray-lighter border-collapse">
          <thead className="text-bl text-black-light whitespace-nowrap bg-gray-lightest-2 caption_heavy h-[48px] font-medium">
            <tr>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px] ">
                <span className=" align-text-bottom mt-auto">Name of Campaign</span>
              </th>
              
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Reach</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Conversions </span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Status </span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Duration</span>
              </th>
              <th className="border-b border-r border-gray-lighter font-medium text-left pt-[10px] px-[16px]">
                <span className=" align-text-bottom mt-auto">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="body_light text-black-default whitespace-nowrap h-[52px]">
            <tr>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
                <p className="mt-[14px]">Make Noise</p>
              </td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">200</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">100</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
                <LabelTag text={"Active"}></LabelTag>
              </td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">21st May-21 June 2022</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
              <LabelOutLinedBtn text='View' />
              </td>
            </tr>
            <tr>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
                <p className="mt-[14px]">Spring Break Fest</p>
              </td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">56</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">32</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
                <LabelTag text={"Pending"} color='rgba(219, 145, 2, 1)' bg='rgba(248, 248, 247, 1)'></LabelTag>
              </td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">21st May-21 June 2022</td>
              <td className="border-b border-r border-gray-lighter px-[16px] text-left align-text-bottom">
              <LabelOutLinedBtn text='View' />
              </td>
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

export default CampaignTable;
