import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



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
  createData('qwertyuio3456789fghj', 'ABC', 0, 81, 2.0, 1, '25-05-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 19.0, 9, 37.0, 1, '05-06-2022'),
  createData('qwertyuio3456789fghj', 'ABC', 18.0, 63, 4.0, 1, '14-06-2022'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 1,
    numeric: false,
    disablePadding: false,
    label: 'Pool Id',
  },
  {
    id: 2,
    numeric: true,
    disablePadding: false,
    label: 'Pool Owner Name',
  },
  {
    id: 3,
    numeric: true,
    disablePadding: false,
    label: 'Pool Name',
  },
  {
    id: 4,
    numeric: true,
    disablePadding: false,
    label: 'Pool Description',
  },
  {
    id: 5,
    numeric: true,
    disablePadding: false,
    label: 'Pool start Date',
  },
  {
    id: 6,
    numeric: true,
    disablePadding: false,
    label: 'No. of Assets',
  },
  {
    id: 7,
    numeric: true,
    disablePadding: false,
    label: 'Pool Created Date',
  },
];

const EnhancedTableHead = (props) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };


  // const [search, setSearch] = useState("")
  // const [show, setShow] = useState(false)


  // const FilterList = search.filter(pname => {
  //   return (
  //     pname.Pool
  //   )
  // })

  // const handleChange = e => {
  //   setSearch(e.target.value);
  //   if (e.target.value === "") {
  //     setShow(false);
  //   }
  //   else {
  //     setShow(true);
  //   }
  // };
  return (
    <>
     <Button variant="disabled">ASSIGN POOL</Button>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    </>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >


      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip  >
          <IconButton >
            <CloudDownloadIcon />
            <LocalPrintshopIcon />
            <ViewColumnIcon />
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleClick = (event, Pool) => {
    const selectedIndex = selected.indexOf(Pool);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Pool);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (Pool) => selected.indexOf(Pool) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
            // numSelected={selected.length}
            // order={order}
            // orderBy={orderBy}
            // onSelectAllClick={handleSelectAllClick}
            // onRequestSort={handleRequestSort}
            // rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Pool);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.Pool)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Pool}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.Pool}
                      </TableCell>
                      <TableCell align="right">{row.Poolowner}</TableCell>
                      <TableCell align="right">{row.Poolname}</TableCell>
                      <TableCell align="right">{row.Pooldes}</TableCell>
                      <TableCell align="right">{row.Poolstart}</TableCell>
                      <TableCell align="right">{row.Assests}</TableCell>
                      <TableCell align="right">{row.createdDate}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </Box>
  );
}