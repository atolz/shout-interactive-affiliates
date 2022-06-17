import BaseLayout from "../../components/Layouts/BaseLayout";
import Padding from "../../components/Layouts/Padding";
import BtnOutlinedWithIcon from "../../components/Buttons/BtnOutlinedWithIcon";
import StatCard from "../../components/Cards/StatCard";
import ActivityCard from "../../components/Cards/ActivityCard";
import { Stack } from "@mui/material";
import LineChart from "../../components/LineChart";

const DashBoard = () => {
  return (
    <Padding>
      <div className="max-w-[1096px]">
        <header className="flex justify-between mb-[52px] items-center">
          <div>
            <h2 className="display_3_heavy">Hello Tony,</h2>
            <p className="subheader_light">Welcome to your Dashboard.</p>
          </div>
        </header>
        <div className="flex justify-between items-end mb-[18px]">
          <p className="subheader_heavy ">Quick Stats</p>
          <BtnOutlinedWithIcon text="This Month" icon={<span className="icon-arrow-down-spear text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
        </div>
        <section className="">
          <div className="flex gap-[24px] overflow-x-scroll scroll_hide mb-[1.6rem] md:mb-[6.4rem] border-dashed border-b md:border-none pb-7 md:pb-0">
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
            <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          </div>
        </section>
        <section className="flex gap-[24px] flex-wrap justify-between">
          <div className="max-w-[535px] w-full min-w-[300px] flex-1">
            <p className="subheader_heavy text-black-default mb-[12px]">Revenue</p>
            <div className=" border border-gray-light rounded-[8px]  p-[24px]">
              <header className="flex mb-[32px]">
                <span className="icon-filter text-success-default text-[16px]"></span>
                <span className="caption_heavy mr-auto ml-[6px] text-success-default">From All Sources</span>
                <BtnOutlinedWithIcon text="This Month" icon={<span className="icon-arrow-down-spear text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
              </header>
              <div className="">
                <LineChart></LineChart>
              </div>
            </div>
          </div>
          <div className="max-w-[535px] w-full min-w-[300px] flex-1">
            <p className="subheader_heavy text-black-default mb-[12px]">Recent Activities</p>
            <div className=" border border-gray-light rounded-[8px]  p-[24px]">
              <Stack gap={"20px"}>
                <ActivityCard></ActivityCard>
                <ActivityCard></ActivityCard>
                <ActivityCard></ActivityCard>
                <ActivityCard></ActivityCard>
                {/* <ActivityCard></ActivityCard> */}
              </Stack>
            </div>
          </div>
        </section>
      </div>
    </Padding>
  );
};

DashBoard.Layout = BaseLayout;
export default DashBoard;
