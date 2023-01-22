
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
         
        </Form>
      </div>
    </div>
  );
};

export default ResponsiveDialog;
