import BtnIcon from "../Buttons/BtnIcon";

const DisplayHeader = ({ Button = "", displayText, subheaderText, action = "" }) => {
  return (
    <header className="flex flex-wrap justify-between mb-[27px] md:mb-[52px] items-center w-full">
      <div className="mr-5">
        <h2 className="display_3_heavy ">{displayText}</h2>
        <p className="subheader_light mb-[30px] md:mb-0">{subheaderText}</p>
      </div>
      {Button && (
        <div
          className="ml-auto"
          onClick={() => {
            action ? action() : "";
            // action();
          }}
        >
          <BtnIcon text={Button.text} link={Button.link} icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
        </div>
      )}
    </header>
  );
};

export default DisplayHeader;
