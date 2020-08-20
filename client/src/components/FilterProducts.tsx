import React from "react";
import { Box, Button, CheckBox, CheckBoxGroup, Form, FormField } from "grommet";

function Login() {
  const materialOptions: string[] = [
    "wood",
    "leather",
    "metal",
    "velvet",
    "fabric",
    "concrete",
    "glass",
  ];

  return (
    <Box width="medium">
      {/* <Form
        onSubmit={({ value, touched }) => console.log("Submit", value, touched)}
      >
        <FormField
          label="Toggle"
          name="toggle"
          htmlFor="check-box-toggle"
        >
          <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
            <CheckBox
              id="check-box-toggle"
              name="toggle"
              label="CheckBox"
              toggle
            />
          </Box>
        </FormField>
        <FormField label="Default" name="checkbox" htmlFor="check-box" required>
          <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
            <CheckBox id="check-box" name="checkbox" label="Required" />
          </Box>
        </FormField>
        <FormField
          label="Materials"
          name="checkboxgroup"
          htmlFor="check-box-group"
          required
        >
          <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
            <CheckBoxGroup
              id="group"
              name="checkboxgroup"
              options={materialOptions}
            />
          </Box>
        </FormField>
        <Button type="submit" label="Submit" />
      </Form> */}
    </Box>
  );
}

export default Login;
