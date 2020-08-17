import React, { useState } from "react";
import { Box, Button, Form, FormField, RangeInput, TextArea } from "grommet";
import ApiService from "../ApiService/ApiService";
import { connect } from "react-redux";

interface FormState {
  title: string;
  description: string;
  images: string[];
  location?: string;
  price: number;
  quantity: number;
  size?: number;
  //size?: "small" | "medium" | "large" | "xlarge";
}

const initialState = {
  title: "",
  description: "",
  images: [],
  location: "",
  price: 0,
  quantity: 0,
  size: 0,
};

type Props = {
  isAuthenticated: boolean;
  setIsAuthenticated: (b: boolean) => void;
};

const NewProductForm = ({ isAuthenticated, setIsAuthenticated }: Props) => {
  const [newProduct, setNewProduct] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const {
      title,
      description,
      images,
      location,
      price,
      quantity,
      size,
    } = newProduct;
    const product = {
      title,
      description,
      images,
      location,
      price,
      quantity,
      size,
    };
    const res = await ApiService.createNewProduct(product);

    if (res.error) {
      alert(`${res.message}`);
      setNewProduct(initialState);
    } else {
      const accessToken = res.token;
      localStorage.setItem("accessToken", accessToken);
      setIsAuthenticated(true);
      window.location.replace("http://localhost:3000/home");
    }
  };

  return (
    <Box direction="row" flex align="center" justify="center">
      <Box width="medium">
        <Form
          onReset={(event: any) => console.log(event)}
          onChange={(value: FormState) => console.log("onChange", value)}
          onSubmit={handleSubmit}
        >
          <FormField
            label="Name"
            name="title"
            value={newProduct.title}
            required
            validate={{ regexp: /^[a-z]/i }}
            onChange={handleChange}
          />
          <FormField
            label="Description"
            name="description"
            value={newProduct.description}
            required
            component={TextArea}
            onChange={handleChange}
          />
          <FormField
            label={`Quantity: ${newProduct.quantity}`}
            name="quantity"
            value={newProduct.quantity}
            component={RangeInput}
            pad
            min={1}
            max={100}
            onChange={handleChange}
          />
          <FormField
            label="Price"
            name="price"
            value={newProduct.price}
            required
            validate={{ regexp: /\d+\.?\d*$/, message: "decimals allowed" }}
            onChange={handleChange}
          />
          <FormField label="Size" name="size" onChange={handleChange} />
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
      <Box width="medium" background="light-2">
        <div>upload image here</div>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsAuthenticated: (boolean: boolean) =>
      dispatch({ type: "AUTHENTICATED", payload: boolean }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);
