import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Form from 'react-jsonschema-form';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
// import { DatePicker } from '@mui/x-date-pickers-pro/DatePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState('true');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };
  const schema = require("../Schema.json");


  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Form schema={schema} >
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
      <TextField id="outlined-basic" label="Pool Name" variant="outlined" />
      <TextField id="outlined-basic" label="Pool Description" variant="outlined" />
      <TextField id="outlined-basic" label="Pool owner Name" variant="outlined" />
     

      {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
       

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Form>
  );
}



// import Form from "react-jsonschema-form";
// import React from "react";
// // const schema = require("../Schema.json")
// const schema = require("../Schema.json");

// const Form1 = () => {
//   return (
//     <div>
//       <Form schema={schema}>
      
//       </Form>
//     </div>
//   );
// };

// export default Form1;
