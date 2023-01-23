import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import AlbumIcon from "@mui/icons-material/Album";
import Table from "../Components/Table";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Logo8utIcon from '@mui/icons-material/Logout';


const drawerWidth = 240;

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#DFE3E1" }}>
      <div>
        <Drawer variant="permanent">
          <>
            <ListItem disablePadding>
              <ListItemButton>
               
                  <div >
                    
                    <div style={{ display: "flex", flexDirection: "column",}}>
                      <div style={{ marginBottom: "10%" }}>
                        <MailIcon value='Mail'/>
                      </div>
                      <div style={{ marginBottom: "10%" }}>
                        <AlbumIcon />
                      </div>
                      <NewspaperIcon />
                    </div>
    <div  style={{display:"flex",flexDirection:"column",marginTop:"80vh"}}>
      <Logo8utIcon />
      </div>
                  
                  </div>
                
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </>
        </Drawer>
      </div>

      <Box component="main" sx={{ flexGrow: 3 }}>
        <Header />
        <Table />
        <Footer />
      </Box>
    </Box>
  );
}
