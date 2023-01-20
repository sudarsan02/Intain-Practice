import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import AlbumIcon from "@mui/icons-material/Album";
import Table from "../Components/Table";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import {ThemeProvider, createTheme } from '@mui/system';
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
  const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
//   const theme = createTheme({
//     palette: {
//       background: {
//         paper: '#fff',
//       },
//       text: {
//         primary: '#173A5E',
//         secondary: '#46505A',
//       },
//       action: {
//         active: '#001E3C',
//       },
//       success: {
//         dark: '#009688',
//       },
//     },
//   });

  return (
    <Box sx={{ display: "flex",backgroundColor:"#DFE3E1" }}>
      <div>
        <Drawer variant="permanent"   >
          <List >
            <ListItem disablePadding >
              <ListItemButton>
                <>
                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ marginBottom: "10%" }}>
                        <MailIcon />
                      </div>
                      <div style={{ marginBottom: "10%" }}>
                        <AlbumIcon />
                      </div>
                      <NewspaperIcon />
                    </div>
                    {/* <div style={{display:"flex",flexDirection:"column",alignContent:"flex-end"}}>
                  <LogoutIcon/>
                  </div> */}
                  </div>
                </>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
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
