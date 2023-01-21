// import { Button } from "@mui/material";
// import React, { useState } from "react";
// import Modal from "@mui/material/Modal";

// const BottomFooter = () => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         display: "flex",
//         justifyContent: "flex-end",
//         padding: "0.7%",
//       }}
//     >
//       <Button
//         style={{
//           backgroundColor: "#A5A5A5",
//           marginRight: "1%",
//           color: "black",
//         }}
//       >
//         BACK
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >

//       </Modal>
//       <Button style={{ backgroundColor: "#00796B", color: "white" }}>
//         CREATE POOL
//       </Button>
//     </div>
//   );
// };
// export default BottomFooter;

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Form from "react-jsonschema-form";
import { useState } from "react";

const schema = require("../Schema.json");
const onSubmit = ({ formData }) => alert("Data submitted: ", formData);

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0.7%",
      }}
    >
      <Button
        style={{
          backgroundColor: "#A5A5A5",
          marginRight: "1%",
          color: "black",
        }}
      >
        CANCEL
      </Button>
      <Button
        onClick={handleOpen}
        style={{ backgroundColor: "#00796B", color: "white" }}
      >
        CREATE POOL
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form schema={schema} children={true}  onSubmit={onSubmit}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="button"
              style={{
                backgroundColor: "#f6f6f6",
                color: "#5A5A5A",
                marginRight: "3%",
              }}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              style={{ backgroundColor: "#00796B", color: "white" }}
            >
              CREATE POOL
            </Button>
          </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
