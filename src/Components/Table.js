import { Button, TableBody } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { blue, green } from "@mui/material/colors";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FilterListIcon from "@mui/icons-material/FilterList";
import TablePagination from "@mui/material/TablePagination";

function createData(
  Pool,
  Poolowner,
  Poolname,
  Pooldes,
  Poolstart,
  Assests,
  createdDate,
  Action
) {
  return {
    Pool,
    Poolowner,
    Poolname,
    Pooldes,
    Poolstart,
    Assests,
    createdDate,
    Action,
  };
}

const rows = [
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "ABC",
    "ABC",
    "11-01-2022",
    1,
    "01-02-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "ABC",
    "VDS",
    "21-01-2022",
    1,
    "02-02-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "CDE",
    "DSA",
    "31-01-2022",
    1,
    "04-02-2022",
    "---"
  ),
  createData(
    " qwertyuio3456789fgj",
    "ABC",
    "VFR",
    "AWC",
    "11-02-2022",
    1,
    "05-02-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "BGR",
    "DSA",
    "21-02-2022",
    1,
    "10-02-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "BGR",
    "DAS",
    "14-02-2022",
    1,
    "25-02-2022",
    "---"
  ),
  createData(
    "cqwertyuio3456789fgh",
    "ABC",
    "VRE",
    "DAX",
    "14-04-2022",
    1,
    "05-03-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "VDS",
    "FDC",
    "13-04-2022",
    1,
    "15-03-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "VDS",
    "GDC",
    "15-05-2022",
    1,
    "23-04-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "FSS",
    "GDC",
    "24-05-2022",
    1,
    "15-05-2022",
    "---"
  ),
  createData(
    "sudarsan",
    "ABC",
    "DSX",
    "FDS",
    "24-05-2022",
    1,
    "25-05-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "DSZ",
    "SDS",
    "25-05-2022",
    1,
    "05-06-2022",
    "---"
  ),
  createData(
    "qwertyuio3456789fghj",
    "ABC",
    "DSX",
    "DSC",
    "31-05-2022",
    1,
    "14-06-2022",
    "---"
  ),
];

const TableDummy = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: green,
      color: green,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
    },
  }));


  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "0.5%",
          backgroundColor: " ",
          padding: "0.5%",
        }}
      >
        <Button
          variant="disabled"
          style={{
            backgroundColor: "#d3d3d3",
            width: "15%",
            marginRight: "1%",
            marginLeft: "1%",
          }}
        >
          ASSIGN POOL
        </Button>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          style={{ width: "20%" }}
        />
      </div>
      <div
        style={{
          margin: "3%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "1%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ marginRight: "1%" }}>
            <CloudDownloadIcon />
          </div>
          <div style={{ marginRight: "1%" }}>
            <LocalPrintshopIcon />
          </div>
          <div style={{ marginRight: "1%" }}>
            <ViewColumnIcon />
          </div>
          <div>
            <FilterListIcon />
          </div>
        </div>
        {/* {rows.filter((fil)=>fil.Pool.toLowerCase().includes(search)).map((row)=>(
            <li key={row.Pooldes*Math.random()}>{row.Pool}</li>
             ))} */}
        <>
       

          <Table>
            <TableHead style={{ backgroundColor: "		#AFEEEE" }}>
              <TableRow>
                <StyledTableCell>
                  <Checkbox
                    value="SlctAll"
                    id="slctAll"
                    onClick={(e) => console.log(e.target.checked)}
                  />
                  Pool Id
                </StyledTableCell>
                <StyledTableCell>Pool Owner Name</StyledTableCell>
                <StyledTableCell>Pool Name</StyledTableCell>
                <StyledTableCell>Pool Description </StyledTableCell>
                <StyledTableCell>Pool Start Date</StyledTableCell>
                <StyledTableCell>No. of Assests</StyledTableCell>
                <StyledTableCell> Pool Created Date</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((fil) => fil.Pool.toLowerCase().includes(search))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

                .map((row) => {
                  return (
                    <TableRow>
                      <TableCell key={row.Pool * Math.random()}>
                        <Checkbox
                          color="primary"
                          inputProps={{
                            "aria-label": "select all desserts",
                          }}
                        />

                        {row.Pool}
                      </TableCell>
                      <TableCell key={row.Poolowner * Math.random()}>
                        {row.Poolowner}
                      </TableCell>
                      <TableCell key={row.Poolname * Math.random()}>
                        {row.Poolname}
                      </TableCell>
                      <TableCell key={row.Pooldes * Math.random()}>
                        {row.Pooldes}
                      </TableCell>
                      <TableCell key={row.Poolstart * Math.random()}>
                        {row.Poolstart}
                      </TableCell>
                      <TableCell key={row.Assests * Math.random()}>
                        {row.Assests}
                      </TableCell>
                      <TableCell key={row.createdDate * Math.random()}>
                        {row.createdDate}
                      </TableCell>

                      <TableCell key={row.createdDate * Math.random()}>
                        {row.Action}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      </div>
    </div>
  );
};

export default TableDummy;
