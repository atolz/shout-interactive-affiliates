import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const MyAlert = ({ type, text, title, handleClose }) => {
  return (
    <Alert onClose={handleClose} severity={type} sx={{ border: "1px solid #3bc13b54", minWidth: "100%", width: "100%", fontFamily: "'SF Pro Display', sans-serif !important;" }}>
      <AlertTitle>
        <span className="subheader_heavy">{title}</span>
      </AlertTitle>
      <span className="body_light text-black-default">{text}</span>
    </Alert>
  );
};

export default MyAlert;
