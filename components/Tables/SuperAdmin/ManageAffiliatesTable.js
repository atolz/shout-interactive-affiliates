import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import { Stack } from "@mui/material";

import ModalContainer from "../../ModalContainer";
import TextField from "../../FormElements/TextField";
import Calender from "../../FormElements/Calender";
import MySelect from "../../FormElements/Select";

const ManageAffiliatesTable = ({ showSelect, handleDone }) => {
  // const [showCheckBox, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // setShow(showSelect);
  }, [showSelect]);

  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }

  function onSelectChange(p1, p2) {
    console.log("selection change..");
    console.log(p1);
    console.log(p2);
  }

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35, action: `<span>tets</span>` },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "firstName",
      headerName: "First name",
      width: 236,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 236,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 236,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 94,
      renderCell: (params) => (
        <strong>
          <span
            onClick={() => {
              toggle();
            }}
            className="icon-pencile border border-success-default rounded-xl text-[12px] bg-white text-success-default p-3 cursor-pointer"
          ></span>
        </strong>
      ),
    },
  ];

  return (
    <>
      <Dialog onClose={toggle} open={open}>
        <ModalContainer
          actionText="Done"
          onClose={toggle}
          onAction={() => {
            handleDone();
            toggle();
          }}
          headerText="Edit Brooklyn’s Account"
          icon={<span className="icon-pencile border text-[15px] font-bold"></span>}
        >
          <Stack gap={"24px"}>
            <TextField label="name"></TextField>
            <TextField label="Email"></TextField>
            <MySelect label="Account Type"></MySelect>
            <MySelect label="Permissions"></MySelect>
            {/* <Select></Select> */}
          </Stack>
        </ModalContainer>
      </Dialog>
      <div style={{ height: "190px", width: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onSelectionModelChange={onSelectChange}
          onStateChange={(p1, p2, p3) => {
            console.log("state change");
            console.log(p1);
            console.log(p2);
            console.log(p3);
          }}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection={showSelect}
          // disableSelectionOnClick
          disableColumnFilter={true}
          disableColumnMenu={true}
          headerHeight={"48px"}
          rowHeight={48}
          showColumnRightBorder={true}
          showCellRightBorder={true}
          hideFooterPagination={true}
          hideFooter={true}
          sx={{
            "&.MuiDataGrid-root": {
              fontSize: "12px",
              lineHeight: "16px",
              fontFamily: "'SF Pro Display', sans-serif !important",
              color: "#0A1F44",
            },
            "&.MuiDataGrid-root .MuiDataGrid-main div.MuiDataGrid-row.Mui-selected": {
              // bgcolor: "red",
              // fontSize: "20px",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
              bgcolor: "#F9FAFA",
              color: "#818FA3",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeaders .MuiDataGrid-withBorder": {
              height: "48px",
            },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeaders .MuiDataGrid-withBorder:last-child": {
              height: "0",
            },
            "&.MuiDataGrid-root .MuiCheckbox-root .MuiSvgIcon-root": {
              height: "15px",
              width: "15px",
            },
            "&.MuiDataGrid-root .MuiCheckbox-root.Mui-checked": {
              color: "#110066",
            },
            // "&.MuiDataGrid-root .MuiDataGrid-row div.MuiDataGrid-cell:nth-child(2)": {
            //   color: "red",
            //   minWidth: "20px !important",
            //   padding: "0px",
            // },
            // "&.MuiDataGrid-root .MuiDataGrid-row div.MuiDataGrid-cell:nth-child(1)": {
            //   color: "red",
            //   minWidth: "20px !important",
            //   padding: "0px",
            //   borderRight: "none",
            // },
            // "&.MuiDataGrid-root .MuiDataGrid-columnHeaders  div.MuiDataGrid-columnHeader:nth-child(1)": {
            //   color: "red",
            //   minWidth: "20px !important",
            //   padding: "0px",
            //   borderRight: "none",
            //   width: "34px !important",
            // },
            // "&.MuiDataGrid-root .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeaderTitleContainer": {
            //   padding: "0px",
            // },
            // "&.MuiDataGrid-root .MuiDataGrid-columnHeaders  div.MuiDataGrid-columnHeader:nth-child(2)": {
            //   color: "red",
            //   minWidth: "20px !important",
            //   padding: "0px",
            //   width: "21px !important",
            // },
            "&.MuiDataGrid-root .MuiDataGrid-columnHeaders  div.MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer": {
              display: "none",
            },
          }}
        />
      </div>
    </>
  );
};

export default ManageAffiliatesTable;
