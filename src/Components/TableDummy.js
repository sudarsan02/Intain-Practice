import { Button, listClasses, Tab } from '@mui/material';
import React from 'react'
import { uuid } from 'uuidv4';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { create } from '@mui/material/styles/createTransitions';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, green } from '@mui/material/colors';
function createData(Pool, Poolowner, Poolname, Pooldes, Poolstart, Assests, createdDate) {
  return {
    Pool,
    Poolowner,
    Poolname,
    Pooldes,
    Poolstart,
    Assests,
    createdDate
  };

}
const rows = [
  createData('qwertyuio3456789fghj', 'ABC', 37, 67, 43, 1, '01-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 25, 51, 49, 1, '02-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 16, 24, 69, 1, '04-02-2022'),
  createData(' qwertyuio3456789fgj', 'ABC', 60, 24, 40, 1, '05-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 16, 49, 39, 1, '10-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 32, 87, 65, 1, '25-02-2022'),
  createData('cqwertyuio3456789fgh', 'ABC', 90, 37,43,1, '05-03-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 10, 94, 0, 1, '15-03-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 26,65, 70, 1, '23-04-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 20,98, 0,1, '15-05-2022'),
  createData('sudarsan', 'ABC', 0, 81, 20, 1, '25-05-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 19, 9, 37, 1, '05-06-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 18, 63, 40, 1, '14-06-2022'),
];
const head=[
  createData('Pool ID'),
  createData('Pool Owner Name'),
  createData('Pool  Description'),
  createData('Pool start Date'),
  createData('No. of Assets'),
  createData('Pool create Date'),
  createData('Action'),
  
]
const TableDummy = () => {

  const [search, setSearch] = useState("");

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: green,
      color:green,
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
            <StyledTableCell >Pool Description</StyledTableCell>
            <StyledTableCell >Pool Start Date</StyledTableCell>
            <StyledTableCell >no. of Assests</StyledTableCell>
            <StyledTableCell >Pool Created Date</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
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

            </TableRow>
         
        ))}
     </Table>
      </>
    </div>
  )
}

export default TableDummy


