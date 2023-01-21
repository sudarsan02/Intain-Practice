import { Button } from "@mui/material";
import * as React from "react";
import Form from "react-jsonschema-form";
import "../App.css";

const ResponsiveDialog = () => {
  const schema = require("../Schema.json");
  const onSubmit = ({ formData }) => alert("Data submitted: ", formData);

  

  return (
    <div
      style={{
        width: "40%",
      }}
    >
      <div className="App">
        <Form schema={schema} onSubmit={onSubmit} children={true}>
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
      </div>
    </div>
  );
};

export default ResponsiveDialog;
