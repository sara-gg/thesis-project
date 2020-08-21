import React, { useState } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  RangeInput,
  Text,
  TextArea,
  TextInput,
  Select,
} from "grommet";
import ApiService from "../ApiService/ApiService";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import { setNewProductDetails, setIsAuthenticated } from "../actions";

interface FormState {
  title: string;
  description: string;
  images: string;   // Allows just one picture for the MVP then change to -> images: string[];
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

type Props = StateProps & DispatchProps;

const NewProductForm = ({
  isAuthenticated,
  setIsAuthenticated,
  setNewProductDetails,
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
}: Props) => {
  const [newProduct, setNewProduct] = useState({
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
  });

  const onDrop = (files: File[], pictures: string) => {   // after MVP change -> files: File[], pictures: string[]
    setNewProduct((prevState) => ({
      ...prevState,
      images: prevState.images.concat(pictures),
    }));
  };

  const handleChange = (e: any) => {
    const {
      name,
      value,
    }: {
      name: string;
      value: string | number | string[];
    } = e.target;
    if (!value) {
      const option = e.option;
      console.log(e.option)
      setNewProductDetails({ name, option });
    } else {
      console.log(value);
      setNewProductDetails({ name, value });
    } 
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

    window.location.replace("http://localhost:3000/newproduct");
  };

  return (
    <Box direction="row" flex align="center" justify="center">
      <Box width="medium" margin="50px">
        <Form
          onChange={(value) => console.log("Change", value)}
          onSubmit={handleSubmit}
        >
          <FormField
            name="title"
            label={
              <Box direction="row">
                <Text>Product name</Text>
                <Text color="status-critical"> *</Text>
              </Box>
            }
            required
          >
            <TextInput name="title" value={title} onChange={handleChange} />
          </FormField>
          {/* <FormField
            label="Product name"
            name="title"
            value={title}
            required
            validate={{ regexp: /^[a-z]/i }}
            onChange={handleChange}
          /> */}
          <FormField
            label="Description"
            name="description"
            value={description}
            required
            component={TextArea}
            onChange={handleChange}
          />
          <FormField
            label="Location"
            name="location"
            value={location}
            required
            onChange={handleChange}
          />
          <FormField
            label={`Quantity: ${quantity}`}
            name="quantity"
            value={quantity}
            component={RangeInput}
            pad
            min={1}
            max={100}
            onChange={handleChange}
          />
          <FormField
            label="Price"
            name="price"
            value={price}
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

interface StateProps {
  isAuthenticated: boolean;
  title: string;
  description: string;
  images: string[];
  location?: string;
  price: number;
  quantity: number;
  height: number;
  width: number;
  depth: number;
  material: string,
  category_id: string,
}

const mapStateToProps = (state: StateProps) => {
  return {
    title: state.title,
    description: state.description,
    images: state.images,
    location: state.location,
    price: state.price,
    quantity: state.quantity,
    height: state.height,
    width: state.width,
    depth: state.depth,
    material: state.material,
    category_id: state.category_id,
    isAuthenticated: state.isAuthenticated,
  };
};

interface DispatchProps {
  setIsAuthenticated: (b: boolean) => void;
  setNewProductDetails: ({
    name,
    value,
  }: {
    [name: string]: string | number | string[];
  }) => any;
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setIsAuthenticated: (boolean: boolean) =>
//       dispatch({ type: "AUTHENTICATED", payload: boolean }),
//   };
// };

export default connect(mapStateToProps, {
  setNewProductDetails,
  setIsAuthenticated,
})(NewProductForm);
