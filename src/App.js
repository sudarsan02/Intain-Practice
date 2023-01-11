
import './App.css';
import React from 'react';
import Table from "../src/Components/Table"
import Header from "../src/Components/Header"
import Sidebar from"../src/Components/Sidebar"
import {Searchbar} from"../src/Components/Searchbar"
import Form1 from './Components/Form';
// import Sbar from"../src/Components/Sbar.css" 
// import File from "../src/Components/File"
// import { ProSidebarProvider } from 'react-pro-sidebar';
import TableDummy from './Components/TableDummy';


const App =()=> {
  return (
    <div >
   <TableDummy/>
      {/* <br /><Header /><br /> */}
       {/* <br /><Searchbar /> */}
      {/* <br /><Table/>  */}
      {/* <br/><Form1/> */}
      {/* <ProSidebarProvider>
      <Sidebar/>
</ProSidebarProvider>; */}

      
    </div>
  );
}

export default App;
