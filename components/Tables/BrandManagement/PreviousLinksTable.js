import Pagination from "@mui/material/Pagination";
import BtnOutlinedWithIcon from "../../Buttons/BtnOutlinedWithIcon";

const PreviousLinksTable = () => {
  return (
    <>
      <div className="max-w-[1094px] overflow-x-scroll scroll_hide">
        {/* <div className="flex justify-between items-end mb-[16px]">
          <p className="subheader_heavy text-black-default ">Previous Links</p>
          <BtnOutlinedWithIcon text="View All" icon={<span className="inline-flex mt-1 icon-eye-view text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
        </div> */}
        <table className="border-l border-gray-lighter border-collapse min-w-[787px]">
          <thead className="text-bl text-black-light bg-gray-lightest-2 caption_heavy h-[48px] ">
            <tr>
              <th className="border-b border-r border-gray-lighter text-right font-medium pt-[10px] px-[16px] w-[119px]">
                <span className=" align-text-bottom mt-auto">Date Added</span>
              </th>
              <th className="border-b border-r border-gray-lighter text-right font-medium pt-[10px] px-[16px] w-[236px]">
                <span className=" align-text-bottom mt-auto">Brand Name</span>
              </th>
              <th className="border-b border-r border-gray-lighter text-right font-medium pt-[10px] px-[16px] w-[252px]">
                <span className=" align-text-bottom mt-auto">Joined Party</span>
              </th>
              <th className="border-b border-r border-gray-lighter text-right font-medium pt-[10px] px-[16px] w-[158px]">
                <span className=" align-text-bottom mt-auto">Expenses made</span>
              </th>
              <th className="border-b border-r border-gray-lighter text-right font-medium pt-[10px] px-[16px] w-[329px]">
                <span className=" align-text-bottom mt-auto">Link type</span>
              </th>
            </tr>
          </thead>
          <tbody className="caption_light text-black-default h-[48px]">
            <tr>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">12 Nov 2021</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">Pepsi</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom">4</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom"># 8,000,000</td>
              <td className="border-b border-r border-gray-lighter p-[16px] text-right align-text-bottom"># 8,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PreviousLinksTable;
