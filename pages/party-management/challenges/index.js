import BaseLayout from "../../../components/Layouts/BaseLayout";
import AdvertCard from "../../../components/Cards/AdvertCard";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import StatCard from "../../../components/Cards/StatCard";
import Padding from "../../../components/Layouts/Padding";
import BtnOutlinedWithIcon from "../../../components/Buttons/BtnOutlinedWithIcon";
import DisplayHeader from "../../../components/Layouts/DisplayHeader";

const Index = () => {
  return (
    <Padding>
      <div className="max-w-[1096px]">
        {/* <header className="flex justify-between mb-[52px] items-center">
          <div>
            <h2 className="display_3_heavy">Manage Gift Goal Chalenges</h2>
            <p className="subheader_light">Here are the Gift Goal Challenges you have made</p>
          </div>
          <BtnIcon text="Create New Challenge" link="/party-management/challenges/new" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
        </header> */}
        <DisplayHeader
          displayText={"Manage Gift Goal Chalenges"}
          subheaderText={"Here are the Gift Goal Challenges you have made."}
          Button={{ text: "Create New Challenge", link: "/party-management/challenges/new" }}
        />

        <section className="">
          <div className="flex gap-[24px] overflow-x-scroll scroll_hide mb-[1.6rem] md:mb-[6.4rem] border-dashed border-b md:border-none pb-7 md:pb-0">
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
            <StatCard color="yellow" text="Adverts Running" value="14"></StatCard>
          </div>
          <div className="info flex flex-wrap items-end mb-[24px]">
            <p className="subheader_heavy w-full md:w-fit mb-6 md:mb-0">Running Challenges</p>
            <input
              className="placeholder:text-gray-default rounded-xl px-[8px] py-[16px] md:ml-auto mb-6 md:mb-0 border caption_heavy border-gray-dark w-[234px] h-[32px] focus:border-gray-500"
              placeholder="Search..."
            ></input>
            <div className="w-full md:w-fit md:ml-[24px]">
              <BtnOutlinedWithIcon text={"All Challenges"} icon={<span className="icon-arrow-down-spear"></span>} />
            </div>
          </div>
          <div className="ads_grid">
            <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)} link="/party-management/challenges/edit"></AdvertCard>
            <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)} link="/party-management/challenges/edit"></AdvertCard>
            <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)} link="/party-management/challenges/edit"></AdvertCard>
            <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)} link="/party-management/challenges/edit"></AdvertCard>
          </div>
        </section>
      </div>
    </Padding>
  );
};

Index.Layout = BaseLayout;
export default Index;
