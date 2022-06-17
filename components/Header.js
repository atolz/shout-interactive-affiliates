import Avatar from "@mui/material/Avatar";
import BurgerMenu from "./BurgerMenu";

const Header = ({ toggleNav, isCrossed }) => {
  return (
    <div className="h-[56px] flex items-center border-b border-my-border-color--1 py-[12px] px-[20px] fixed top-0 left-0 w-full md:relative bg-white z-50">
      <img className="w-[100px] h-[32px] -ml-4 md:hidden mr-auto" src="/Shout Logo.svg" />

      <BurgerMenu toggleNav={toggleNav} isCrossed={isCrossed} />
      <span className="icon-search text-[20px] mr-[15px] ml-auto hidden md:block"></span>
      <span className="icon-question-circle text-[20px] mr-[15px] hidden md:block"></span>
      {/* <img src="/images/user-img.jpg" className="w-[32px] h-[32px] object-cover object-top rounded-full"></img> */}
      <div className=" hidden md:block">
        <Avatar sx={{ bgcolor: "orange", width: "32px", height: "32px" }} alt="Remy Sharp" src="/images/userImg.jpg"></Avatar>
      </div>
    </div>
  );
};

export default Header;
