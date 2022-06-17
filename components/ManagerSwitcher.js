import { useState } from "react";

const ManagerSwitcher = () => {
  const managerTypes = ["Affiliates", "Brand Managers", "Party Managers", "Analytics Manager", "Celebrities", "Media Managers"];
  const [activeManager, setActiveManager] = useState("Affiliates");

  const handleSwitch = (type) => {
    setActiveManager(type);
  };

  return (
    <nav className="Switcher flex mb-[48px] overflow-x-scroll scroll_hide">
      {managerTypes.map((type, i) => {
        return (
          <p
            onClick={() => {
              handleSwitch(type);
            }}
            key={i}
            className={` whitespace-nowrap  px px-[16px] py-[6px] transition-all  rounded-[8px] body_heavy  ${
              activeManager == type ? "text-black-default bg-primary-lightest-2" : "text-black-light"
            } cursor-pointer`}
          >
            {type}
          </p>
        );
      })}
    </nav>
  );
};

export default ManagerSwitcher;
