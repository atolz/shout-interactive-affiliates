import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";

import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import StatCard from "../../../components/Cards/StatCard";
import BtnOutlinedWithIcon from "../../../components/Buttons/BtnOutlinedWithIcon";
import Padding from "../../../components/Layouts/Padding";
import PreviousLinksTable from "../../../components/Tables/BrandManagement/PreviousLinksTable";
import CreatedLinksTable from "../../../components/Tables/BrandManagement/CreatedLinksTable";
import ModalContainer from "../../../components/ModalContainer";
import TextField from "../../../components/FormElements/TextField";
import Calender from "../../../components/FormElements/Calender";
import MySelect from "../../../components/FormElements/Select";
import Select from "../../../components/FormElements/Select";
import { Stack } from "@mui/material";
import DisplayHeader from "../../../components/Layouts/DisplayHeader";

const ShoutLinks = () => {
  const [open, setOpen] = useState(false);
  const stats = [
    { title: "Advert Running", type: "number", value: "96" },
    { title: "No. of Clicks", type: "people", value: "41" },
    { title: "Total Reach", type: "people", value: "97" },
    { title: "Expense Made", type: "money", value: "96" },
    { title: "Total Engagement", type: "people", value: "96" },
  ];
  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <Padding>
      <Dialog onClose={toggle} open={open}>
        <ModalContainer actionText="Done" onClose={toggle} headerText="Create New Shout Link" icon={<span className="icon-plus-circle text-[15px] font-bold"></span>}>
          <Stack gap={"24px"}>
            <Calender label="Party Date"></Calender>
            <MySelect label="Link Type"></MySelect>
            <TextField label="Organiser"></TextField>
            <TextField label="Sponsor Limit"></TextField>
            {/* <Select></Select> */}
          </Stack>
        </ModalContainer>
      </Dialog>
      <div className="max-w-[1094px]">
        {/* <header className="flex justify-between mb-[52px] items-center">
          <div>
            <h2 className="display_3_heavy">Manage Links</h2>
            <p className="subheader_light">Here are the Shout Links you have created.</p>
          </div>
          <div onClick={toggle}>
            <BtnIcon text="Create Shout Link" link="/brand-management/shout-links/" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
          </div>
        </header> */}
        <DisplayHeader
          action={toggle}
          displayText={"Manage Links"}
          subheaderText={"Here are the Shout Links you have created."}
          Button={{ text: "Create Shout Link", link: "/brand-management/shout-links/" }}
        />

        <div className="flex justify-between items-end mb-[18px]">
          <p className="subheader_heavy ">Current Shout Link Statistics</p>
          <BtnOutlinedWithIcon text="Copy Link" icon={<span className="icon-copy text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
        </div>
        <section className="">
          <div className="flex gap-[24px] overflow-x-scroll scroll_hide mb-[1.6rem] md:mb-[6.4rem] border-dashed border-b md:border-none pb-7 md:pb-0">
            {stats.map((stat, i) => {
              return <StatCard key={i} type={stat.type} text={stat.title} value={stat.value}></StatCard>;
            })}
            {/* <StatCard text="Adverts Running" value="14"></StatCard>
            <StatCard text="Adverts Running" value="14"></StatCard>
            <StatCard text="Adverts Running" value="14"></StatCard>
            <StatCard text="Adverts Running" value="14"></StatCard>
            <StatCard text="Adverts Running" value="14"></StatCard>
            <StatCard text="Adverts Running" value="14"></StatCard> */}
          </div>
          <div className="mb-[68px]">
            <p className="subheader_heavy text-black-default mb-[16px]">Created Links</p>
            <CreatedLinksTable></CreatedLinksTable>
          </div>
          <div>
            <div className="flex justify-between items-end mb-[16px]">
              <p className="subheader_heavy text-black-default ">Previous Links</p>
              <BtnOutlinedWithIcon text="View All" icon={<span className="inline-flex mt-1 icon-eye-view text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
            </div>
            <PreviousLinksTable></PreviousLinksTable>
          </div>
        </section>
      </div>
    </Padding>
  );
};

export default ShoutLinks;
ShoutLinks.Layout = BaseLayout;
// Brands.Layout = BaseLayout;
