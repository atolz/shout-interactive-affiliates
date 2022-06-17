import Padding from "../components/Layouts/Padding";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className=" w-screen h-screen bg-primary">
      <Padding>
        <header className="flex items-center justify-center">
          <button className="border body_heavy border-white py-6 px-7 ml-auto text-white">Contact us</button>
        </header>
        <img className="max-w-[1337px] w-full relative top-1/4 md:top-1/3 -translate-y-2/3 left-1/2 -translate-x-1/2" src="/404-text.svg"></img>
        <img className="absolute left-0 bottom-0 max-h-[350px] md:max-h-[773px]" src="/404-tree.svg"></img>
        <img className="absolute bottom-0 right-16 max-h-[256] h-[150px] md:h-auto" src="/404-house.svg"></img>
        <div className="text-center flex flex-col items-center z-50 relative mt-[130px]">
          <div className="flex items-center">
            <p className="pr-[39px] title_heavy text-white">Party Popper</p>
            <div className="border-l pl-[39px] text-left text-white">
              <strong className="subheader_heavy text-white mb-2 text-white">It`s a 404 error</strong>
              <p className="text-white">
                The page you’re looking for is <br></br> not available.
              </p>
            </div>
          </div>
          <Link href={"/"}>
            <button className="bg-white text-black-default body_heavy rounded px-[75px] mt-[50px] py-5">Go back</button>
          </Link>
        </div>
      </Padding>
    </div>
  );
};

export default NotFound;
