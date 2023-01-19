import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  return (
    <Box >
        
      <AppBar position="static" style={{ background: '#dfedf3 ',color:"black",fontSize:"18px" ,marginTop:"5px" }}>
        <Toolbar>
          
          <Typography variant="h6" >
            Pool Details
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}