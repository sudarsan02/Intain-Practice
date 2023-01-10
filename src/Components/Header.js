import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 ,}}>
   <AppBar style={{ background: ' #ccffcc',color:"black",fontSize:"18px" }} >
     <Toolbar>
         <div>Pool Details</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}