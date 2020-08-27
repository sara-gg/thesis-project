import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Form,
  FormField,
  RangeInput,
  Text,
  TextArea,
  Select,
} from "grommet";
import ApiService from "../ApiService/ApiService";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";
import { NewProduct } from "../models/newProduct";
import { Category } from "../models/category";
import {
  setNewProductDetails,
  setIsAuthenticated,
  submitNewProduct,
  setProductImages,
  getCategories,
  setCategoryName,
} from "../actions";

interface StateProps {
  isAuthenticated: boolean;
  title: string;
  description: string;
  images: File; // Allows just one picture for the MVP then change to -> images: string[];
  location?: string;
  price: number;
  quantity: number;
  height: number;
  width: number;
  depth: number;
  material: string;
  category_id: string;
  categoryName: string;
  categories: Category[];
}

interface DispatchProps {
  setIsAuthenticated: (b: boolean) => void;
  setNewProductDetails: ({
    name,
    value,
  }: {
    [name: string]: string | number | string[];
  }) => any;
  submitNewProduct: (product: NewProduct) => any;
  setProductImages: (payload: string) => void;
  getCategories: () => void;
  setCategoryName: (value: string) => any;
}

const initialState = {
  title: "",
  description: "",
  images: null, // Allows just one picture for the MVP then change to -> images: [] as string[],
  location: "",
  price: 0,
  quantity: 0,
  height: 0,
  width: 0,
  depth: 0,
  material: "",
  category_id: "",
};

type Props = StateProps & DispatchProps;

const NewProductForm = ({
  setNewProductDetails,
  getCategories,
  setCategoryName,
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
  categories,
  categoryName,
}: Props) => {
  const [newProduct, setNewProduct] = useState(initialState);
  const [productImage, setProductImage] = useState<File>();
  const userId: any = localStorage.getItem("userId");

  let history = useHistory();

  useEffect(() => {
    getCategories();
    setNewProduct(initialState);
  }, []);

  const materialOptions = [
    "wood",
    "leather",
    "metal",
    "velvet",
    "fabric",
    "concrete",
    "glass",
  ];

  const categoryNamesToIds: { [name: string]: number } = {};

  categories.forEach((category) => {
    categoryNamesToIds[category.name] = category.id;
  });
  const categoryOptions = Object.keys(categoryNamesToIds);

  const onDrop = (files: File[], pictures: string[]) => {
    setProductImage(files[0]);
  };

  const handleChange = (e: any) => {
    const {
      name,
      value,
    }: {
      name: string;
      value: string | number | string[];
    } = e.target;
    setNewProductDetails({ name, value });
  };

  const handleCategoryChange = (e: any) => {
    const { name } = e.target;
    const { option } = e;
    const categoryId = categoryNamesToIds[option];

    setNewProductDetails({
      name,
      option: categoryId,
    });
    setCategoryName(option);
  };

  const handleSelectChange = (e: any) => {
    const { name } = e.target;
    const { option } = e;
    setNewProductDetails({
      name,
      option,
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    newProduct.category_id = category_id;
    await ApiService.createNewProduct(newProduct, e.target, productImage);
    window.location.assign(`http://localhost:3000/usergallery/${userId}`);
  };

  return (
    <Box
      align="center"
      justify="center"
      margin={{ top: "medium", bottom: "large" }}
      background={{ color: "white", opacity: "strong" }}
      width="75%"
      round="small"
    >
      <Box direction="row" align="center" justify="center">
        <Text
          size="xlarge"
          color="blue"
          margin={{ top: "medium" }}
          weight="bold"
          alignSelf="center"
        >
          <span className="heading-title">New Product</span>
        </Text>
      </Box>
      <Text size="large" alignSelf="center" margin="small">
        {" "}
        · · ·{" "}
      </Text>
      <Box direction="row" align="center">
        <Box
          width="40%"
          margin={{ horizontal: "50px", vertical: "medium" }}
          align="center"
        >
          <Form onSubmit={handleSubmit}>
            <FormField
              name="title"
              label={
                <Box direction="row">
                  <Text>Product name</Text>
                  <Text color="status-critical"> *</Text>
                </Box>
              }
              value={title}
              onChange={handleChange}
              required
            ></FormField>
            <FormField
              label={
                <Box direction="row">
                  <Text>Description</Text>
                  <Text color="status-critical"> *</Text>
                </Box>
              }
              name="description"
              value={description}
              required
              component={TextArea}
              onChange={handleChange}
            />
            <FormField
              label={
                <Box direction="row">
                  <Text>Location</Text>
                  <Text color="status-critical"> *</Text>
                </Box>
              }
              name="location"
              value={location}
              required
              onChange={handleChange}
            />
            <FormField
              label={
                <Box direction="row">
                  <Text>{`Quantity: ${quantity}`}</Text>
                  <Text color="status-critical"> *</Text>
                </Box>
              }
              name="quantity"
              value={quantity}
              component={RangeInput}
              pad
              min={1}
              max={100}
              onChange={handleChange}
              required
            />
            <FormField
              label={
                <Box direction="row">
                  <Text>Price</Text>
                  <Text color="status-critical"> *</Text>
                </Box>
              }
              name="price"
              value={price}
              required
              validate={{ regexp: /\d+\.?\d*$/, message: "decimals allowed" }}
              onChange={handleChange}
            />

            <FormField
              label="Height(cm)"
              name="height"
              onChange={handleChange}
            />
            <FormField label="Width(cm)" name="width" onChange={handleChange} />
            <FormField label="Depth(cm)" name="depth" onChange={handleChange} />

            <Select
              name="material"
              placeholder="Select material"
              closeOnChange={true}
              value={material}
              options={materialOptions}
              onChange={handleSelectChange}
              margin={{ vertical: "medium" }}
              alignSelf="stretch"
            />

            <Select
              name="category_id"
              placeholder="Category"
              closeOnChange={true}
              value={categoryName}
              options={categoryOptions}
              onChange={handleCategoryChange}
              margin={{ bottom: "small" }}
              alignSelf="center"
            />

            <Box
              direction="column"
              alignSelf="end"
              margin={{ vertical: "large" }}
            >
              <Button
                size="large"
                type="submit"
                alignSelf="end"
                label="Publish"
                primary
              />
            </Box>
          </Form>
        </Box>
        <Box width="40%">
          <ImageUploader
            withIcon={true}
            onChange={onDrop}
            buttonText={"Upload image"}
            withLabel={true}
            label={
              "Upload images of your product here, accepted: jpg, gif, png"
            }
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            withPreview={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

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
    categories: state.categories,
    categoryName: state.categoryName,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps, {
  setNewProductDetails,
  setIsAuthenticated,
  submitNewProduct,
  setProductImages,
  getCategories,
  setCategoryName,
})(NewProductForm);
