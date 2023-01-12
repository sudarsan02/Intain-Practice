import { Button } from '@mui/material';
import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, green } from '@mui/material/colors';


function createData(Pool, Poolowner, Poolname, Pooldes, Poolstart, Assests, createdDate, Action) {
  return {
    Pool,
    Poolowner,
    Poolname,
    Pooldes,
    Poolstart,
    Assests,
    createdDate, Action
  };

}
const rows = [
  createData('qwertyuio3456789fghj', 'ABC', 'ABC', 'ABC', '11-01-2022', 1, '01-02-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', "ABC", 'VDS', '21-01-2022', 1, '02-02-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'CDE', 'DSA', '31-01-2022', 1, '04-02-2022', '---'),
  createData(' qwertyuio3456789fgj', 'ABC', 'VFR', 'AWC', '11-02-2022', 1, '05-02-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'BGR', 'DSA', '21-02-2022', 1, '10-02-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'BGR', 'DAS', '14-02-2022', 1, '25-02-2022', '---'),
  createData('cqwertyuio3456789fgh', 'ABC', 'VRE', 'DAX', '14-04-2022', 1, '05-03-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'VDS', 'FDC', '13-04-2022', 1, '15-03-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'VDS', 'GDC', '15-05-2022', 1, '23-04-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'FSS', 'GDC', '24-05-2022', 1, '15-05-2022', '---'),
  createData('sudarsan', 'ABC', 'DSX', 'FDS', '24-05-2022', 1, '25-05-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'DSZ', 'SDS', '25-05-2022', 1, '05-06-2022', '---'),
  createData('qwertyuio3456789fghj', 'ABC', 'DSX', 'DSC', '31-05-2022', 1, '14-06-2022', '---'),
];

const TableDummy = () => {

  const [search, setSearch] = useState("");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: green,
      color: green,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <div>

      <Button variant="disabled">ASSIGN POOL</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
      {/* {rows.filter((fil)=>fil.Pool.toLowerCase().includes(search)).map((row)=>(
            <li key={row.Pooldes*Math.random()}>{row.Pool}</li>
             ))} */}
      <>

        {/* 
<TableHead style={{}}>
            {head.map((thead)=>thead.Pool)}
          </TableHead> */}


        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <Checkbox />
                Pool Id</StyledTableCell>
              <StyledTableCell >Pool Owner Name</StyledTableCell>
              <StyledTableCell >Pool Name</StyledTableCell>
              <StyledTableCell >Pool Description </StyledTableCell>
              <StyledTableCell >Pool Start Date</StyledTableCell>
              <StyledTableCell >No. of Assests</StyledTableCell>
              <StyledTableCell > Pool Created Date</StyledTableCell>
              <StyledTableCell >Action</StyledTableCell>

            </TableRow>
          </TableHead>
          {rows.filter((fil) => fil.Pool.toLowerCase().includes(search)).map((row) => (

            <TableRow>
              <TableCell
                key={row.Pool * Math.random()}

              >
                <Checkbox
                  color="primary"
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />

                {row.Pool}

              </TableCell>
              <TableCell
                key={row.Poolowner * Math.random()}

              >
                {row.Poolowner}
              </TableCell>
              <TableCell
                key={row.Poolname * Math.random()}

              >
                {row.Poolname}
              </TableCell>
              <TableCell
                key={row.Pooldes * Math.random()}

              >
                {row.Pooldes}
              </TableCell>
              <TableCell
                key={row.Poolstart * Math.random()}

              >
                {row.Poolstart}
              </TableCell>
              <TableCell
                key={row.Assests * Math.random()}

              >
                {row.Assests}
              </TableCell>
              <TableCell
                key={row.createdDate * Math.random()}

              >
                {row.createdDate}
              </TableCell>

              <TableCell
                key={row.createdDate * Math.random()}

              >
                {row.Action}
              </TableCell>
            </TableRow>

          ))}
        </Table>
      </>
    </div>
  )
}

export default TableDummy


