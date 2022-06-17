import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import StatCard from "../../../components/Cards/StatCard";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Padding from "../../../components/Layouts/Padding";
import BrandsTable from "../../../components/Tables/BrandManagement/BrandsTable";
import Calender from "../../../components/FormElements/Calender";
import DisplayHeader from "../../../components/Layouts/DisplayHeader";

const Brands = () => {
  return (
    <Padding>
      <div className="max-w-[873px]">
        {/* <header className="flex justify-between mb-[82px] items-center">
          <div>
            <h2 className="display_3_heavy">Manage Brands</h2>
            <p className="subheader_light w-[400px]">Here, you can create and manage the brands associated with Shout!</p>
          </div>
          <BtnIcon text="Add New Brand" link="/brand-management/brands/new" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
        </header> */}
        <DisplayHeader
          displayText={"Manage Brands"}
          subheaderText={"Here, you can create and manage the brands associated with Shout!"}
          Button={{ text: "Add New Brand", link: "/brand-management/brands/new" }}
        />

        <div className="flex justify-between items-end mb-[15px] items-center">
          <a className="text-[#14B363] body_light underline cursor-pointer mr-9">Select</a>
          <input
            className="border ml-auto h-[48px] w-full max-w-[362px] px-[16px] focus:border-gray-default text-[14px] rounded-2xl border-gray-default placeholder:text-gray-default"
            placeholder="Search..."
          ></input>
        </div>
        <BrandsTable></BrandsTable>

        {/* <Calender></Calender> */}

        {/* <BtnPrimary text="Create" loading={false}></BtnPrimary>
      <BtnOutlined text="Outlined"></BtnOutlined>
      <StatCard text="Adverts Running" value="14"></StatCard> */}
      </div>
    </Padding>
  );
};

export default Brands;
Brands.Layout = BaseLayout;
