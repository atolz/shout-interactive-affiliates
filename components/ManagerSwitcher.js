import { useEffect, useState } from "react";

const ManagerSwitcher = ({ className, items = ["Affiliates", "Brand Managers", "Party Managers", "Analytics Manager", "Celebrities", "Media Managers"], handleChange = () => {} }) => {
  const [activeManager, setActiveManager] = useState();

  const handleSwitch = (type) => {
    setActiveManager(type);
    handleChange(type);
  };

  useEffect(() => {
    handleSwitch(items[0]);
  }, []);

  return (
    <nav className={` flex mb-[48px] overflow-x-scroll scroll_hide ${className}`}>
      {items.map((item, i) => {
        return (
          <p
            onClick={() => {
              handleSwitch(item);
            }}
            key={i}
            className={` whitespace-nowrap px-[16px] py-[6px] transition-all  rounded-[8px] body_heavy  ${
              activeManager == item ? "text-black-default bg-primary-lightest-2" : "text-black-light"
            } cursor-pointer `}
          >
            {item}
          </p>
        );
      })}
    </nav>
  );
};

export default ManagerSwitcher;

 // activeManager == item ? "text-black-default bg-primary-lightest-2" : "text-black-light"
