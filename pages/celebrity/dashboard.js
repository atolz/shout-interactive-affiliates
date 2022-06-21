import { Dialog, Stack } from "@mui/material";
import React, { useState } from "react";
import BaseLayout from "../../components/Layouts/BaseLayout";
import DisplayHeader from "../../components/Layouts/DisplayHeader";
import Padding from "../../components/Layouts/Padding";
import TextField from "../../components/FormElements/TextField";
import ModalContainer from "../../components/ModalContainer";
import Calender from "../../components/FormElements/Calender";
import MySelect from "../../components/FormElements/Select";
import ManagerSwitcher from "../../components/ManagerSwitcher";
import StatCard from "../../components/Cards/StatCard";
import BrandDetails from "../../components/Pages/Dashboard/BrandDetails";
import CouponsTable from "../../components/Tables/CouponsTable";
import ProductTable from "../../components/Tables/ProductTable";
import BranchesTable from "../../components/Tables/BranchesTable";
import TeamTable from "../../components/Tables/TeamTable";
import CelebrityDetails from "../../components/Pages/Dashboard/CelebrityDetails";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [activeTable, setActiveTable] = useState("Coupon History");
  const stats = [
    { title: "Coupon Acquired", type: "number", value: "30/1200" },
    { title: "Used Coupon ", type: "number", value: "41" },
    { title: "Total no of sales", type: "money", value: "97" },
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
            {/* <MySelect label="Link Type"></MySelect> */}
            <TextField label="Organiser"></TextField>
            <TextField label="Sponsor Limit"></TextField>
            {/* <Select></Select> */}
            <MySelect label="Link Type"></MySelect>
          </Stack>
        </ModalContainer>
      </Dialog>
      <div className="max-w-[1100px] mx-auto">
        <DisplayHeader displayText={"David Adeleke"} action={toggle} subheaderText={""} Button={{ text: "Create Edible Shout Link", link: "/brand/dashboard" }} />
        {/* <DisplayHeader displayText={"Welcome"} action={toggle} subheaderText={""} /> */}
        {/* Dashboard */}
        <CelebrityDetails></CelebrityDetails>
        <p className="subheader_heavy mb-[1.2rem]">Analytics</p>
        <div className="flex gap-[24px] overflow-x-scroll styled-scroll-bar scroll_hide mb-[1.6rem] md:mb-[4.4rem] border-dashed border-b md:border-none pb-7 md:pb-2">
          {stats.map((stat, i) => {
            return <StatCard key={i} type={stat.type} text={stat.title} value={stat.value}></StatCard>;
          })}
        </div>
        <ManagerSwitcher
          handleChange={(item) => {
            setActiveTable(item);
          }}
          items={["Coupon History", "Product", "Branches", "Team"]}
          className="!mb-[1rem]"
        ></ManagerSwitcher>
        {activeTable == "Coupon History" && <CouponsTable></CouponsTable>}
        {activeTable == "Product" && <ProductTable></ProductTable>}
        {activeTable == "Branches" && <BranchesTable></BranchesTable>}
        {activeTable == "Team" && <TeamTable></TeamTable>}
      </div>
    </Padding>
  );
};

Dashboard.Layout = BaseLayout;
export default Dashboard;
