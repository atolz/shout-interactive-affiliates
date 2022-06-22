import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
// import Link from "next/dist/client/link";

const BtnOutlinedWithIcon = ({ text, icon, color, className, textcolor, }) => {
  return (
    <Tooltip
      title={text}
      sx={{
        width: "100px",
        "&.MuiTooltip-popper": {
          width: "200px",
        },
      }}
    >
      {/* <Link href={link} passHref> */}
      <button
        style={{ borderColor: color }}
        className={`px-[10px] bg-white h-[32px] whitespace-nowrap ${color ? "border-success-default" : "border-gray-dark"}   rounded-xl border-[1.9px]  flex items-center justify-center ${className}`}
      >
        <span>{icon}</span>
        <span className={`caption_heavy ml-[8px]  ${textcolor ? "text-primary" : "text-gray-darker"}`}>{text}</span>
      </button>
      {/* </Link> */}
    </Tooltip>
    // <Button
    //   disableElevation
    //   sx={{ Width: "113px", height: "32px", border: "1px solid #60646A", bgcolor: `transparent`, textTransform: "none", borderRadius: "8px" }}
    //   variant="outlined"
    //   startIcon={icon}
    // >
    //   <span className="caption_heavy">{text}</span>
    // </Button>
  );
};

export default BtnOutlinedWithIcon;
