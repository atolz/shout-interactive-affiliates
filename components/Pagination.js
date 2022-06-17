import Pagination from "@mui/material/Pagination";

const MyPagination = () => {
  const style = {
    "&.MuiPagination-root ul button.MuiButtonBase-root.MuiPaginationItem-page": {
      border: "1px solid #DFE4E8",
      color: "#818FA3",
      height: "32px",
      width: "32px",
      fontSize: "14px",
      fontFamily: "'SF Pro Display', sans-serif !important",
    },
    "&.MuiPagination-root ul button.MuiButtonBase-root.MuiPaginationItem-page.Mui-selected": {
      bgcolor: "#E1F7FF",
      borderColor: "#B4EBFF",
      color: "#110066",
    },
  };
  return <Pagination sx={style} count={3} variant="outlined" shape="rounded" />;
};

export default MyPagination;
