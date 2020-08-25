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
import { connect } from "react-redux";
import { Materials } from "../models/materials";
import { filterCategoryProducts, getProductsForCategory } from "../actions";
import "../styles/FilterForm.scss";

interface DispatchProps {
  filterCategoryProducts: (
    category_id: number,
    material?: string,
    location?: string
  ) => Promise<any>;
  getProductsForCategory: (id: number) => Promise<any>;
}
type Props = {
  onClose: () => void;
  categoryId: number;
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

function FilterProducts({
  onClose,
  filterCategoryProducts,
  categoryId,
  getProductsForCategory,
}: any) {
  const [materials, setMaterials] = useState<Array<string>>([]);
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(categoryId, materials[0], location);
    filterCategoryProducts(categoryId, materials[0], location);
  };
  const handleReset = (event: any) => {
    event.preventDefault();
    getProductsForCategory(categoryId);
  };
  const handleMaterials = (event: any) => {
    const { value, option } = event;
    setMaterials(value);
  };

  const handleLocation = (event: any) => {
    const value = event.target.value;
    setLocation(value);
  };

  return (
    <Box
      direction="column"
      width="100vw"
      align="center"
      justify="around"
      background="offwhite"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      basis="full"
      className="filter-container"
    >
      <Box
        direction="row"
        justify="between"
        align="center"
        width="100vw"
        margin="10px"
      >
        <Heading level={3} margin="small">
          Filter
        </Heading>
        <Button icon={<Close />} onClick={onClose} />
      </Box>
      <Form
        className="filter-form"
        onSubmit={handleSubmit}
        onChange={(value) => console.log("Change", value)}
      >
        <FormField
          label="Materials"
          name="checkboxgroup"
          htmlFor="check-box-group"
        >
          <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
            <CheckBoxGroup
              options={materialNamesToLabels}
              onChange={handleMaterials}
              value={materials}
            />
          </Box>
        </FormField>
        <FormField
          label="Location"
          name="location"
          value={location}
          onChange={handleLocation}
        />
        <Box direction="column" justify="end" margin={{ top: "medium" }}>
          <Button label="Clear all" onClick={handleReset} />
          <Button type="submit" label="Publish" primary />
        </Box>
      </Form>
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps, {
  getProductsForCategory,
  filterCategoryProducts,
})(FilterProducts);
