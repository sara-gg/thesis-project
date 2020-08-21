import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  RangeInput,
  TextArea,
  Select,
} from "grommet";
import ApiService from "../ApiService/ApiService";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import { useHistory } from "react-router-dom";

interface FormState {
  title: string;
  description: string;
  images: string; // Allows just one picture for the MVP then change to -> images: string[];
  location?: string;
  price: number;
  quantity: number;
  height: number;
  width: number;
  depth: number;
  material: string;
  category_id: string;

  //size?: "small" | "medium" | "large" | "xlarge";
}

const initialState = {
  title: "",
  description: "",
  images: "", // Allows just one picture for the MVP then change to -> images: [] as string[],
  location: "",
  price: 0,
  quantity: 0,
  height: 0,
  width: 0,
  depth: 0,
  material: "",
  category_id: "",
};

const materialOptions = [
  "wood",
  "leather",
  "metal",
  "velvet",
  "fabric",
  "concrete",
  "glass",
];

const categoryOptions = [0, 1, 2, 3];

interface StateProps {
  isAuthenticated: boolean;
}

interface DispatchProps {
  setIsAuthenticated: (b: boolean) => void;
}

type Props = StateProps & DispatchProps;

const NewProductForm = ({ isAuthenticated, setIsAuthenticated }: Props) => {
  let history = useHistory();
  const [newProduct, setNewProduct] = useState(initialState);

  const onDrop = (files: File[], pictures: string) => {
    // after MVP change -> files: File[], pictures: string[]
    setNewProduct((prevState) => ({
      ...prevState,
      images: prevState.images.concat(pictures),
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name } = e.target;
    const { option } = e;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: option,
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
      height,
      width,
      depth,
      material,
      category_id,
    } = newProduct;
    const product = {
      title,
      description,
      images,
      location,
      price,
      quantity,
      height,
      width,
      depth,
      material,
      category_id,
    };
    await ApiService.createNewProduct(product);

    history.push("/userGallery");
  };

  return (
    <Box direction="row" flex align="center" justify="center">
      <Box width="medium" margin="50px">
        <Form
          onChange={(value: FormState) => console.log("onChange", value)}
          onSubmit={handleSubmit}
        >
          <FormField
            label="Product name"
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
            label="Location"
            name="location"
            value={newProduct.location}
            required
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

          <FormField label="Height(cm)" name="height" onChange={handleChange} />
          <FormField label="Width(cm)" name="width" onChange={handleChange} />
          <FormField label="Depth(cm)" name="depth" onChange={handleChange} />

          <Select
            name="material"
            placeholder="Select material"
            // multiple
            closeOnChange={true}
            value={newProduct.material}
            options={materialOptions}
            onChange={handleSelectChange}
          />

          <Select
            name="category_id"
            placeholder="category"
            // multiple
            closeOnChange={true}
            value={newProduct.category_id}
            options={categoryOptions}
            onChange={handleSelectChange}
          />

          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            {/* <Button label="Cancel" /> */}
            <Button type="submit" label="Publish" primary />
          </Box>
        </Form>
      </Box>
      <Box width="medium">
        <ImageUploader
          withIcon={true}
          // onChange={onDrop}    // comentedfor MVP
          buttonText={"Upload image"}
          withLabel={true}
          label={"Upload images of your product here, accepted: jpg, gif, png"}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          withPreview={true}
        />
      </Box>
    </Box>
  );
};

const mapStateToProps = (state: StateProps) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setIsAuthenticated: (boolean: boolean) =>
      dispatch({ type: "SET_USER_DATA", payload: boolean }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);
