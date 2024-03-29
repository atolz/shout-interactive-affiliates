import { red } from "@mui/material/colors";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiPaper-root": {
      borderRadius: "0px",
      boxShadow: "10px 10px 5px 0px blue;",
    },
  },
}));

const MySelect = ({ handleChange, label }) => {
  const classes = useStyles();
  const selectStyle = {
    overflow: "hidden",
    bgcolor: "#fff",
    maxWidth: "375px",
    width: "100%",
    height: "48px",
    borderRadius: "16px",
    fontSize: "14px",
    // marginBottom: "10px",
    fontFamily: "'SF Pro Display', sans-serif !important",
    "& fieldset": {
      border: "1px solid #DFE4E8",
    },
    "& fieldset.Mui-focused": {
      bgcolor: red,
    },
    "& .MuiSelect-select": {
      bgcolor: "white",
      background: "url(/icons/angle-down.svg) ",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "96%",
      px: "11px",
    },
    "& .MuiSvgIcon-root": {
      display: "none",
    },
    "&.MuiInputBase-root:hover fieldset": {
      border: "1px solid #110066",
    },

    "&.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#110066", borderWidth: "1px" },
  };
  return (
    <div className={classes.root}>
      <label className="caption_heavy text-black-default flex mb-[8px]">{label}</label>

      <Select sx={selectStyle} id="demo-simple-select" value={10} onChange={handleChange}>
        <MenuItem value={10}></MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default MySelect;
