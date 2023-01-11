import { Button, listClasses } from '@mui/material';
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
  createData('qwertyuio3456789fghj', 'ABC', 3.7, 67, 4.3, 1, '01-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 25.0, 51, 4.9, 1, '02-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 16.0, 24, 6.0, 1, '04-02-2022'),
  createData(' qwertyuio3456789fghj', 'ABC', 6.0, 24, 4.0, 1, '05-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 16.0, 49, 3.9, 1, '10-02-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 3.2, 87, 6.5, 1, '25-02-2022'),
  createData('cqwertyuio3456789fghjh', 'ABC', 9.0, 37, 4.3, 1, '05-03-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 0.0, 94, 0.0, 1, '15-03-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 26.0, 65, 7.0, 1, '23-04-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 0.2, 98, 0.0, 1, '15-05-2022'),
  createData('sudarsan', 'ABC', 0, 81, 2.0, 1, '25-05-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 19.0, 9, 37.0, 1, '05-06-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 18.0, 63, 4.0, 1, '14-06-2022'),
];
const TableDummy = () => {

  const [search, setSearch] = useState("");


  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} />
      {/* {rows.filter((fil)=>fil.Pool.toLowerCase().includes(search)).map((row)=>(
            <li key={row.Pooldes*Math.random()}>{row.Pool}</li>
             ))} */}
      <>
        
          {rows.filter((fil) => fil.Pool.toLowerCase().includes(search)).map((row) => (
            <TableRow>
            <TableCell
              key={row.Pooldes * Math.random()}

            >
              {row.Pool}

            </TableCell>
            </TableRow>
          ))}
        
      </>
    </div>
  )
}

export default TableDummy


