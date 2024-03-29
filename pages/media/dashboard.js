import { Dialog, Stack } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import BaseLayout from "../../components/Layouts/BaseLayout";
import DisplayHeader from "../../components/Layouts/DisplayHeader";
import Padding from "../../components/Layouts/Padding";
import TextField from "../../components/FormElements/TextField";
import ModalContainer from "../../components/ModalContainer";
import Calender from "../../components/FormElements/Calender";
import MySelect from "../../components/FormElements/Select";
import ManagerSwitcher from "../../components/ManagerSwitcher";
import StatCard from "../../components/Cards/StatCard";
import TeamTable from "../../components/Tables/media/TeamTable";
import BtnOutlinedWithIcon from "../../components/Buttons/BtnOutlinedWithIcon";
import EditBtn from "../../components/Buttons/EditBtn";
import MediaDetails from "../../components/Pages/Dashboard/MediaDetails";
import CampaignTable from "../../components/Tables/media/CampaignTable";
import Filter from "../../components/Filter";
import MediaFilter from "../../components/filter/MediaFilter";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [activeTable, setActiveTable] = useState("Campaigns");
  const stats = [
    { title: "Campaigns", type: "number", value: "300" },
    { title: "Active Campaigns", type: "number", value: "314" },
    { title: "Amount Paid", type: "number", value: "N 70,000" },
    { title: "Amount Earned", type: "number", value: "N200,000" },
  ];
  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <Padding className="bg-gray-lighter !pb-[10rem]">
      <Dialog onClose={toggle} open={open}>
        <ModalContainer actionText="Done" onClose={toggle} headerText="Create Edible Shout Link" icon={<span className="icon-plus-circle text-[15px] font-bold"></span>}>
          <Stack gap={"24px"}>
            <Calender label="Party Date"></Calender>
            <TextField label="Organiser"></TextField>
            <TextField label="Sponsor Limit"></TextField>
            <MySelect label="Link Type"></MySelect>
          </Stack>
        </ModalContainer>
      </Dialog>
      <div className="max-w-[1100px] mx-auto">
        
        {/* <DisplayHeader displayText={"David Adeleke"} action={toggle} subheaderText={""} Button={{ text: "Create Edible Shout Link", link: "/brand/dashboard" }} /> */}
        <header className="flex flex-wrap justify-between mb-[27px] md:mb-[52px] items-center w-full">
      <div className="mr-5">
        <h2 className="display_3_heavy ">MTV Base </h2>
        <p className="subheader_light mb-[30px] md:mb-0"></p>
      </div>
      <BtnOutlinedWithIcon className="mr-[8px]" color="green" text="Copy Link" icon={<span className="icon-copy text-success-default text-[20px]"> </span>}></BtnOutlinedWithIcon>
      <BtnOutlinedWithIcon className="mr-auto" color="#110066" text="Share Link" icon={<span className="icon-copy text-black-default text-[20px]"> </span>}></BtnOutlinedWithIcon>
      <EditBtn text='Edit Media House' link='/media/edit' icon={<span className="icon-plus-circle"></span> } />
        
    </header>
        <MediaDetails></MediaDetails>
        <div className="flex flex-row justify-between mb-[1.2rem]">
        <p className="subheader_heavy ">Analytics</p>
        <Filter />
        {/* <MediaFilter /> */}
        </div>

        <div className="flex flex-wrap gap-[24px] mb-[1.6rem] md:mb-[4.4rem] border-dashed border-b md:border-none pb-7 md:pb-2">
          {stats.map((stat, i) => {
            return <StatCard key={i} type={stat.type} text={stat.title} value={stat.value}></StatCard>;
          })}
        </div>
        <ManagerSwitcher
          handleChange={(item) => {
            setActiveTable(item);
          }}
          items={["Campaigns", "Team"]}
          className="!mb-[1rem]"
        ></ManagerSwitcher>
        {activeTable == "Campaigns" && <CampaignTable></CampaignTable>}
        {activeTable == "Team" && <TeamTable></TeamTable>}
      </div>
    </Padding>
  );
};

Dashboard.Layout = BaseLayout;
export default Dashboard;
