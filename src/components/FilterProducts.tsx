import React, { useState, useEffect } from "react";
import { Box, Button, CheckBoxGroup, Heading, Form, FormField } from "grommet";
import { Close } from "grommet-icons";
import { connect } from "react-redux";
import { Materials } from "../models/materials";
import { Product } from "../models/product";
import ApiService from "../ApiService/ApiService";
import { filterCategoryProducts, getProductsForCategory } from "../actions";
import "../styles/FilterForm.scss";

type Props = {
  onClose: () => void;
  filterCategoryProducts: (
    category_id: number,
    material?: string,
    location?: string,
    otherProperty?: any
  ) => Promise<any>;
  categoryId: number;
  getProductsForCategory: (id: number) => Promise<any>;
  categoryProducts: Product[];
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

const FilterProducts = ({
  onClose,
  filterCategoryProducts,
  categoryId,
  getProductsForCategory,
  categoryProducts,
}: any) => {
  const [materials, setMaterials] = useState<Array<string>>([]);
  const [location, setLocation] = useState<string>("");
  const [sellers, setSellers] = useState<Array<number> | undefined>([]);
  const [sellerNames, setSellerNames] = useState<Array<any>>([]);
  const [selectedSellers, setSelectedSellers] = useState<any>([]);

  useEffect(() => {
    let categorySellers: any[] = [];

    categoryProducts.forEach((product: Product) => {
      categorySellers.push(product.user_id);
    });

    setSellers(categorySellers);
    let uniqueSellers = [...new Set(categorySellers)];
    uniqueSellers.forEach((id) => {
      ApiService.getPublicUserData(id).then((res) => {
        setSellerNames((sellerNames: any) => [...sellerNames, res]);
      });
    });
  }, [categoryProducts]);

  const sellerNamesToLabels: any = [];

  sellerNames.forEach((seller: any) => {
    sellerNamesToLabels.push({ label: seller.username, value: seller.id });
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();

    filterCategoryProducts(categoryId, materials[0], location, selectedSellers);
  };
  const handleReset = (event: any) => {
    event.preventDefault();
    getProductsForCategory(categoryId);
  };
  const handleMaterials = (event: any) => {
    const { value, option } = event;
    setMaterials(value);
  };

  const handleSellers = (event: any) => {
    const { value, option } = event;

    setSelectedSellers(value);
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
      <Box direction="row" justify="between" align="center" width="100vw">
        <Heading level={3} margin={{ left: "large" }}>
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
        <FormField
          label="Sellers"
          name="checkboxgroup"
          htmlFor="check-box-group"
        >
          <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
            <CheckBoxGroup
              options={sellerNamesToLabels}
              onChange={handleSellers}
              value={selectedSellers}
            />
          </Box>
        </FormField>
        <Box direction="column" justify="end" margin={{ top: "medium" }}>
          <Button label="Clear all" onClick={handleReset} primary />
          <br />
          <Button type="submit" label="Apply" primary />
        </Box>
      </Form>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    categoryProducts: state.categoryProducts,
  };
};

export default connect(mapStateToProps, {
  getProductsForCategory,
  filterCategoryProducts,
})(FilterProducts);
