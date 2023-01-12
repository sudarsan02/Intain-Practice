import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

const ButtonAppBar =() =>{
  return (
    <Box >
   <AppBar style={{ background: ' #ccffcc',color:"black",fontSize:"18px" , }} >
     <Toolbar>
         <Grid container>Pool Details</Grid >
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar