
// import Form from "@rjsf/core";
// import Form from '@rjsf/core';
import Form from "react-jsonschema-form"
import React from 'react'
const schema = require("../Schema.json")
const Form1 = () => {
    return (
        <div>


    <Form
        schema={schema}

        // uiSchema={uiSchema}
    >
      <div />
    </Form>
        </div>
    )
}

export default Form1

