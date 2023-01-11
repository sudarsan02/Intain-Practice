
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";


export const Searchbar = () => {

  return (
    <div>
      <Button variant="disabled">ASSIGN POOL</Button>


      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </div>
  );
};
