import React, { useState } from "react";
import {
  Box,
  Button,
  CheckBox,
  CheckBoxGroup,
  Heading,
  Form,
  FormField,
  Text,
} from "grommet";
import { Close } from "grommet-icons";
import { Materials } from "../models/materials";

type Props = {
  onClose: () => void;
};

const materialOptions: Array<Materials> = [
  "wood",
  "leather",
  "metal",
  "velvet",
  "fabric",
  "concrete",
  "glass",
];

const materialNamesToLabels: any = [];

materialOptions.forEach((material) => {
  materialNamesToLabels.push({ label: material, value: material });
});

function FilterProducts({ onClose }: Props) {
  const [materials, setMaterials] = useState<string | object>(materialNamesToLabels[0]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleMaterials = (event: any) => {
    const { value, option } = event;
    setMaterials(value);
    if (value) {
     // props.searchList(event.target.value);
    } else {
     // props.emptySearch();
    }
  };

  return (
    <Box
      direction="column"
      fill
      align="center"
      justify="around"
      background="offwhite"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
    >
      <Box direction="row" justify="between" align="center">
        <Heading level={3} margin="small">
          Filter
        </Heading>
        <Button icon={<Close />} onClick={onClose} />
      </Box>
      <Form
        onSubmit={handleSubmit}
        //({ value, touched }) => console.log('Submit', value, touched)
      >
        <FormField label="Toggle" name="toggle" htmlFor="check-box-toggle">
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
              options={materialNamesToLabels}
              onChange={({ value, option }: any) => console.log(value, option)}
            />
          </Box>
        </FormField>
        <FormField
          label="Location"
          name="location"
          //value={location}
          required
          // onChange={handleChange}
        />
      </Form>
    </Box>
  );
}

export default FilterProducts;
