import Pagination from "@mui/material/Pagination";
import BtnOutlinedWithIcon from "../../Buttons/BtnOutlinedWithIcon";

const CreatedLinksTable = () => {
  return (
    <div className="w-[100%] overflow-x-scroll scroll_hide">
      <table className="border-l border-gray-lighter border-collapse min-w-[795px]">
        <thead className="text-bl text-black-light bg-gray-lightest-2 caption_heavy h-[48px] ">
          <tr>
            <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[119px]">
              <span className=" align-text-bottom mt-auto">Date Added</span>
            </th>
            <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[236px]">
              <span className=" align-text-bottom mt-auto">No. of Clicks</span>
            </th>
            <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[189px]">
              <span className=" align-text-bottom mt-auto">Expenses Made</span>
            </th>
            <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[329px]">
              <span className=" align-text-bottom mt-auto">Link Type</span>
            </th>
            <th className="border-b border-r border-gray-lighter font-medium text-right pt-[10px] px-[16px] w-[221px]">
              <span className=" align-text-bottom mt-auto">Link</span>
            </th>
          </tr>
        </thead>
        <tbody className="caption_light text-black-default h-[48px]">
          <tr>
            <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">12 Nov 2021</td>
            <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">Pepsi</td>
            <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">4</td>
            <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom"># 8,000,000</td>
            <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom justify-end flex">
              {" "}
              <BtnOutlinedWithIcon color="green" text="Copy Link" icon={<span className="icon-copy text-success-default text-[14px]"> </span>}></BtnOutlinedWithIcon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreatedLinksTable;
