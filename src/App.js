
import './App.css';
import React from 'react';
import Table from "../src/Components/Table"
import Header from "../src/Components/Header"
import Sidebar from"../src/Components/Sidebar"
import {Searchbar} from"../src/Components/Searchbar"
// import Sbar from"../src/Components/Sbar.css" 
import File from "../src/Components/File"

const App =()=> {
  return (
    <div >
      <br /><Header /><br />
      <br /><Searchbar />
      {/* <Sidebar /> */}
      <br /><Table/>
      {/* <br/><File/> */}
    </div>
  );
}

export default App;
