import logo from './logo.svg';
import './App.css';
import React from 'react';

// import Drawer from '@mui/material/Drawer';
import Table from "../src/Components/Table"
// import Header from "../src/Components/Header"

import Header from "../src/Components/Header"

const App =()=> {
  return (
    <div className="App">
      
      <div>
        <Header />
       <Table/>
        </div>
    </div>
  );
}

export default App;
