import Button from "@mui/material/Button";
import Link from "next/link";

const EditBtn = ({ text, icon, link, color }) => {
  return (
    <Link href={link} passHref>
      <Button
        disableElevation
        sx={{
          minWidth: "148px",
          whiteSpace: "nowrap",
          fontFamily: "'SF Pro Display', sans-serif !important",
          height: "48px",
          bgcolor: 'transparent',
          textTransform: "none",
          borderRadius: "8px",
          border:'2px solid #110066',
          color:'#110066',
        }}
        variant="contained"
        startIcon={icon}
      >
        <span className="body_heavy">{text}</span>
      </Button>
    </Link>
  );
};

export default EditBtn;