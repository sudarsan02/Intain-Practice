
import './App.css';
import React from 'react';
import Table from "../src/Components/Table"
import Header from "../src/Components/Header"
// import Sidebar from"../src/Components/Sidebar"
import {Searchbar} from"../src/Components/Searchbar"


const App =()=> {
  return (
    <div >
      <br /><Header /><br />
      <br /><Searchbar />
      <br /><Table/>
    </div>
  );
}

export default App;
