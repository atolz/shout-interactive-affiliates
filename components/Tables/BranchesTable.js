import { useState } from "react";
import BtnIcon from "../Buttons/BtnIcon";
import LabelTag from "../LabelTag";
import Pagination from "../Pagination";
import { Dialog, Stack } from "@mui/material";
import TextField from "../../components/FormElements/TextField";
import ModalContainer from "../../components/ModalContainer";
import Calender from "../../components/FormElements/Calender";
import MySelect from "../../components/FormElements/Select";
import BtnPrimary from "../Buttons/BtnPrimary";


const BranchesTable = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <div className=" bg-white p-[2.4rem] rounded-[1.2rem]">
      <Dialog onClose={toggle} open={open}>
        {/* <ModalContainer actionText="Add" onClose={toggle} headerText="Add Branch" icon={<span className="icon-plus-circle text-[15px] font-bold"></span>}> */}
        <div className="px-[24px] py-[32px] rounded-[8px] md:w-[600px] w-full">
          <div className="flex items-center mb-[60px]">
            <span className="rou rounded-full w-[28px] h-[28px] bg-primary-lightest-2 flex justify-center items-center">
            <span className="icon-plus-circle text-[15px] font-bold"></span>
            </span>
            <p className="title_heavy text-black-default ml-[12.5px]">Add Branch</p>
            <span onClick={toggle} className="icon-close text-[11px] text-gray-dark ml-[auto] cursor-pointer"></span>
          </div>
          
          <Stack gap={"16px"} className="w-full justify-between flex flex-row !md:flex-row">
            <div className="w-full"><TextField label="Name" placeholder="Branch Name"></TextField></div>
            <div className="w-full"><TextField label="Location" placeholder="Branch Location"></TextField></div>
          </Stack>
          <p className="body_light text-black-default">+ Add another</p>
          <div className="md:w-[40%]  items-end ml-[auto] mt-[4rem]" >
           <BtnPrimary link="" text="Add"></BtnPrimary>
         </div>
        {/* </ModalContainer> */}

        </div>
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
        <BtnIcon text='Add Branch'  link="/brand/dashboard" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
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

export default BranchesTable;
